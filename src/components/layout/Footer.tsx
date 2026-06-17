import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-primary tracking-tight">Aarotech.</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Helping Tamil Nadu businesses grow through data-driven digital marketing, SEO, and targeted advertising.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#services" className="hover:text-primary">Website Development</Link></li>
              <li><Link href="#services" className="hover:text-primary">SEO</Link></li>
              <li><Link href="#services" className="hover:text-primary">Google & Meta Ads</Link></li>
              <li><Link href="#services" className="hover:text-primary">Branding</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#work" className="hover:text-primary">Case Studies</Link></li>
              <li><Link href="#about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@aarotech.example.com</li>
              <li>+91 98765 43210</li>
              <li>Tamil Nadu, India</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Aarotech Digital Marketing. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
