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
  onOpenChange,
}: {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
}) {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (val: boolean) => {
    setOpen(val);
    onOpenChange?.(val);
  };

  return (
    <>
      <span onClick={() => handleOpenChange(true)} style={{ display: "contents" }}>
        {children}
      </span>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          showCloseButton={false}
          className="
            sm:max-w-[600px] bg-slate-900 border-slate-800 p-0 overflow-hidden shadow-2xl
            max-h-[90dvh] flex flex-col
            max-sm:top-auto max-sm:bottom-0 max-sm:left-0 max-sm:right-0 max-sm:translate-x-0 max-sm:translate-y-0
            max-sm:w-full max-sm:max-w-full max-sm:rounded-b-none max-sm:rounded-t-2xl
          "
        >
          <DialogTitle className="sr-only">Request Your Free Growth Plan</DialogTitle>
          {/* Sticky header with title + close button */}
          <div className="flex items-center justify-between px-5 sm:px-8 pt-6 pb-4 border-b border-slate-800 shrink-0">
            <h2 className="text-lg font-bold text-white">Request Your Free Growth Plan</h2>
            <button
              onClick={() => handleOpenChange(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 ml-4"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-5 sm:p-8 overflow-y-auto flex-1">
            <ContactForm onSuccess={() => setTimeout(() => handleOpenChange(false), 3000)} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
