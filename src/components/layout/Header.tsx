import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex gap-2 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary tracking-tight">Aarotech.</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/#services" className="transition-colors hover:text-primary text-muted-foreground">Services</Link>
          <Link href="/#work" className="transition-colors hover:text-primary text-muted-foreground">Case Studies</Link>
          <Link href="/#about" className="transition-colors hover:text-primary text-muted-foreground">About</Link>
          <Link href="/#faq" className="transition-colors hover:text-primary text-muted-foreground">FAQ</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/#contact" className={buttonVariants({ className: "hidden sm:inline-flex" })}>Get My Free Growth Plan</Link>
        </div>
      </div>
    </header>
  );
}
