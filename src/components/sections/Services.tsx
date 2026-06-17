import { services } from "@/data/content";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">How We Help Businesses Grow</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            No fluff. Just proven strategies designed to drive traffic, capture leads, and directly increase your revenue.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group border-slate-200 transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="p-6 pb-4">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <CardDescription className="text-base text-muted-foreground mb-6">
                  {service.description}
                </CardDescription>
                <Link href="#contact" className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                  Learn more <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
