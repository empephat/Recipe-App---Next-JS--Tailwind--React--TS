"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Recipes", href: "/recipes" },
  { name: "AI", href: "/ai" },
  { name: "Inspiration", href: "/inspiration" },
  { name: "Health", href: "/health" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-[#e6ffe6] py-2 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors font-logo"
          >
            <span className="hidden sm:inline">Tasty Bites</span>
            <span className="sm:hidden">TB</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center md:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-md px-3 py-2 text-lg font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-emerald-200 text-emerald-800"
                    : "text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block w-full max-w-xs lg:max-w-md">
              <Input
                type="search"
                placeholder="Search recipes..."
                className="w-full py-2 px-4 pr-10 text-emerald-900 bg-white 
                   border-emerald-300 hover:border-emerald-400
                   focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50
                   rounded-full transition-all duration-200 ease-in-out
                   placeholder-emerald-400 hover:placeholder-emerald-500"
                aria-label="Search"
              />
              <Search
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-700
                   transition-colors duration-200 ease-in-out
                   group-hover:text-emerald-800"
                size={20}
                aria-hidden="true"
              />
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="md:hidden"
                  size="icon"
                  aria-label="Menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-emerald-700">Menu</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? "bg-emerald-200 text-emerald-800"
                          : "text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
