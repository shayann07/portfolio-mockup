import { icons } from "@/config/icons";

export const FooterContent = () => {
  return (
    <div className="relative box-border caret-transparent max-w-screen-xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
      <div className="items-center box-border caret-transparent gap-x-6 flex flex-col justify-between outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 md:flex-row">
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
          <button className="relative bg-transparent caret-transparent block outline-[oklab(0.708_0_0_/_0.5)] text-center p-0 mb-4">
            <span className="text-transparent text-xl font-black bg-clip-text bg-[linear-gradient(to_right,oklch(0.902_0.063_306.703)_0%,oklch(0.714_0.203_305.504)_100%)] box-border tracking-[-0.5px] leading-7 outline-[oklab(0.708_0_0_/_0.5)] uppercase">
              shayxo.dev
            </span>
          </button>
          <p className="text-[oklab(0.902_0.037653_-0.0505099_/_0.5)] text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)]">
            © 2024 Muhammad Shayan. All rights reserved.
          </p>
        </div>
        <div className="items-center box-border caret-transparent gap-x-6 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[oklab(0.902_0.037653_-0.0505099_/_0.6)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] transition-colors duration-300 hover:text-[oklch(0.902_0.063_306.703)]"
          >
            <img
              src={icons.social1}
              alt="GitHub"
              className="box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[oklab(0.902_0.037653_-0.0505099_/_0.6)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] transition-colors duration-300 hover:text-[oklch(0.902_0.063_306.703)]"
          >
            <img
              src={icons.social2}
              alt="LinkedIn"
              className="box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[oklab(0.902_0.037653_-0.0505099_/_0.6)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] transition-colors duration-300 hover:text-[oklch(0.902_0.063_306.703)]"
          >
            <img
              src={icons.social3}
              alt="Twitter"
              className="box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
