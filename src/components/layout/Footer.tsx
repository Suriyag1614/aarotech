import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/header-logo-light.png"
                alt="Aarotech"
                width={240}
                height={70}
                className="h-14 md:h-20 w-auto object-contain block dark:hidden"
              />
              <Image
                src="/images/header-logo-dark.png"
                alt="Aarotech"
                width={240}
                height={70}
                className="h-14 md:h-20 w-auto object-contain hidden dark:block"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Helping businesses grow through data-driven digital marketing, SEO, and targeted advertising.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/#services" className="hover:text-primary">Website Development</Link></li>
              <li><Link href="/#services" className="hover:text-primary">SEO</Link></li>
              <li><Link href="/#services" className="hover:text-primary">Google & Meta Ads</Link></li>
              <li><Link href="/#services" className="hover:text-primary">Branding</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/#work" className="hover:text-primary">Case Studies</Link></li>
              <li><Link href="/#about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/#contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {process.env.NEXT_PUBLIC_BUSINESS_EMAIL && (
                <li><a href={`mailto:${process.env.NEXT_PUBLIC_BUSINESS_EMAIL}`} className="hover:text-primary transition-colors">{process.env.NEXT_PUBLIC_BUSINESS_EMAIL}</a></li>
              )}
              {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER && (
                <li><a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp Us</a></li>
              )}
              {process.env.NEXT_PUBLIC_LINKEDIN_URL && (
                <li><a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
              )}
              <li>Tamil Nadu, India</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Aarotech. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
