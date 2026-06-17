import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { industries } from "@/data/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Lightbulb } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const industry = industries.find(i => i.id === resolvedParams.slug);

  if (!industry) return {};

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aarotech.in";
  const title = industry.h1 ? industry.h1.replace("[Draft] ", "") + " | Aarotech" : `Digital Marketing for ${industry.title} | Aarotech`;
  const description = industry.intro ? industry.intro.replace("[Draft] ", "") : `Custom digital marketing growth plans for ${industry.title} businesses.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/industries/${industry.id}`,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/industries/${industry.id}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const industry = industries.find(i => i.id === resolvedParams.slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600 mb-6 uppercase tracking-wider">
              Industry Expertise
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {industry.h1 || `Digital Marketing for ${industry.title}`}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {industry.intro || `We understand the unique challenges of the ${industry.title.toLowerCase()} sector in Tamil Nadu and build tailored strategies to drive qualified leads and actual revenue.`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <div className="flex items-center mb-4 text-red-600">
                <AlertTriangle className="w-6 h-6 mr-2" />
                <h3 className="text-xl font-bold">The Problem</h3>
              </div>
              <p className="text-red-900/80 text-lg leading-relaxed">{industry.problem}</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-center mb-4 text-green-600">
                <Lightbulb className="w-6 h-6 mr-2" />
                <h3 className="text-xl font-bold">Our Solution</h3>
              </div>
              <p className="text-green-900/80 text-lg leading-relaxed">{industry.solution}</p>
            </div>
          </div>

          {industry.benefits && industry.benefits.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-10">Why We Are Different</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {industry.benefits.map((benefit, i) => (
                  <div key={i} className="bg-white border rounded-2xl p-6 shadow-sm text-center">
                    <p className="text-lg font-semibold text-slate-800">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {industry.faqs && industry.faqs.length > 0 && (
            <div className="mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Common Questions</h2>
              <div className="space-y-6">
                {industry.faqs.map((faq, i) => (
                  <div key={i} className="bg-white border rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to scale?</h2>
            <p className="text-slate-400 mb-8 text-lg max-w-2xl mx-auto">
              Stop wasting money on generic campaigns that don&apos;t convert. Get a custom growth plan designed specifically for your industry.
            </p>
            <Link href="/#contact" className={buttonVariants({ size: "lg", className: "h-12 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 border-none" })}>
              {industry.cta || "Get My Free Growth Plan"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
