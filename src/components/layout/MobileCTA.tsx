"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { ContactPopup } from "@/components/shared/ContactPopup";

export function MobileCTA() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div
      className={`fixed bottom-0 w-full p-4 bg-background border-t z-40 sm:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] transition-transform duration-300 ${
        popupOpen ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <ContactPopup onOpenChange={setPopupOpen}>
        <button className={buttonVariants({ size: "lg", className: "w-full text-base shadow-lg" })}>
          Get My Free Growth Plan
        </button>
      </ContactPopup>
    </div>
  );
}
