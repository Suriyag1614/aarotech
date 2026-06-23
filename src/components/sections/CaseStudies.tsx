import { caseStudies } from "@/data/content";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function CaseStudies() {
  return (
    <section id="work" className="py-24 bg-slate-900 text-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Results We&apos;ve Helped Create</h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              We do not just talk about growth; we deliver it. Here is how we have helped businesses achieve their goals.
            </p>
          </div>
          <Link href="#contact" className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors">
            Start Your Success Story <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.id} className="bg-slate-800 border-slate-700 text-slate-50 flex flex-col overflow-hidden hover:border-slate-500 transition-colors duration-300">
              <div className="w-full h-56 md:h-64 bg-slate-800 border-b border-slate-700 relative overflow-hidden group">
                {study.image ? (
                  <Image 
                    src={study.image} 
                    alt={`${study.clientIndustry} case study`} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]"></div>
                    <div className="flex items-center justify-center h-full">
                      <LayoutTemplate className="w-16 h-16 text-slate-600/50" strokeWidth={1} />
                    </div>
                  </>
                )}
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
        <div className="mt-16 text-center max-w-2xl mx-auto border-t border-slate-800 pt-8">
          <p className="text-sm text-slate-400 mb-6 italic">
            Detailed case studies and campaign data available during consultation.
          </p>
          <Link href="/#contact" className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-primary transition-colors border border-slate-700 hover:border-primary rounded-full px-6 py-2.5 bg-slate-800/50">
            Request Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
