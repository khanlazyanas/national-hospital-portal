"use client";

import { useState, useEffect } from "react";
import { 
  Lock, User, Phone, Mail, MapPin, Calendar, 
  Stethoscope, RefreshCw, LogOut, CheckCircle2, XCircle 
} from "lucide-react";

interface Appointment {
  _id: string;
  patientName: string;
  phone: string;
  email: string;
  address: string;
  preferredDate: string;
  service: string;
  createdAt: string;
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://national-hospital-portal.onrender.com";
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";

  // Session check (page refresh par login rahe)
  useEffect(() => {
    const saved = sessionStorage.getItem("adminLoggedIn");
    if (saved === "true") setIsLoggedIn(true);
  }, []);

  // Jab login ho jaye, data fetch karo
  useEffect(() => {
    if (isLoggedIn) fetchAppointments();
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      sessionStorage.setItem("adminLoggedIn", "true");
      setError("");
    } else {
      setError("Invalid password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword("");
    sessionStorage.removeItem("adminLoggedIn");
  };

  const fetchAppointments = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/appointments`);
      const data = await response.json();
      if (response.ok) {
        setAppointments(data.data);
      }
    } catch (err) {
      console.error("Error fetching:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // ==================== LOGIN SCREEN ====================
  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-[#020813] flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(37,99,235,0.5)]">
                <Lock className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-black text-white text-center mb-2">Admin Access</h1>
            <p className="text-blue-100/60 text-center text-sm mb-8 font-light">
              National Hospital & Neuro Center
            </p>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-blue-200 uppercase tracking-widest mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter admin password"
                  className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/20 text-white placeholder-gray-500 transition-all text-sm"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-xl text-sm">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white font-bold py-4 rounded-2xl shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Login to Dashboard
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  // ==================== DASHBOARD SCREEN ====================
  return (
    <main className="min-h-screen bg-[#f8fafc] py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-white rounded-3xl p-6 md:p-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border border-gray-100">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-[#0b2447] mb-1">
              Appointment Dashboard
            </h1>
            <p className="text-sm text-gray-500 font-medium">
              Total Bookings: <span className="text-blue-600 font-bold">{appointments.length}</span>
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={fetchAppointments}
              disabled={isLoading}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-xl font-bold text-sm transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-red-300 hover:text-red-500 text-gray-600 px-5 py-3 rounded-xl font-bold text-sm transition-all"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="text-center py-20">
            <RefreshCw className="w-10 h-10 text-blue-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-500 font-medium">Loading appointments...</p>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && appointments.length === 0 && (
          <div className="bg-white rounded-3xl p-16 text-center border border-gray-100">
            <CheckCircle2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">No Appointments Yet</h3>
            <p className="text-gray-500 text-sm">Bookings will appear here once patients submit the form.</p>
          </div>
        )}

        {/* Desktop Table */}
        {!isLoading && appointments.length > 0 && (
          <div className="hidden lg:block bg-white rounded-3xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#0b2447] text-white">
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Patient</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Contact</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Address</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Date</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Service</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {appointments.map((apt) => (
                  <tr key={apt._id} className="hover:bg-blue-50/40 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-bold text-[#0b2447] text-sm">{apt.patientName}</p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {new Date(apt.createdAt).toLocaleDateString()}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-gray-700">{apt.phone}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{apt.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600 max-w-xs truncate">{apt.address}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-bold">
                        <Calendar className="w-3.5 h-3.5" />
                        {apt.preferredDate}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-teal-50 text-teal-700 px-3 py-1.5 rounded-lg text-xs font-bold capitalize">
                        {apt.service.replace("-", " ")}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Mobile Cards */}
        {!isLoading && appointments.length > 0 && (
          <div className="lg:hidden space-y-4">
            {appointments.map((apt) => (
              <div key={apt._id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-black text-[#0b2447] text-lg">{apt.patientName}</p>
                    <p className="text-xs text-gray-400">
                      {new Date(apt.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="bg-teal-50 text-teal-700 px-2.5 py-1 rounded-lg text-[10px] font-bold capitalize">
                    {apt.service.replace("-", " ")}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">{apt.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span className="truncate">{apt.email}</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    <span>{apt.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span className="font-bold text-blue-700">{apt.preferredDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}