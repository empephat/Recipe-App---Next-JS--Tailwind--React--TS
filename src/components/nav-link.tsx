"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function NavLink({ href, text }: { href: string; text: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        text-lg font-medium text-emerald-700 hover:text-emerald-800
        transition-colors duration-200 ease-in-out
        ${
          isActive
            ? "bg-emerald-200 text-emerald-800 font-semibold"
            : "hover:bg-emerald-100"
        }
        px-3 py-2 rounded-md
      `}
    >
      {text}
    </Link>
  );
}

export default NavLink;
