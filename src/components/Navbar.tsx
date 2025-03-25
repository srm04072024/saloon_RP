"use client"; // If using Next.js App Router
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    console.log(pathname);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const navigations = [
    { href: "/", title: "Home" },
    { href: "/#about", title: "About" },
    { href: "/#services", title: "Services" },
    { href: "/#footer", title: "Contact" },
  ];

  return (
    <header className="w-screen">
      <nav
        className={`w-full h-[17vh] max-sm:bg-customblack fixed top-0 left-0 transition-all duration-300 z-50 
      ${scrolled ? "bg-customblack shadow-md" : "bg-transparent"}`}
      >
        <div className=" flex justify-between items-center mx-auto sm:px-10 px-5">
          <Link href="/" className="text-white font-semibold uppercase text-sm">
            <div className="h-[17vh] w-[30vw] relative">
              <Image
                src="/logo.png"
                alt="logoimg"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <div>
            <button
              onClick={() => setIsMobile((prev) => !prev)}
              className={`text-brandcolor px-6 py-1 border-1 rounded-xs border-brandcolor sm:hidden `}
            >
              {isMobile ? "X" : <kbd>&#9776;</kbd>}
            </button>
            <ul className="hidden sm:flex space-x-8 p-4">
              {navigations.map((nav) => {
                return (
                  <li
                    key={nav.title}
                    className={` font-semibold uppercase text-sm ${
                      pathname === nav.href ? "text-brandcolor" : "text-white"
                    }`}
                  >
                    <Link href={nav.href} target="_self">
                      {nav.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {isMobile ? (
          <div className="bg-customblack">
            <ul className="flex flex-col sm:hidden p-4 ml-6">
              {navigations.map((nav) => {
                return (
                  <li
                    className={` text-sm font-bold my-4 ${
                      pathname == nav.href ? "text-brandcolor" : "text-white"
                    }`}
                    key={nav.title}
                  >
                    <Link href={nav.href} target="_self">
                      {nav.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
