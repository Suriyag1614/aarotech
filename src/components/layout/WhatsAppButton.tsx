import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const message = "Hi Aarotech, I would like a free growth plan for my business.";
  // We use a placeholder number here, as instructed, to hide real details if unavailable,
  // but wait, user said "Add WhatsApp as a primary conversion channel... Ensure mobile and desktop experiences are optimized."
  // And earlier they said "Use only verified business contact information. Never display placeholder phone numbers or addresses in production."
  // Wait, so what phone number should I use?
  // Let's use `process.env.NEXT_PUBLIC_WHATSAPP_NUMBER` or just a generic link that the user can configure.
  // Actually, I can use `https://wa.me/910000000000` but they said "Never display placeholder phone numbers".
  // So I'll use a `NEXT_PUBLIC_WHATSAPP_NUMBER` environment variable or leave it empty so it goes to contact if empty.
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  
  if (!whatsappNumber) return null; // Hide if unavailable

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[104px] sm:bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </span>
    </Link>
  );
}
