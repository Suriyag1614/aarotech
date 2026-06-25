"use client";

import { useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ContactForm } from "@/components/shared/ContactForm";

export function ContactPopup({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span onClick={() => setOpen(true)} style={{ display: "contents" }}>
        {children}
      </span>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent showCloseButton={false} className="sm:max-w-[600px] bg-slate-900 border-slate-800 p-0 overflow-hidden shadow-2xl">
          <DialogTitle className="sr-only">Request Your Free Growth Plan</DialogTitle>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="p-8 max-h-[85vh] overflow-y-auto">
            <ContactForm onSuccess={() => setTimeout(() => setOpen(false), 3000)} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
