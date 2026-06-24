import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#6891b3] pt-24 pb-16">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center min-h-[70vh]">
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left text-white relative z-10">
            <div className="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-sm text-white/80 mb-8 bg-white/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Accepting new clients
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl mb-6">
              Get More Leads, Customers, and Revenue for Your Business
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-4 leading-relaxed">
              We help businesses generate more leads, improve online visibility, and grow revenue through high-converting websites, SEO, advertising, and social media.
            </p>
            <p className="text-sm font-bold text-white/70 uppercase tracking-wider mb-10">
              Proudly partnering with businesses in Trichy, Chennai, Coimbatore, Madurai, & across TN.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
              <Link href={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Aarotech, I would like a free growth plan for my business.")}` : "/#contact"} className={`${buttonVariants({ size: "lg", className: "h-14 px-8 text-base shadow-xl hover:shadow-primary/25 hover:-translate-y-1 transition-all" })} bg-primary text-white hover:bg-primary/90`}>
                Chat With a Founder
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/90 font-medium">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(255,0,0,0.8)]" />
                Founder-Led Agency
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(255,0,0,0.8)]" />
                Results Driven
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(255,0,0,0.8)]" />
                Direct Communication
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(255,0,0,0.8)]" />
                Custom Growth Strategies
              </div>
            </div>
          </div>

          <div className="absolute inset-0 lg:static lg:w-1/2 flex justify-center items-center z-0 opacity-40 lg:opacity-100 pointer-events-none overflow-hidden lg:overflow-visible">
            <video
              src="/animations/Red%20Floating%20Cube.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full lg:h-[550px] object-cover pointer-events-none lg:scale-[1.35] mix-blend-screen lg:mix-blend-normal lg:[mask-image:radial-gradient(circle_at_center,black_50%,transparent_80%)] lg:[-webkit-mask-image:radial-gradient(circle_at_center,black_50%,transparent_80%)] will-change-transform"
            />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 w-full flex flex-col items-center relative z-10 pb-8 lg:pb-0">
          <p className="text-sm text-white/70 font-bold mb-6 uppercase tracking-wider text-center">Specialized digital strategies for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Healthcare", "Education", "Local Businesses"].map((industry) => (
              <span key={industry} className="px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm font-semibold text-white shadow-sm">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
