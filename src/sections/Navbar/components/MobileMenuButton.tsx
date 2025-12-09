import { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { icons } from "@/config/icons";

export const MobileMenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-[oklch(0.902_0.063_306.703)] bg-transparent caret-transparent block min-h-[auto] min-w-[auto] outline-[oklab(0.708_0_0_/_0.5)] text-center p-2 md:hidden md:min-h-0 md:min-w-0"
      >
      <img
          src={icons.menu}
        alt="Icon"
        className="box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
      />
    </button>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
