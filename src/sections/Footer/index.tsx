import { FooterBackground } from "@/sections/Footer/components/FooterBackground";
import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
  return (
    <footer className="relative bg-zinc-950 box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] border-[oklab(0.714_0.117894_-0.165257_/_0.1)] overflow-hidden px-6 py-12 border-t border-solid md:px-8">
      <div className="absolute bg-[linear-gradient(to_top,oklab(0.381_0.100917_-0.144194_/_0.1)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] inset-0"></div>
      <FooterBackground />
      <FooterContent />
    </footer>
  );
};
