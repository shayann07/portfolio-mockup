const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

export const DesktopMenu = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-1 hidden min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] gap-y-1 md:flex md:min-h-[auto] md:min-w-[auto]">
      <button
        onClick={() => scrollToSection("hero")}
        className="group relative text-[oklab(0.902_0.037653_-0.0505099_/_0.7)] text-xs font-bold bg-transparent caret-transparent inline-block tracking-[1.8px] leading-4 min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] text-center px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[oklab(0.714_0.117894_-0.165257_/_0.15)] md:block md:min-h-[auto] md:min-w-[auto]"
      >
        <span className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] z-10">
          HOME
        </span>
        <span className="absolute bg-[linear-gradient(to_right,oklch(0.714_0.203_305.504)_0%,oklch(0.627_0.265_303.9)_100%)] box-border caret-transparent block h-[2.5px] outline-[oklab(0.708_0_0_/_0.5)] w-[calc(100%-34px)] left-1/2 bottom-0 -translate-x-1/2 origin-center scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
      </button>
      <button
        onClick={() => scrollToSection("story")}
        className="group relative text-[oklab(0.902_0.037653_-0.0505099_/_0.7)] text-xs font-bold bg-transparent caret-transparent inline-block tracking-[1.8px] leading-4 min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] text-center px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[oklab(0.714_0.117894_-0.165257_/_0.15)] md:block md:min-h-[auto] md:min-w-[auto]"
      >
        <span className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] z-10">
          STORY
        </span>
        <span className="absolute bg-[linear-gradient(to_right,oklch(0.714_0.203_305.504)_0%,oklch(0.627_0.265_303.9)_100%)] box-border caret-transparent block h-[2.5px] outline-[oklab(0.708_0_0_/_0.5)] w-[calc(100%-34px)] left-1/2 bottom-0 -translate-x-1/2 origin-center scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
      </button>
      <button
        onClick={() => scrollToSection("projects")}
        className="group relative text-[oklab(0.902_0.037653_-0.0505099_/_0.7)] text-xs font-bold bg-transparent caret-transparent inline-block tracking-[1.8px] leading-4 min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] text-center px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[oklab(0.714_0.117894_-0.165257_/_0.15)] md:block md:min-h-[auto] md:min-w-[auto]"
      >
        <span className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] z-10">
          PROJECTS
        </span>
        <span className="absolute bg-[linear-gradient(to_right,oklch(0.714_0.203_305.504)_0%,oklch(0.627_0.265_303.9)_100%)] box-border caret-transparent block h-[2.5px] outline-[oklab(0.708_0_0_/_0.5)] w-[calc(100%-34px)] left-1/2 bottom-0 -translate-x-1/2 origin-center scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
      </button>
      <button
        onClick={() => scrollToSection("skills")}
        className="group relative text-[oklab(0.902_0.037653_-0.0505099_/_0.7)] text-xs font-bold bg-transparent caret-transparent inline-block tracking-[1.8px] leading-4 min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] text-center px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[oklab(0.714_0.117894_-0.165257_/_0.15)] md:block md:min-h-[auto] md:min-w-[auto]"
      >
        <span className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] z-10">
          SKILLS
        </span>
        <span className="absolute bg-[linear-gradient(to_right,oklch(0.714_0.203_305.504)_0%,oklch(0.627_0.265_303.9)_100%)] box-border caret-transparent block h-[2.5px] outline-[oklab(0.708_0_0_/_0.5)] w-[calc(100%-34px)] left-1/2 bottom-0 -translate-x-1/2 origin-center scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
      </button>
      <button
        onClick={() => scrollToSection("lab")}
        className="group relative text-[oklab(0.902_0.037653_-0.0505099_/_0.7)] text-xs font-bold bg-transparent caret-transparent inline-block tracking-[1.8px] leading-4 min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] text-center px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[oklab(0.714_0.117894_-0.165257_/_0.15)] md:block md:min-h-[auto] md:min-w-[auto]"
      >
        <span className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] z-10">
          LAB
        </span>
        <span className="absolute bg-[linear-gradient(to_right,oklch(0.714_0.203_305.504)_0%,oklch(0.627_0.265_303.9)_100%)] box-border caret-transparent block h-[2.5px] outline-[oklab(0.708_0_0_/_0.5)] w-[calc(100%-34px)] left-1/2 bottom-0 -translate-x-1/2 origin-center scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        className="group relative text-[oklab(0.902_0.037653_-0.0505099_/_0.7)] text-xs font-bold bg-transparent caret-transparent inline-block tracking-[1.8px] leading-4 min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] text-center px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[oklab(0.714_0.117894_-0.165257_/_0.15)] md:block md:min-h-[auto] md:min-w-[auto]"
      >
        <span className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] z-10">
          CONTACT
        </span>
        <span className="absolute bg-[linear-gradient(to_right,oklch(0.714_0.203_305.504)_0%,oklch(0.627_0.265_303.9)_100%)] box-border caret-transparent block h-[2.5px] outline-[oklab(0.708_0_0_/_0.5)] w-[calc(100%-34px)] left-1/2 bottom-0 -translate-x-1/2 origin-center scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
      </button>
    </div>
  );
};
