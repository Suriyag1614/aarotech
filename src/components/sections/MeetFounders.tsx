import { founders } from "@/data/content";
import { Link as LinkIcon } from "lucide-react";

export function MeetFounders() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">The People Behind the Campaigns</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            We started Aarotech after watching local businesses waste lakhs on vanity metrics with traditional agencies. We wanted to build an agency that actually cares about your pipeline and revenue.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            No juniors. No fluff. Just experts dedicated to helping Tamil Nadu businesses thrive online.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-slate-200 mb-8 overflow-hidden relative flex items-center justify-center text-slate-500 border-4 border-white shadow-lg group-hover:border-primary/20 transition-all duration-300">
                <div className="text-4xl font-extrabold text-slate-300">
                  {founder.name.charAt(0)}
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl md:text-3xl font-bold">{founder.name}</h3>
                {founder.linkedin && (
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0A66C2] transition-colors">
                    <LinkIcon className="w-5 h-5" />
                    <span className="sr-only">LinkedIn Profile</span>
                  </a>
                )}
              </div>
              <p className="text-primary font-medium mb-4">{founder.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                {founder.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
