import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FreeAudit } from "@/components/sections/FreeAudit";

// Note: params needs to be handled properly for Next.js 15 App router. 
// It is an asynchronous API in Next.js 15, so we should await it if we use it.
// For this placeholder, we can just display the industry parameter.
export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const resolvedParams = await params;
  const industryName = resolvedParams.industry
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-32 bg-slate-50 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital Marketing for <span className="text-primary">{industryName}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              This is a placeholder page for the {industryName} industry. Dedicated landing pages for specific industries will be implemented here to improve SEO and conversion rates.
            </p>
          </div>
        </section>
        <FreeAudit />
      </main>
      <Footer />
    </>
  );
}
