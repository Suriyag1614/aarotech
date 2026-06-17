import { Card, CardContent } from "@/components/ui/card";

export function Trust() {
  const metrics = [
    { value: "100%", label: "Founder-Led Service" },
    { value: "Direct", label: "Communication" },
    { value: "Custom", label: "Personalized Strategy" },
    { value: "Clear", label: "Transparent Reporting" },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="border-none shadow-sm bg-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
