import { founders } from "@/data/content";
import { Link as LinkIcon } from "lucide-react";
import Image from "next/image";

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
            No juniors. No fluff. Just experts dedicated to helping businesses thrive online.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {founders.map((founder, index) => {
            const isFounder = index === 1;
            return (
              <div key={index} className={`flex flex-col items-center text-center group ${isFounder ? 'order-first md:order-none md:-mt-8' : 'scale-90 opacity-90 hover:opacity-100 hover:scale-95 transition-all duration-300'}`}>
                <div className={`${isFounder ? 'w-48 h-48 md:w-56 md:h-56' : 'w-32 h-32 md:w-40 md:h-40'} rounded-full bg-slate-200 mb-6 overflow-hidden relative flex items-center justify-center text-slate-500 border-4 border-white shadow-lg group-hover:border-primary/20 transition-all duration-300`}>
                  {founder.photo ? (
                    <Image src={founder.photo} alt={founder.name} fill sizes="(max-width: 768px) 160px, 224px" className="object-cover" />
                  ) : (
                    <div className="text-3xl font-extrabold text-slate-300">
                      {founder.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className={`${isFounder ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-bold`}>{founder.fullName || founder.name}</h3>
                  {founder.linkedin && (
                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0A66C2] transition-colors">
                      <LinkIcon className="w-5 h-5" />
                      <span className="sr-only">LinkedIn Profile</span>
                    </a>
                  )}
                </div>
                <p className={`text-primary font-medium ${isFounder ? 'mb-3 text-lg' : 'mb-2 text-base'}`}>{founder.role}</p>
                {isFounder && (
                  <p className="text-sm font-semibold text-slate-600 mb-4 px-4 italic">
                    &quot;Helping businesses generate measurable growth through digital marketing.&quot;
                  </p>
                )}
                <p className={`text-muted-foreground leading-relaxed max-w-sm ${isFounder ? 'text-base' : 'text-sm'}`}>
                  {founder.bio}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
