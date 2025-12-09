import { icons } from "@/config/icons";

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

export const CTAContent = () => {
  return (
    <div className="relative box-border caret-transparent max-w-screen-md outline-[oklab(0.708_0_0_/_0.5)] mx-auto text-center">
      <div className="relative backdrop-blur-2xl bg-[linear-gradient(to_right_bottom,oklab(0.627_0.147802_-0.219953_/_0.15)_0%,oklab(0.558_0.153983_-0.243379_/_0.08)_100%)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(139,92,246,0.3)_0px_0px_80px_0px] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] border overflow-hidden p-12 rounded-[40px] border-solid border-[oklab(0.714_0.117894_-0.165257_/_0.3)] md:p-16">
        <div className="absolute bg-[linear-gradient(to_right_bottom,oklab(0.714_0.117894_-0.165257_/_0.08)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] rounded-[39px] inset-px"></div>
        <div className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
          <div className="text-5xl box-border caret-transparent leading-[60px] outline-[oklab(0.708_0_0_/_0.5)] mb-6">
            🚀
          </div>
          <h2 className="text-white text-4xl font-black box-border caret-transparent tracking-[-1px] leading-[48px] outline-[oklab(0.708_0_0_/_0.5)] uppercase mb-4 md:text-5xl md:tracking-[-1.25px] md:leading-[60px]">
            Ready to Build?
          </h2>
          <p className="text-[oklab(0.946_0.0199398_-0.0262945_/_0.8)] text-lg box-border caret-transparent leading-7 outline-[oklab(0.708_0_0_/_0.5)] mb-8 md:text-xl md:leading-8">
            Let's create something exceptional together. Whether it's a new project or improving an existing one, I'm here to help.
          </p>
          <div className="box-border caret-transparent gap-x-4 flex flex-col justify-center outline-[oklab(0.708_0_0_/_0.5)] gap-y-4 md:flex-row">
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white font-bold items-center bg-transparent bg-[linear-gradient(to_right,oklch(0.558_0.288_302.321)_0%,oklch(0.496_0.265_301.924)_100%)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,oklab(0.627_0.147802_-0.219953_/_0.4)_0px_10px_15px_-3px,oklab(0.627_0.147802_-0.219953_/_0.4)_0px_4px_6px_-4px] caret-transparent gap-x-2 flex justify-center outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 text-center px-8 py-4 rounded-[14px] transition-all duration-300 hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,oklab(0.627_0.147802_-0.219953_/_0.6)_0px_15px_25px_-5px,oklab(0.627_0.147802_-0.219953_/_0.6)_0px_8px_10px_-6px]"
            >
              Start a Project
              <img
                src={icons.arrowRight}
                alt="Icon"
                className="box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5"
              />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white font-bold items-center backdrop-blur-xl bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.05)] caret-transparent gap-x-2 flex justify-center outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 text-center border-[oklab(0.714_0.117894_-0.165257_/_0.3)] px-8 py-4 rounded-[14px] border-solid transition-all duration-300 hover:bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.1)] hover:border-[oklab(0.714_0.117894_-0.165257_/_0.5)]"
            >
              <img
                src={icons.calendar}
                alt="Icon"
                className="box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5"
              />
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
