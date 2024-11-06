import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tasty Bites",
  description: "When cooking is fun and easy",
};

function Navbar() {
  return (
    <nav className="bg-green-100 py-2 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors font-logo"
          >
            Tasty Bites
          </Link>
          <div className="flex space-x-4">
            <NavLink href="/" text="" />
            <NavLink href="/recipes" text="Recipes" />
            <NavLink href="/ai" text="AI" />
            <NavLink href="/inspiration" text="Inspiration" />
            <NavLink href="/health" text="Health" />
            <NavLink href="/contact" text="Contact" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="text-green-600 hover:text-green-800 transition-colors font-nav text-sm tracking-wider"
    >
      {text}
    </Link>
  );
}

function FooterContent() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-green-100 py-2 shadow-sm">
      <div className="container mx-auto px-4">
        <div>
          <p className="text-center text-green-600">
            &copy; {currentYear} Tasty Bites. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        {children}
        <footer>
          <FooterContent />
        </footer>
      </body>
    </html>
  );
}
