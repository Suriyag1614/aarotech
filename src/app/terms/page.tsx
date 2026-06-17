import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Agreement to Terms</h2>
            <p>By accessing our website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. Services Rendered</h2>
            <p>Aarotech provides digital marketing services including but not limited to website development, search engine optimization (SEO), and paid advertising. The specific deliverables, timelines, and costs will be outlined in a separate Statement of Work (SOW) or proposal provided to the client.</p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. Intellectual Property Rights</h2>
            <p>Other than the content you own, under these Terms, Aarotech and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.</p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Client Responsibilities</h2>
            <p>To ensure the successful delivery of our services, clients are expected to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide timely access to necessary platforms (website CMS, ad accounts, analytics).</li>
              <li>Provide required assets (logos, branding guidelines, initial content) promptly.</li>
              <li>Respond to feedback and approval requests within agreed-upon timeframes.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Limitation of Liability</h2>
            <p>In no event shall Aarotech, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website or our services. Aarotech shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
            <p>We do not guarantee specific business results, sales, or lead volumes, as these depend on market conditions and external factors beyond our control, although we strive to achieve the best possible outcomes based on industry best practices.</p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">6. Governing Law & Jurisdiction</h2>
            <p>These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Tamil Nadu for the resolution of any disputes.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
