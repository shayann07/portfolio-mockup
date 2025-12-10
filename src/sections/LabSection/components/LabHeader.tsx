import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

export const LabHeader = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.97, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.97, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center mb-16"
    >
      <div className="box-border caret-transparent inline-block outline-[oklab(0.708_0_0_/_0.5)] mb-6">
        <h2 className="text-transparent text-6xl font-black bg-clip-text bg-[linear-gradient(to_right,oklch(0.902_0.063_306.703)_0%,oklch(0.827_0.119_306.383)_50%,oklch(0.714_0.203_305.504)_100%)] box-border tracking-[-1.5px] leading-[60px] outline-[oklab(0.708_0_0_/_0.5)] uppercase md:text-7xl md:tracking-[-1.8px] md:leading-[72px]">
          The Lab
        </h2>
        <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0)_0%,oklch(0.714_0.203_305.504)_50%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-[3px] outline-[oklab(0.708_0_0_/_0.5)] mt-4"></div>
      </div>
      <p className="text-[oklab(0.902_0.037653_-0.0505099_/_0.6)] text-lg box-border caret-transparent leading-7 max-w-2xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
        Experiments, side projects, and technical explorations
      </p>
    </motion.div>
  );
};
