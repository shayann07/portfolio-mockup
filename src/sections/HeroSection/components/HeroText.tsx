import { icons } from "@/config/icons";
import { CV_URL } from "@/config/links";
import { scaleUp, slideDown, slideInLeft, slideUp, staggerContainer } from "@/utils/animation-variants";
import { motion } from "framer-motion";

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

export const HeroText = () => {
  return (
    <motion.div
      className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Badge */}
      <motion.div
        variants={slideDown}
        className="items-center backdrop-blur-xl bg-[oklab(0.627_0.147802_-0.219953_/_0.1)] box-border caret-transparent gap-x-2 inline-flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 border border-[oklab(0.714_0.117894_-0.165257_/_0.2)] mb-8 px-4 py-2 rounded-[3.35544e+07px] border-solid"
      >
        <div className="bg-[oklch(0.714_0.203_305.504)] box-border caret-transparent h-2 outline-[oklab(0.708_0_0_/_0.5)] w-2 rounded-[3.35544e+07px]"></div>
        <span className="text-[oklch(0.902_0.063_306.703)] text-xs font-semibold box-border caret-transparent block tracking-[1.8px] leading-4 outline-[oklab(0.708_0_0_/_0.5)] uppercase">
          Android &amp; Flutter Engineer
        </span>
      </motion.div>

      {/* Headline */}
      <h1 className="text-5xl font-black box-border caret-transparent tracking-[-1.5px] leading-[57px] outline-[oklab(0.708_0_0_/_0.5)] mb-8 md:text-8xl md:tracking-[-2.4px] md:leading-[91.2px]">
        <motion.span
          variants={slideInLeft}
          className="text-white text-5xl box-border caret-transparent block tracking-[-1.5px] leading-[57px] outline-[oklab(0.708_0_0_/_0.5)] uppercase md:text-8xl md:tracking-[-2.4px] md:leading-[91.2px]"
        >
          Muhammad
        </motion.span>
        <motion.span
          variants={slideInLeft}
          className="text-transparent text-5xl bg-clip-text bg-[linear-gradient(to_right,oklch(0.902_0.063_306.703)_0%,oklch(0.827_0.119_306.383)_50%,oklch(0.714_0.203_305.504)_100%)] box-border block tracking-[-1.5px] leading-[57px] outline-[oklab(0.708_0_0_/_0.5)] uppercase md:text-8xl md:tracking-[-2.4px] md:leading-[91.2px]"
        >
          Shayan
        </motion.span>
      </h1>

      {/* Subtitle */}
      <motion.p
        variants={slideUp}
        className="text-[oklab(0.946_0.0199398_-0.0262945_/_0.9)] text-xl font-medium box-border caret-transparent leading-[32.5px] outline-[oklab(0.708_0_0_/_0.5)] mb-8 md:text-2xl md:leading-[39px]"
      >
        Designing{" "}
        <span className="text-[oklch(0.827_0.119_306.383)] text-xl box-border caret-transparent leading-[32.5px] outline-[oklab(0.708_0_0_/_0.5)] md:text-2xl md:leading-[39px]">
          offline-first
        </span>
        , crash-resistant apps with{" "}
        <span className="text-[oklch(0.827_0.119_306.383)] text-xl box-border caret-transparent leading-[32.5px] outline-[oklab(0.708_0_0_/_0.5)] md:text-2xl md:leading-[39px]">
          ML superpowers
        </span>
        .
      </motion.p>

      {/* Paragraph */}
      <motion.p
        variants={slideUp}
        className="text-[oklch(0.707_0.022_261.325)] box-border caret-transparent leading-[26px] max-w-xl outline-[oklab(0.708_0_0_/_0.5)] mb-8"
      >
        Specialized in offline sync mechanisms, 99%+ crash-free releases, and
        performance optimization that delivers 40–60% gains in critical
        workflows.
      </motion.p>

      {/* Buttons */}
      <div className="box-border caret-transparent gap-x-4 flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-4 md:flex-row">
        <motion.button
          variants={scaleUp}
          onClick={() => scrollToSection("projects")}
          className="text-white font-bold items-center bg-transparent bg-[linear-gradient(to_right,oklch(0.558_0.288_302.321)_0%,oklch(0.496_0.265_301.924)_100%)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,oklab(0.627_0.147802_-0.219953_/_0.3)_0px_10px_15px_-3px,oklab(0.627_0.147802_-0.219953_/_0.3)_0px_4px_6px_-4px] caret-transparent gap-x-2 flex justify-center outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 text-center px-8 py-4 rounded-[14px]"
        >
          View My Work
          <img
            src={icons.arrowRight}
            alt="Icon"
            className="box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5"
          />
        </motion.button>
        <motion.a
          variants={scaleUp}
          href={CV_URL}
          download="muhammad_shayan_cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold items-center backdrop-blur-xl bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.05)] caret-transparent gap-x-2 flex justify-center outline-[oklab(0.714_0.117894_-0.165257_/_0.3)] outline outline-[2.1px] gap-y-2 text-center border-[oklab(0.714_0.117894_-0.165257_/_0.3)] px-8 py-4 rounded-[14px] border-solid"
        >
          <img
            src={icons.calendar}
            alt="Icon"
            className="box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5"
          />
          Download CV
        </motion.a>
      </div>
    </motion.div>
  );
};
