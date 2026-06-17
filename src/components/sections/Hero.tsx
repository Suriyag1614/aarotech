import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-muted-foreground mb-8 bg-background/50 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
          Accepting new clients in Tamil Nadu
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl mb-6">
          Get More Leads, Customers, and Revenue for Your Tamil Nadu Business
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed mx-auto">
          We help businesses generate more leads, improve online visibility, and grow revenue through high-converting websites, SEO, advertising, and social media.
        </p>
        <p className="text-sm font-semibold text-primary/80 uppercase tracking-wider mb-10">
          Proudly partnering with businesses in Chennai, Coimbatore, Madurai, Trichy, & across TN.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="#contact" className={buttonVariants({ size: "lg", className: "h-12 px-8 text-base" })}>
            Get My Free Growth Plan
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "lg", className: "h-12 px-8 text-base" })}>
            <MessageCircle className="mr-2 h-4 w-4" />
            Chat with Founder
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t w-full max-w-4xl flex flex-col items-center">
          <p className="text-sm text-muted-foreground font-medium mb-6 uppercase tracking-wider">Specialized digital strategies for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Healthcare", "Education", "Real Estate", "Manufacturing", "Local Businesses"].map((industry) => (
              <span key={industry} className="px-4 py-2 rounded-full border bg-white text-sm font-medium text-slate-700 shadow-sm">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
