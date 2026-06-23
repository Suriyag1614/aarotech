"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href?.startsWith("/#")) return;
    
    const targetId = href.replace("/#", "");
    
    if (pathname === "/") {
      e.preventDefault();
      const elem = document.getElementById(targetId);
      if (elem) {
        const targetPosition = elem.getBoundingClientRect().top + window.scrollY - 80; // Offset for sticky header
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1500; // 1.5 seconds for a slow, luxurious glide
        let start: number | null = null;

        // Easing function: easeOutCubic (smooth, prevents the sub-pixel shaking at the end)
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

        const animation = (currentTime: number) => {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const progress = Math.min(timeElapsed / duration, 1);
          
          if (progress < 1) {
            // Use Math.round to prevent sub-pixel rendering jitter
            window.scrollTo(0, Math.round(startPosition + distance * easeOutCubic(progress)));
            requestAnimationFrame(animation);
          } else {
            // Force exact final position to completely stop any shaking
            window.scrollTo(0, Math.round(startPosition + distance));
          }
        };
        requestAnimationFrame(animation);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
        <div className="flex gap-2 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/header-logo-light.png" 
              alt="Aarotech" 
              width={200} 
              height={60} 
              className="h-12 md:h-16 w-auto object-contain block dark:hidden"
              priority
            />
            <Image 
              src="/images/header-logo-dark.png" 
              alt="Aarotech" 
              width={200} 
              height={60} 
              className="h-12 md:h-16 w-auto object-contain hidden dark:block"
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
          <Link href="/#services" onClick={handleScroll} className="transition-colors hover:text-primary text-muted-foreground">Services</Link>
          <Link href="/#work" onClick={handleScroll} className="transition-colors hover:text-primary text-muted-foreground">Case Studies</Link>
          <Link href="/#about" onClick={handleScroll} className="transition-colors hover:text-primary text-muted-foreground">About</Link>
          <Link href="/#faq" onClick={handleScroll} className="transition-colors hover:text-primary text-muted-foreground">FAQ</Link>
        </nav>
        <div className="hidden sm:flex items-center gap-4">
          <Link href="/#contact" onClick={handleScroll} className={buttonVariants({ size: "lg", className: "text-base font-semibold px-8" })}>Get My Free Growth Plan</Link>
        </div>
      </div>
    </header>
  );
}
