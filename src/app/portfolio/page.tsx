import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { caseStudies } from "@/data/content";
import { Card, CardContent } from "@/components/ui/card";
import { LayoutTemplate } from "lucide-react";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Our Work</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We focus on building digital experiences that drive actual revenue. Here is a look at some of the systems we have built for our partners.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <Card key={study.id} className="bg-white border-slate-200 flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-full h-64 bg-slate-100 border-b border-slate-200 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,transparent_100%)]"></div>
                  <LayoutTemplate className="w-20 h-20 text-slate-300" strokeWidth={1} />
                </div>
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="inline-flex items-center rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-bold text-slate-600 mb-6 w-fit">
                    {study.clientIndustry}
                  </div>
                  <div className="space-y-6 flex-1">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">The Challenge</h4>
                      <p className="text-slate-700 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Our Solution</h4>
                      <p className="text-slate-700 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">The Outcome</h4>
                    <p className="text-lg font-bold text-slate-900 leading-snug">{study.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
