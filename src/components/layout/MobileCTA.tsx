import { buttonVariants } from "@/components/ui/button";
import { ContactPopup } from "@/components/shared/ContactPopup";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 w-full p-4 bg-background border-t z-50 sm:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <ContactPopup>
        <button 
          className={buttonVariants({ size: "lg", className: "w-full text-base shadow-lg" })}
        >
          Get My Free Growth Plan
        </button>
      </ContactPopup>
    </div>
  );
}
