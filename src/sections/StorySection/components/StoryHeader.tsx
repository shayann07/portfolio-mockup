import { slideUp } from "@/utils/animation-variants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const StoryHeader = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center mb-24"
    >
      <div className="box-border caret-transparent inline-block outline-[oklab(0.708_0_0_/_0.5)] mb-6 group cursor-pointer">
        <motion.h2
          variants={slideUp}
          className="text-transparent text-6xl font-black bg-clip-text bg-[linear-gradient(to_right,oklch(0.902_0.063_306.703)_0%,oklch(0.827_0.119_306.383)_50%,oklch(0.714_0.203_305.504)_100%)] box-border tracking-[-1.5px] leading-[60px] outline-[oklab(0.708_0_0_/_0.5)] uppercase md:text-7xl md:tracking-[-1.8px] md:leading-[72px] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-center will-change-transform group-hover:scale-[1.07] group-hover:brightness-110"
        >
          My Story
        </motion.h2>
        <motion.div
          variants={slideUp}
          className="bg-[linear-gradient(to_right,rgba(0,0,0,0)_0%,oklch(0.714_0.203_305.504)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[3px] outline-[oklab(0.708_0_0_/_0.5)] mt-4 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-center will-change-transform group-hover:scale-[1.07]"
        ></motion.div>
      </div>
      <motion.p
        variants={slideUp}
        transition={{ delay: 0.1 }}
        className="text-[oklab(0.902_0.037653_-0.0505099_/_0.6)] text-lg box-border caret-transparent leading-7 max-w-2xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto"
      >
        A journey through production-grade mobile development
      </motion.p>
    </motion.div>
  );
};
