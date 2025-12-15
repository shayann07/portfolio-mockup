import { CursorGlow } from "@/components/CursorGlow";
import { useMobile } from "@/hooks";
import { HeroSection } from "@/sections/HeroSection";
import { Navbar } from "@/sections/Navbar";
import Lenis from "lenis";
import { Suspense, lazy, useEffect, useRef } from "react";

// Lazy load below-the-fold sections
const CommandCenterSection = lazy(() => import("@/sections/CommandCenterSection").then(module => ({ default: module.CommandCenterSection })));
const ContactSection = lazy(() => import("@/sections/ContactSection").then(module => ({ default: module.ContactSection })));
const Footer = lazy(() => import("@/sections/Footer").then(module => ({ default: module.Footer })));
const LabSection = lazy(() => import("@/sections/LabSection").then(module => ({ default: module.LabSection })));
const ProjectsSection = lazy(() => import("@/sections/ProjectsSection").then(module => ({ default: module.ProjectsSection })));
const SkillsSection = lazy(() => import("@/sections/SkillsSection").then(module => ({ default: module.SkillsSection })));
const StorySection = lazy(() => import("@/sections/StorySection").then(module => ({ default: module.StorySection })));

const ScrollbarRevealer = () => {
  useEffect(() => {
    document.body.classList.remove('loading');
  }, []);
  return null;
};

export const App = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();

  // Scroll to top on page load/reload
  useEffect(() => {
    window.scrollTo(0, 0);

    const safetyTimeout = setTimeout(() => {
      document.body.classList.remove('loading');
    }, 4000);

    return () => clearTimeout(safetyTimeout);
  }, []);

  useEffect(() => {
    if (!scrollContainerRef.current || isMobile) return;

    const lenis = new Lenis({
      wrapper: scrollContainerRef.current,
      content: contentRef.current as HTMLElement,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="text-[oklch(0.145_0_0)] text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc outline-[oklab(0.708_0_0_/_0.5)] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-inter">
      <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
          <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
            <div className="relative box-border caret-transparent basis-0 grow shrink-0 h-screen min-h-px min-w-px outline-[oklab(0.708_0_0_/_0.5)] w-full">
              <div ref={scrollContainerRef} className="custom-scrollbar relative text-[oklch(0.872_0.01_258.338)] bg-gray-950 box-border caret-transparent h-full outline-[oklab(0.708_0_0_/_0.5)] overflow-x-hidden overflow-y-auto">
                <CursorGlow />
                <div className="fixed bg-[radial-gradient(900px_at_400px_300px,rgba(139,92,246,0.08),rgba(0,0,0,0)_60%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] pointer-events-none z-50 inset-0"></div>
                <div className="fixed box-border caret-transparent h-[500px] outline-[oklab(0.708_0_0_/_0.5)] pointer-events-none translate-x-[150px] translate-y-[50px] w-[500px] z-40">
                  <div className="bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,rgba(168,85,247,0.06)_50%,rgba(0,0,0,0)_70%)] box-border caret-transparent blur-[80px] h-full opacity-60 outline-[oklab(0.708_0_0_/_0.5)] w-full rounded-[3.35544e+07px]"></div>
                </div>
                <div ref={contentRef} className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] z-10">
                  <Navbar />
                  <HeroSection />
                  <Suspense fallback={null}>
                    <ScrollbarRevealer />
                    <StorySection />
                    <CommandCenterSection />
                    <ProjectsSection />
                    <SkillsSection />
                    <LabSection />
                    <ContactSection />
                    <Footer />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};