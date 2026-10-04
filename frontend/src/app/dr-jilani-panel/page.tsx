"use client";

import { useState, useEffect } from "react";
import { 
  Lock, Phone, Mail, MapPin, Calendar, 
  RefreshCw, LogOut, CheckCircle2, XCircle, Trash2,
  Search, Users, Clock, CheckCircle,
  Activity, TrendingUp, Filter, Shield, Download
} from "lucide-react";

interface Appointment {
  _id: string;
  patientName: string;
  phone: string;
  email: string;
  address: string;
  preferredDate: string;
  service: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [token, setToken] = useState<string>("");

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://national-hospital-portal.onrender.com";

  useEffect(() => {
    const savedToken = localStorage.getItem("adminToken");
    if (savedToken) {
      setToken(savedToken);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && token) fetchAppointments();
  }, [isLoggedIn, token]);

  const handleUnauthorized = () => {
    localStorage.removeItem("adminToken");
    setToken("");
    setIsLoggedIn(false);
    setError("Session expired. Please login again.");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem("adminToken", data.token);
        setToken(data.token);
        setIsLoggedIn(true);
        setPassword("");
        setError("");
      } else {
        setError(data.message || "Invalid password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Failed to connect to server. Try again.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setToken("");
    setIsLoggedIn(false);
    setPassword("");
    setAppointments([]);
  };

  const fetchAppointments = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/appointments`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        handleUnauthorized();
        return;
      }

      const data = await response.json();
      if (response.ok) setAppointments(data.data);
    } catch (err) {
      console.error("Error fetching:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`${API_URL}/api/appointments/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.status === 401) {
        handleUnauthorized();
        return;
      }

      if (response.ok) {
        setAppointments((prev) =>
          prev.map((apt) =>
            apt._id === id ? { ...apt, status: newStatus as Appointment["status"] } : apt
          )
        );
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this appointment?")) return;

    try {
      const response = await fetch(`${API_URL}/api/appointments/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        handleUnauthorized();
        return;
      }

      if (response.ok) {
        setAppointments((prev) => prev.filter((apt) => apt._id !== id));
      }
    } catch (err) {
      console.error("Error deleting:", err);
    }
  };

  // ==================== EXPORT CSV ====================
  const handleExportCSV = () => {
    if (appointments.length === 0) {
      alert("No appointments to export.");
      return;
    }

    const headers = [
      "Patient Name",
      "Phone",
      "Email",
      "Address",
      "Preferred Date",
      "Service",
      "Status",
      "Booked On",
    ];

    const rows = appointments.map((apt) => [
      `"${apt.patientName}"`,
      `"${apt.phone}"`,
      `"${apt.email}"`,
      `"${(apt.address || "").replace(/"/g, '""')}"`,
      `"${apt.preferredDate}"`,
      `"${apt.service}"`,
      `"${apt.status}"`,
      `"${new Date(apt.createdAt).toLocaleString()}"`,
    ]);

    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `appointments_${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Filtered appointments
  const filteredAppointments = appointments.filter((apt) => {
    const matchesSearch =
      (apt.patientName || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (apt.phone || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (apt.email || "").toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || apt.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: appointments.length,
    pending: appointments.filter((a) => a.status === "pending").length,
    confirmed: appointments.filter((a) => a.status === "confirmed").length,
    completed: appointments.filter((a) => a.status === "completed").length,
  };

  // ==================== LOGIN SCREEN ====================
  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-[#020813] flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

        <div className="w-full max-w-md relative z-10">
          <div className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.8)]">
            
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-teal-500 rounded-[1.5rem] flex items-center justify-center shadow-[0_15px_40px_-10px_rgba(37,99,235,0.6)]">
                  <Shield className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-4 border-[#020813] flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-3xl font-black text-white mb-2 tracking-tight">Admin Portal</h1>
              <p className="text-blue-100/50 text-sm font-light">
                National Hospital & Neuro Center
              </p>
              <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-[10px] font-bold text-green-300 uppercase tracking-widest">JWT Secured</span>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-blue-200/80 uppercase tracking-[0.15em] mb-2.5">
                  Access Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter admin password"
                    className="w-full pl-12 pr-5 py-4 rounded-2xl bg-black/50 border border-white/10 focus:outline-none focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/20 text-white placeholder-gray-600 transition-all text-sm font-medium"
                  />
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-xl text-sm">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span className="font-medium">{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoggingIn}
                className="group w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white font-bold py-4 rounded-2xl shadow-[0_15px_30px_-10px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isLoggingIn ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Authenticating...
                    </>
                  ) : (
                    <>
                      Unlock Dashboard
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>

          <p className="text-center text-xs text-blue-100/30 mt-6 font-light">
            Protected by JWT encryption
          </p>
        </div>
      </main>
    );
  }

  // ==================== DASHBOARD ====================
  return (
    <main className="min-h-screen bg-[#f5f7fb]">
      
      <header className="border-b border-gray-200/60 sticky top-0 z-40 backdrop-blur-xl bg-white/80">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center shadow-[0_8px_20px_-5px_rgba(37,99,235,0.5)]">
              <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-lg font-black text-[#0b2447] leading-none tracking-tight">
                National<span className="text-blue-600">Admin</span>
              </h1>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-1">
                Control Center
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-green-50 border border-green-200">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-bold text-green-700">Live</span>
            </div>
            <button
              onClick={handleLogout}
              className="group flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 text-gray-600 hover:text-red-600 px-4 py-2.5 rounded-xl font-bold text-sm transition-all"
            >
              <LogOut className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0b2447] tracking-tight mb-2">
              Dashboard
            </h2>
            <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              Real-time appointment monitoring & management
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleExportCSV}
              disabled={appointments.length === 0}
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-6 py-3.5 rounded-2xl font-bold text-sm shadow-[0_10px_25px_-10px_rgba(34,197,94,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(34,197,94,0.6)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Export CSV
            </button>
            <button
              onClick={fetchAppointments}
              disabled={isLoading}
              className="group flex items-center justify-center gap-2 bg-[#0b2447] hover:bg-blue-600 text-white px-6 py-3.5 rounded-2xl font-bold text-sm shadow-[0_10px_25px_-10px_rgba(11,36,71,0.5)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : "group-hover:rotate-180 transition-transform duration-500"}`} />
              Refresh Data
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8">
          <div className="group relative bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-2xl opacity-60 -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_8px_20px_-5px_rgba(37,99,235,0.4)]">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Total</span>
              </div>
              <p className="text-4xl font-black text-[#0b2447] tracking-tight leading-none">{stats.total}</p>
              <p className="text-xs text-gray-500 font-medium mt-2">All Bookings</p>
            </div>
          </div>

          <div className="group relative bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-100 to-transparent rounded-full blur-2xl opacity-60 -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-[0_8px_20px_-5px_rgba(234,179,8,0.4)]">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <span className="text-[10px] font-black text-yellow-600 uppercase tracking-widest">Pending</span>
              </div>
              <p className="text-4xl font-black text-[#0b2447] tracking-tight leading-none">{stats.pending}</p>
              <p className="text-xs text-gray-500 font-medium mt-2">Awaiting Review</p>
            </div>
          </div>

          <div className="group relative bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-transparent rounded-full blur-2xl opacity-60 -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-[0_8px_20px_-5px_rgba(34,197,94,0.4)]">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">Confirmed</span>
              </div>
              <p className="text-4xl font-black text-[#0b2447] tracking-tight leading-none">{stats.confirmed}</p>
              <p className="text-xs text-gray-500 font-medium mt-2">Ready to Visit</p>
            </div>
          </div>

          <div className="group relative bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-transparent rounded-full blur-2xl opacity-60 -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-[0_8px_20px_-5px_rgba(20,184,166,0.4)]">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest">Done</span>
              </div>
              <p className="text-4xl font-black text-[#0b2447] tracking-tight leading-none">{stats.completed}</p>
              <p className="text-xs text-gray-500 font-medium mt-2">Successfully Met</p>
            </div>
          </div>
        </div>

        {/* Search + Filter */}
        <div className="bg-white rounded-3xl p-5 md:p-6 border border-gray-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, phone, or email..."
                className="w-full pl-12 pr-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-200/60 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 focus:bg-white transition-all text-sm font-medium text-[#0b2447] placeholder-gray-400"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
              <div className="flex items-center gap-1.5 px-3 py-2 text-gray-500">
                <Filter className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider hidden md:inline">Filter</span>
              </div>
              {[
                { key: "all", label: "All", color: "bg-gray-100 text-gray-700 border-gray-200" },
                { key: "pending", label: "Pending", color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
                { key: "confirmed", label: "Confirmed", color: "bg-green-50 text-green-700 border-green-200" },
                { key: "completed", label: "Completed", color: "bg-blue-50 text-blue-700 border-blue-200" },
                { key: "cancelled", label: "Cancelled", color: "bg-red-50 text-red-700 border-red-200" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilterStatus(tab.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border-2 transition-all whitespace-nowrap ${
                    filterStatus === tab.key
                      ? `${tab.color} shadow-sm scale-105`
                      : "bg-white text-gray-400 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {isLoading && (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 mb-4">
              <RefreshCw className="w-8 h-8 text-blue-600 animate-spin" />
            </div>
            <p className="text-gray-500 font-medium">Fetching appointments...</p>
          </div>
        )}

        {!isLoading && filteredAppointments.length === 0 && (
          <div className="bg-white rounded-3xl p-16 text-center border border-gray-100">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gray-50 mb-5">
              <Search className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              {appointments.length === 0 ? "No Appointments Yet" : "No Results Found"}
            </h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              {appointments.length === 0
                ? "Bookings will appear here once patients submit the appointment form."
                : "Try adjusting your search query or filter to find what you're looking for."}
            </p>
          </div>
        )}

        {/* Desktop Table */}
        {!isLoading && filteredAppointments.length > 0 && (
          <div className="hidden lg:block bg-white rounded-3xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#0b2447] to-[#1a3a5f]">
                    <th className="text-left px-6 py-5 text-[10px] font-black uppercase tracking-[0.15em] text-blue-200">Patient</th>
                    <th className="text-left px-6 py-5 text-[10px] font-black uppercase tracking-[0.15em] text-blue-200">Contact</th>
                    <th className="text-left px-6 py-5 text-[10px] font-black uppercase tracking-[0.15em] text-blue-200">Address</th>
                    <th className="text-left px-6 py-5 text-[10px] font-black uppercase tracking-[0.15em] text-blue-200">Preferred Date</th>
                    <th className="text-left px-6 py-5 text-[10px] font-black uppercase tracking-[0.15em] text-blue-200">Service</th>
                    <th className="text-left px-6 py-5 text-[10px] font-black uppercase tracking-[0.15em] text-blue-200">Status</th>
                    <th className="text-right px-6 py-5 text-[10px] font-black uppercase tracking-[0.15em] text-blue-200">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredAppointments.map((apt) => (
                    <tr key={apt._id} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-black text-sm shadow-[0_4px_10px_-3px_rgba(37,99,235,0.4)]">
                            {apt.patientName.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-bold text-[#0b2447] text-sm">{apt.patientName}</p>
                            <p className="text-[11px] text-gray-400 mt-0.5 font-medium">
                              {new Date(apt.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                          <Phone className="w-3.5 h-3.5 text-blue-500" />
                          {apt.phone}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                          <Mail className="w-3 h-3" />
                          {apt.email}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-start gap-2 max-w-[200px]">
                          <MapPin className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                          <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{apt.address}</p>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-xl text-xs font-bold border border-blue-100">
                          <Calendar className="w-3.5 h-3.5" />
                          {apt.preferredDate}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-block bg-gradient-to-r from-teal-50 to-teal-100 text-teal-700 px-3 py-1.5 rounded-xl text-xs font-bold capitalize border border-teal-200">
                          {apt.service.replace("-", " ")}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <select
                          value={apt.status}
                          onChange={(e) => handleStatusChange(apt._id, e.target.value)}
                          className={`px-3 py-2 rounded-xl text-xs font-black uppercase tracking-wider border-2 outline-none cursor-pointer transition-all hover:shadow-md ${
                            apt.status === "confirmed" ? "bg-green-50 text-green-700 border-green-300" :
                            apt.status === "completed" ? "bg-blue-50 text-blue-700 border-blue-300" :
                            apt.status === "cancelled" ? "bg-red-50 text-red-700 border-red-300" :
                            "bg-yellow-50 text-yellow-700 border-yellow-300"
                          }`}
                        >
                          <option value="pending">⏳ Pending</option>
                          <option value="confirmed">✓ Confirmed</option>
                          <option value="completed">✓✓ Completed</option>
                          <option value="cancelled">✗ Cancelled</option>
                        </select>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button
                          onClick={() => handleDelete(apt._id)}
                          className="group/btn p-2.5 rounded-xl bg-red-50 hover:bg-red-500 text-red-600 hover:text-white transition-all duration-300 opacity-60 group-hover:opacity-100"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Mobile Cards */}
        {!isLoading && filteredAppointments.length > 0 && (
          <div className="lg:hidden space-y-4">
            {filteredAppointments.map((apt) => (
              <div key={apt._id} className="bg-white rounded-3xl p-5 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-black">
                      {apt.patientName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-black text-[#0b2447] text-base">{apt.patientName}</p>
                      <p className="text-[11px] text-gray-400 font-medium">
                        {new Date(apt.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider border-2 ${
                    apt.status === "confirmed" ? "bg-green-50 text-green-700 border-green-300" :
                    apt.status === "completed" ? "bg-blue-50 text-blue-700 border-blue-300" :
                    apt.status === "cancelled" ? "bg-red-50 text-red-700 border-red-300" :
                    "bg-yellow-50 text-yellow-700 border-yellow-300"
                  }`}>
                    {apt.status}
                  </span>
                </div>

                <div className="space-y-2.5 text-sm mb-4 bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                    <span className="font-semibold">{apt.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                    <span className="truncate text-xs">{apt.email}</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    <span className="text-xs leading-relaxed">{apt.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4 text-blue-500 shrink-0" />
                    <span className="font-bold text-blue-700 text-xs">{apt.preferredDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Activity className="w-4 h-4 text-blue-500 shrink-0" />
                    <span className="text-xs font-bold capitalize text-teal-700">{apt.service.replace("-", " ")}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <select
                    value={apt.status}
                    onChange={(e) => handleStatusChange(apt._id, e.target.value)}
                    className={`flex-1 px-3 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider border-2 outline-none ${
                      apt.status === "confirmed" ? "bg-green-50 text-green-700 border-green-300" :
                      apt.status === "completed" ? "bg-blue-50 text-blue-700 border-blue-300" :
                      apt.status === "cancelled" ? "bg-red-50 text-red-700 border-red-300" :
                      "bg-yellow-50 text-yellow-700 border-yellow-300"
                    }`}
                  >
                    <option value="pending">⏳ Pending</option>
                    <option value="confirmed">✓ Confirmed</option>
                    <option value="completed">✓✓ Completed</option>
                    <option value="cancelled">✗ Cancelled</option>
                  </select>
                  <button
                    onClick={() => handleDelete(apt._id)}
                    className="p-2.5 rounded-xl bg-red-50 hover:bg-red-500 text-red-600 hover:text-white transition-all duration-300"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && filteredAppointments.length > 0 && (
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400 font-medium">
              Showing <span className="font-bold text-gray-600">{filteredAppointments.length}</span> of{" "}
              <span className="font-bold text-gray-600">{appointments.length}</span> appointments
            </p>
          </div>
        )}
      </div>
    </main>
  );
}