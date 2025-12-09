const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="absolute right-0 top-0 h-full w-[280px] backdrop-blur-2xl bg-[oklab(0.144404_0.00926093_-0.0243296_/_0.95)] border-[oklab(0.714_0.117894_-0.165257_/_0.2)] border-l border-solid shadow-[rgba(139,92,246,0.3)_0px_0px_40px_0px]">
        <div className="flex flex-col gap-y-1 p-4 pt-20">
          <button
            onClick={() => handleNavClick("hero")}
            className="relative text-[oklab(0.902_0.037653_-0.0505099_/_0.7)] text-xs font-bold bg-transparent caret-transparent block tracking-[1.8px] leading-4 outline-[oklab(0.708_0_0_/_0.5)] text-left px-4 py-3 rounded-lg transition-colors hover:bg-[oklab(0.714_0.117894_-0.165257_/_0.1)]"
          >
            <span className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] z-10">
              HOME
            </span>
          </button>
          <button
            onClick={() => handleNavClick("story")}
            className="relative text-[oklab(0.902_0.037653_-0.0505099_/_0.7)] text-xs font-bold bg-transparent caret-transparent block tracking-[1.8px] leading-4 outline-[oklab(0.708_0_0_/_0.5)] text-left px-4 py-3 rounded-lg transition-colors hover:bg-[oklab(0.714_0.117894_-0.165257_/_0.1)]"
          >
            <span className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] z-10">
              STORY
            </span>
          </button>
          <button
            onClick={() => handleNavClick("projects")}
            className="relative text-[oklab(0.902_0.037653_-0.0505099_/_0.7)] text-xs font-bold bg-transparent caret-transparent block tracking-[1.8px] leading-4 outline-[oklab(0.708_0_0_/_0.5)] text-left px-4 py-3 rounded-lg transition-colors hover:bg-[oklab(0.714_0.117894_-0.165257_/_0.1)]"
          >
            <span className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] z-10">
              PROJECTS
            </span>
          </button>
          <button
            onClick={() => handleNavClick("skills")}
            className="relative text-[oklab(0.902_0.037653_-0.0505099_/_0.7)] text-xs font-bold bg-transparent caret-transparent block tracking-[1.8px] leading-4 outline-[oklab(0.708_0_0_/_0.5)] text-left px-4 py-3 rounded-lg transition-colors hover:bg-[oklab(0.714_0.117894_-0.165257_/_0.1)]"
          >
            <span className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] z-10">
              SKILLS
            </span>
          </button>
          <button
            onClick={() => handleNavClick("lab")}
            className="relative text-[oklab(0.902_0.037653_-0.0505099_/_0.7)] text-xs font-bold bg-transparent caret-transparent block tracking-[1.8px] leading-4 outline-[oklab(0.708_0_0_/_0.5)] text-left px-4 py-3 rounded-lg transition-colors hover:bg-[oklab(0.714_0.117894_-0.165257_/_0.1)]"
          >
            <span className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] z-10">
              LAB
            </span>
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="relative text-[oklab(0.902_0.037653_-0.0505099_/_0.7)] text-xs font-bold bg-transparent caret-transparent block tracking-[1.8px] leading-4 outline-[oklab(0.708_0_0_/_0.5)] text-left px-4 py-3 rounded-lg transition-colors hover:bg-[oklab(0.714_0.117894_-0.165257_/_0.1)]"
          >
            <span className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] z-10">
              CONTACT
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

