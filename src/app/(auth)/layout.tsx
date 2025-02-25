"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";

const navLinks = [
  { name: "Signup", href: "/signup" },
  { name: "Login", href: "/login" },
  { name: "Forgot-Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={
              isActive
                ? "font-bold bg-blue-200 mr-4"
                : "bg-black text-white mr-4"
            }
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
