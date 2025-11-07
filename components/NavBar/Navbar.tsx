"use client";
import Image from "next/image";
import { ModeToggle } from "../ModeToggle";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import { links } from "@/lib/links";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <section>
          {/* โลโก้โหมดสว่าง */}
          <Link href="/">
            <Image
              src="/logoblack-Photoroom.png"
              alt="Logo Light"
              width={70}
              height={70}
              className="block dark:hidden"
            />
          </Link>

          {/* โลโก้โหมดมืด */}
          <Link href="/">
            <Image
              src="/logowhite-Photoroom.png"
              alt="Logo Dark"
              width={70}
              height={70}
              className="hidden dark:block"
            />
          </Link>
        </section>

        {/* Desktop Menu */}
        <div
          className={`md:flex gap-x-10 items-center backdrop-blur-2xl py-5 px-10 rounded-full hidden
    border transition-colors duration-300
    ${
      scrolled ? "border-gray-300 dark:border-gray-600" : "border-transparent"
    }`}
        >
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className="hover:text-red-700 dark:hover:text-red-300"
            >
              {item.label}
            </Link>
          ))}
          <ModeToggle />
        </div>

        {/* Moblie Menu */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          size="icon-lg"
          className="md:hidden flex gap-x-10 items-center backdrop-blur-md border p-5 px-5 rounded-full cursor-pointer"
        >
          <Menu />
        </Button>
        <SideMenu links={links} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
