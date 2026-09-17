import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Activity, CalendarCheck } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-16 lg:px-24 bg-white overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-teal-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-600 mb-6 shadow-sm">
            <Activity className="w-4 h-4" />
            Healthcare Services
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b2447] leading-tight tracking-tight">
            Specialized Care & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Doctor Availability</span>
          </h2>
        </div>
        
        <button className="hidden lg:flex items-center gap-2 bg-white border border-gray-200 text-[#0b2447] px-6 py-3 text-sm font-bold rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md group">
          View Full Schedule
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <Tabs defaultValue="medicine" className="w-full relative z-10">
        
        {/* Premium Scrollable Tabs List */}
        <div className="w-full overflow-x-auto no-scrollbar pb-4 mb-4">
          <TabsList className="inline-flex h-auto bg-gray-50/80 backdrop-blur-md p-1.5 rounded-2xl border border-gray-100 shadow-inner">
            <TabsTrigger 
              value="medicine" 
              className="rounded-xl px-6 py-3 text-sm font-bold text-gray-500 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-300"
            >
              Medicine
            </TabsTrigger>
            <TabsTrigger 
              value="imaging" 
              className="rounded-xl px-6 py-3 text-sm font-bold text-gray-500 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-300"
            >
              Diagnostic Imaging
            </TabsTrigger>
            <TabsTrigger 
              value="consultation" 
              className="rounded-xl px-6 py-3 text-sm font-bold text-gray-500 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-300"
            >
              Consultations
            </TabsTrigger>
            <TabsTrigger 
              value="wellness" 
              className="rounded-xl px-6 py-3 text-sm font-bold text-gray-500 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-300"
            >
              Wellness Care
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="medicine" className="mt-4 focus-visible:outline-none focus-visible:ring-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Doctor Card 1 */}
            <Card className="group relative border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(37,99,235,0.1)] transition-all duration-500 rounded-3xl overflow-hidden bg-white cursor-pointer">
              <div className="relative h-80 w-full overflow-hidden bg-gray-100">
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold text-green-600 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Available Today
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                  alt="Dr. Sarah Connor" 
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2447]/90 via-[#0b2447]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>
              <CardContent className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-teal-300 text-xs font-bold uppercase tracking-wider mb-1">Senior Neurologist</p>
                <h3 className="font-extrabold text-2xl mb-3">Dr. Sarah Connor</h3>
                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-lg">
                    <CalendarCheck className="w-4 h-4" /> Book Slot
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Doctor Card 2 */}
            <Card className="group relative border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(37,99,235,0.1)] transition-all duration-500 rounded-3xl overflow-hidden bg-white cursor-pointer">
              <div className="relative h-80 w-full overflow-hidden bg-gray-100">
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold text-orange-600 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Next Avail: Tomorrow
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" 
                  alt="Dr. James Wilson" 
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2447]/90 via-[#0b2447]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>
              <CardContent className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-teal-300 text-xs font-bold uppercase tracking-wider mb-1">Head of Surgery</p>
                <h3 className="font-extrabold text-2xl mb-3">Dr. James Wilson</h3>
                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-lg">
                    <CalendarCheck className="w-4 h-4" /> Book Slot
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Doctor Card 3 */}
            <Card className="group relative border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(37,99,235,0.1)] transition-all duration-500 rounded-3xl overflow-hidden bg-white cursor-pointer">
              <div className="relative h-80 w-full overflow-hidden bg-gray-100">
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold text-green-600 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Available Today
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1594824436998-d822cd013a5a?auto=format&fit=crop&q=80&w=800" 
                  alt="Dr. Emily Chen" 
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2447]/90 via-[#0b2447]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>
              <CardContent className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-teal-300 text-xs font-bold uppercase tracking-wider mb-1">Pediatric Care</p>
                <h3 className="font-extrabold text-2xl mb-3">Dr. Emily Chen</h3>
                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-lg">
                    <CalendarCheck className="w-4 h-4" /> Book Slot
                  </button>
                </div>
              </CardContent>
            </Card>

          </div>
          
          {/* Mobile Only Action Button */}
          <button className="mt-8 lg:hidden w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-[#0b2447] px-6 py-3.5 text-sm font-bold rounded-xl active:bg-gray-50 shadow-sm">
            View Full Schedule <ArrowRight className="w-4 h-4" />
          </button>
        </TabsContent>
        
        {/* Placeholder for other tabs if needed */}
        <TabsContent value="imaging" className="mt-8 text-center py-12 text-gray-500 font-medium">Diagnostic Imaging content goes here...</TabsContent>
        <TabsContent value="consultation" className="mt-8 text-center py-12 text-gray-500 font-medium">Specialist consultations content goes here...</TabsContent>
        <TabsContent value="wellness" className="mt-8 text-center py-12 text-gray-500 font-medium">Wellness care content goes here...</TabsContent>
      </Tabs>
    </section>
  );
}