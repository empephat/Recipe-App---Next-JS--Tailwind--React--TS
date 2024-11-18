import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import SearchBox from "@/components/search";
import NavLink from "@/components/nav-link";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Tasty Bites",
  description: "When cooking is fun and easy",
};

function FooterContent() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#e6ffe6] py-2 shadow-sm">
      <div className="container mx-auto px-4">
        <div>
          <p className="text-center text-emerald-600 text-lg">
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
        <main>{children}</main>
        <footer>
          <FooterContent />
        </footer>
      </body>
    </html>
  );
}
