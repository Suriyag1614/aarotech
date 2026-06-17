import { processSteps } from "@/data/content";

export function HowWeWork() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">The Roadmap to Predictable Growth</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A simple, transparent process to take your business from where it is to where it needs to be.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-slate-100 -z-10"></div>
            
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white mx-auto md:mx-0 w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-slate-50 flex items-center justify-center shadow-sm mb-6 relative group-hover:border-primary/20 transition-colors duration-300">
                  <span className="text-xl md:text-2xl font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center md:text-left">{step.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground text-center md:text-left leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
