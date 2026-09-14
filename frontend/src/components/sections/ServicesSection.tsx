import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  return (
    <section className="w-full py-16 px-8 md:px-16 lg:px-24 bg-surfaceWhite text-deepNavy">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <p className="text-sm text-gray-500 mb-2">Healthcare services</p>
          <h2 className="text-3xl md:text-4xl font-bold max-w-md leading-tight">
            Medicine department doctor availability and schedule
          </h2>
        </div>
      </div>

      <Tabs defaultValue="medicine" className="w-full">
        <TabsList className="flex flex-wrap h-auto bg-transparent gap-2 md:gap-6 border-b border-gray-200 pb-2 w-full justify-start rounded-none">
          <TabsTrigger value="medicine" className="data-[state=active]:bg-deepNavy data-[state=active]:text-white rounded-md px-6 py-2">
            Medicine
          </TabsTrigger>
          <TabsTrigger value="imaging" className="text-gray-500 hover:text-deepNavy px-6 py-2">Diagnostic imaging</TabsTrigger>
          <TabsTrigger value="consultation" className="text-gray-500 hover:text-deepNavy px-6 py-2">Specialist consultations</TabsTrigger>
          <TabsTrigger value="wellness" className="text-gray-500 hover:text-deepNavy px-6 py-2">Wellness care</TabsTrigger>
        </TabsList>

        <TabsContent value="medicine" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-sm bg-medicalCyan/20 overflow-hidden rounded-xl">
              <div className="h-64 bg-gray-200 w-full"></div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">Dr. Sarah Connor</h3>
                <p className="text-sm text-gray-600">Senior Neurologist</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm bg-medicalCyan/20 overflow-hidden rounded-xl">
              <div className="h-64 bg-gray-300 w-full"></div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">Dr. James Wilson</h3>
                <p className="text-sm text-gray-600">Head of Surgery</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm bg-medicalCyan/20 overflow-hidden rounded-xl">
              <div className="h-64 bg-gray-200 w-full"></div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">Dr. Emily Chen</h3>
                <p className="text-sm text-gray-600">Pediatric Care</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}