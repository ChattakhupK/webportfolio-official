import { X } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { ModeToggle } from "../ModeToggle";

type links = {
  label: string;
  path: string;
};

interface SideMenuProps {
  links: links[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const SideMenu = ({ links, isOpen, setIsOpen }: SideMenuProps) => {
  return (
    <div
      className={`md:hidden fixed top-0 right-0 h-full w-2/3 backdrop-blur-lg p-6 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex justify-between">
        <ModeToggle />
        <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>
      </div>
      <div className="mt-10 flex flex-col gap-6 text-lg">
        {links.map((item) => (
          <a key={item.label} href={item.path}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
