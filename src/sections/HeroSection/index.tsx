import { HeroBackground } from "@/sections/HeroSection/components/HeroBackground";
import { HeroContent } from "@/sections/HeroSection/components/HeroContent";
import { AnimatedRaindrops } from "@/sections/HeroSection/components/AnimatedRaindrops";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative bg-gray-950 box-border caret-transparent min-h-[1000px] outline-[oklab(0.708_0_0_/_0.5)] overflow-hidden">
      <div className="absolute bg-[radial-gradient(circle,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] inset-0"></div>
      <div className="absolute bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=)] box-border caret-transparent opacity-[0.015] outline-[oklab(0.708_0_0_/_0.5)] inset-0"></div>
      <HeroBackground variant="variant1" />
      <AnimatedRaindrops />
      <HeroBackground variant="default" />
      <HeroContent />
    </section>
  );
};
