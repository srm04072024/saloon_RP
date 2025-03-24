"use client"; // If using Next.js App Router
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/services", title: "Services" },
    { href: "/contact", title: "Contact" },
  ];

  return (
    <header className="z-50">
      <nav
        className={`fixed mx-auto w-full top-0 left-0 transition-all duration-300 h-[17vh] z-50
      ${scrolled ? "bg-black shadow-md" : "bg-transparent"}`}
      >
        <div className="container flex justify-between items-center mx-auto h-full">
          <Link href="#" className="text-white font-semibold uppercase text-sm">
            Brand
          </Link>
          <ul className="hidden md:flex space-x-8 p-4">
            {navigation.map((nav) => {
              return (
                <li
                  key={nav.title}
                  className="text-white font-semibold uppercase text-sm"
                >
                  <Link href={nav.href}>{nav.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
