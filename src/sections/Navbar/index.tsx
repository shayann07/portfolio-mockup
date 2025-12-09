import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { MobileMenuButton } from "@/sections/Navbar/components/MobileMenuButton";

export const Navbar = () => {
  return (
    <nav className="fixed bg-[oklab(0.144404_0.00926093_-0.0243296_/_0.6)] box-border caret-transparent opacity-70 outline-[oklab(0.708_0_0_/_0.5)] z-50 border-[oklab(0.714_0.117894_-0.165257_/_0.05)] border-b border-solid top-0 inset-x-0">
      <div className="box-border caret-transparent max-w-screen-xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-6 md:px-8">
        <div className="items-center box-border caret-transparent flex h-16 justify-end outline-[oklab(0.708_0_0_/_0.5)]">
          <DesktopMenu />
          <MobileMenuButton />
        </div>
      </div>
      <div className="absolute bg-[linear-gradient(90deg,rgba(0,0,0,0),rgba(139,92,246,0.3),rgba(0,0,0,0))] shadow-[rgba(139,92,246,0.3)_0px_0px_20px_0px] box-border caret-transparent h-px opacity-[0.319584] outline-[oklab(0.708_0_0_/_0.5)] bottom-0 inset-x-0 md:opacity-[0.496524]"></div>
    </nav>
  );
};
