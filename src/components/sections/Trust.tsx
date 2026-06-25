import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function Trust() {
  const metrics = [
    { value: "100%", label: "Founder-Led Service" },
    { value: "Direct", label: "Communication" },
    { value: "Custom", label: "Personalized Strategy" },
    { value: "Clear", label: "Transparent Reporting" },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {metrics.map((metric, index) => (
            <AnimateOnScroll key={index} delay={`${index * 0.1 + 0.2}s`} className="h-full">
              <Card className="border border-slate-200 shadow-sm bg-white rounded-2xl hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6 md:p-8 text-center h-full flex flex-col justify-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3">{metric.value}</div>
                  <div className="text-sm md:text-base text-slate-500 font-bold tracking-wide uppercase">{metric.label}</div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
