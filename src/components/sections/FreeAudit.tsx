import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export function FreeAudit() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Stop Guessing. Start Growing.</h2>
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
            Get a comprehensive review of your current digital presence. We will analyze your website, SEO, and social media to find hidden opportunities for growth.
          </p>
          <div className="bg-slate-800 rounded-xl p-6 md:p-8 text-left border border-slate-700 shadow-xl mb-10">
            <h3 className="text-xl font-bold text-white mb-4">What You Get in Your Free Plan:</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center shrink-0 mr-3 mt-0.5">✓</span>
                <span className="text-slate-300">Deep-dive technical audit of your website's performance and conversion rate.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center shrink-0 mr-3 mt-0.5">✓</span>
                <span className="text-slate-300">Competitor analysis to see exactly what others in your local market are doing.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center shrink-0 mr-3 mt-0.5">✓</span>
                <span className="text-slate-300">A step-by-step, actionable 90-day roadmap to increase leads and revenue.</span>
              </li>
            </ul>
          </div>
        </div>
        <Link href="#contact" className={buttonVariants({ variant: "secondary", size: "lg", className: "h-14 px-8 text-lg font-medium text-primary" })}>
          Get My Free Growth Plan
        </Link>
      </div>
    </section>
  );
}
