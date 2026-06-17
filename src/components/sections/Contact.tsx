"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mzdqqdao", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch {
      alert("Oops! There was a problem submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Grow?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Whether you need a free growth plan, a custom strategy, or just want to bounce some ideas around&mdash;let&apos;s talk.
            </p>

            <div className="space-y-8 mb-12">
              {/* Contact information hidden until real details are provided */}
              {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER && (
                <div className="bg-[#25D366]/10 p-6 rounded-xl border border-[#25D366]/20">
                  <h3 className="font-semibold text-slate-900 mb-2">Prefer WhatsApp?</h3>
                  <p className="text-sm text-slate-600 mb-4">Chat directly with a founder and get answers instantly.</p>
                  <a 
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Aarotech, I would like a free growth plan for my business.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#25D366] text-white hover:bg-[#20bd5a]"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-muted-foreground mb-8">
                  Thank you for reaching out. We will get back to you with your free growth plan shortly.
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6">Request Your Free Growth Plan</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required className="bg-white" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input id="businessName" name="businessName" placeholder="Acme Corp" required className="bg-white" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="you@company.com" required className="bg-white" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" className="bg-white" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="challenge">What is your biggest challenge right now?</Label>
                    <Select name="challenge" required>
                      <SelectTrigger className="w-full bg-white">
                        <SelectValue placeholder="Select your biggest challenge..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="We need more qualified leads">We need more qualified leads</SelectItem>
                        <SelectItem value="We are wasting money on ads">We are wasting money on ads</SelectItem>
                        <SelectItem value="Our website is outdated">Our website is outdated</SelectItem>
                        <SelectItem value="We have low website traffic (SEO)">We have low website traffic (SEO)</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" size="lg" className="w-full text-base" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Get My Free Growth Plan"}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
