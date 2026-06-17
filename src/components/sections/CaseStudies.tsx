import { caseStudies } from "@/data/content";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CaseStudies() {
  return (
    <section id="work" className="py-24 bg-slate-900 text-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Results We've Helped Create</h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              We do not just talk about growth; we deliver it. Here is how we have helped businesses across Tamil Nadu achieve their goals.
            </p>
          </div>
          <Link href="#contact" className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors">
            Start Your Success Story <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.id} className="bg-slate-800 border-slate-700 text-slate-50 flex flex-col overflow-hidden hover:border-slate-500 transition-colors duration-300">
              <div className="w-full h-48 bg-slate-700 relative flex items-center justify-center">
                <span className="text-slate-500 text-sm font-medium uppercase tracking-widest">[Project Screenshot]</span>
              </div>
              <CardContent className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="inline-flex items-center rounded-full bg-slate-900/50 border border-slate-700 px-3 py-1 text-xs font-bold text-slate-300 mb-6 w-fit">
                  {study.clientIndustry}
                </div>
                <div className="space-y-6 flex-1">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">The Challenge</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Our Solution</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">The Outcome</h4>
                  <p className="text-lg font-bold leading-snug">{study.outcome}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
