"use client";
import Image from "next/image";
import { ModeToggle } from "../ModeToggle";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import SideMenu from "./SideMenu";
import { links } from "@/lib/links";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* โลโก้โหมดสว่าง */}
        <Image
          src="/logoblack-Photoroom.png"
          alt="Logo Light"
          width={80}
          height={80}
          className="block dark:hidden"
        />

        {/* โลโก้โหมดมืด */}
        <Image
          src="/logowhite-Photoroom.png"
          alt="Logo Dark"
          width={80}
          height={80}
          className="hidden dark:block"
        />
        {/* Desktop Menu */}
        <div className="md:flex gap-x-10 items-center backdrop-blur-2xl py-5 px-10 border rounded-full hidden">
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
