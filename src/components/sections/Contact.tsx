"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MessageCircle, Phone, CheckCircle2 } from "lucide-react";

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
    } catch (error) {
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
              Whether you need a free growth plan, a custom strategy, or just want to bounce some ideas around—let's talk.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-4">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Chat with Founder</h4>
                  <p className="text-muted-foreground text-sm mb-2">Fastest way to reach us</p>
                  <a href="https://wa.me/919385643066" className="text-primary font-medium hover:underline">+91 98765 43210</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email Us</h4>
                  <p className="text-muted-foreground text-sm mb-2">For detailed inquiries</p>
                  <a href="mailto:hello@aarotech.example.com" className="text-primary font-medium hover:underline">hello@aarotech.example.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Call Us</h4>
                  <p className="text-muted-foreground text-sm mb-2">Mon-Fri from 9am to 6pm</p>
                  <a href="tel:+919876543210" className="text-primary font-medium hover:underline">+91 98765 43210</a>
                </div>
              </div>
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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" required className="bg-white" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="challenge">What is your biggest challenge right now?</Label>
                    <Select name="challenge" required>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select your biggest challenge..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="need_leads">We need more qualified leads</SelectItem>
                        <SelectItem value="wasting_ad_spend">We are wasting money on ads</SelectItem>
                        <SelectItem value="outdated_website">Our website is outdated</SelectItem>
                        <SelectItem value="low_traffic">We have low website traffic (SEO)</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
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
