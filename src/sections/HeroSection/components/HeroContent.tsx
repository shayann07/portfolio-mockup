import { HeroText } from "@/sections/HeroSection/components/HeroText";
import { ProjectCards } from "@/sections/HeroSection/components/ProjectCards";

export const HeroContent = () => {
  return (
    <div className="relative box-border caret-transparent max-w-screen-xl outline-[oklab(0.708_0_0_/_0.5)] w-full z-10 mx-auto px-6 pt-20 pb-20 md:px-8">
      <div className="items-center box-border caret-transparent gap-x-12 grid grid-cols-1 outline-[oklab(0.708_0_0_/_0.5)] gap-y-12 md:gap-x-16 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-16">
        <HeroText />
        <ProjectCards />
      </div>
    </div>
  );
};
