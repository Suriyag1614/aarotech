import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-t z-50 sm:hidden">
      <Link 
        href="/#contact" 
        className={buttonVariants({ size: "lg", className: "w-full text-base shadow-lg" })}
      >
        Get My Free Growth Plan
      </Link>
    </div>
  );
}
