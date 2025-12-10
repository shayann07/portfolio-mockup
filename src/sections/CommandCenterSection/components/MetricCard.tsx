import { CardParticles } from "@/components/CardParticles";
import { staggerContainer } from "@/utils/animation-variants";
import { motion, Variants } from "framer-motion";
import { ReactNode, useState } from "react";

export type MetricCardProps = {
  icon: ReactNode;
  value: string;
  label: string;
  subtitle: string;
  barColor: string;
  iconBg: string;
  valueColor?: string;
  barHeights: number[];
  cardBg: string;
  cardBorder: string;
  shadowColor?: string; // Expects "r, g, b" string
};

const cardInternalStagger: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1
    }
  }
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export const MetricCard = (props: MetricCardProps) => {
  const valueColorClass = props.valueColor || "text-white";
  const shadowColor = props.shadowColor || "139, 92, 246"; // Default purple
  const [hover, setHover] = useState(false);

  const defaultGlow = `0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 60px 0px rgba(${shadowColor}, 0.26)`;
  const hoverGlow = `0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 80px 0px rgba(${shadowColor}, 0.36)`;

  return (
    <motion.div
      variants={cardInternalStagger}
      whileHover={{
        scale: 1.02,
        y: -4,
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
      }}
      data-metric-card
      style={{
        boxShadow: hover ? hoverGlow : defaultGlow,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`group/card relative transform-gpu backdrop-blur-2xl box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] border p-6 rounded-3xl border-solid transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] origin-center will-change-[transform,box-shadow] hover:z-50 hover:brightness-[1.1] cursor-pointer ${props.cardBg} ${props.cardBorder} hover:border-opacity-60`}
    >
      <CardParticles />
      <div className="absolute bg-[linear-gradient(to_right_bottom,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] rounded-[23px] inset-px"></div>
      <div className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
        <motion.div
          variants={itemVariant}
          className={`items-center box-border caret-transparent flex h-12 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-12 mb-4 rounded-xl ${props.iconBg} transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/card:scale-110 group-hover/card:rotate-[360deg]`}
        >
          <div className="text-white">
            {props.icon}
          </div>
        </motion.div>
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-2">
          <motion.h3 variants={itemVariant} className={`${valueColorClass} text-4xl font-black box-border caret-transparent tracking-[-0.9px] leading-[43.2px] outline-[oklab(0.708_0_0_/_0.5)] uppercase mb-1`}>
            {props.value}
          </motion.h3>
          <motion.p variants={itemVariant} className="text-white text-xs font-bold box-border caret-transparent tracking-[1.8px] leading-4 outline-[oklab(0.708_0_0_/_0.5)] uppercase">
            {props.label}
          </motion.p>
          <motion.p variants={itemVariant} className="text-white text-[10px] box-border caret-transparent leading-[15px] outline-[oklab(0.708_0_0_/_0.5)] opacity-80">
            {props.subtitle}
          </motion.p>
        </div>
        <motion.div
          variants={staggerContainer}
          className="items-end box-border caret-transparent gap-x-1 flex h-12 outline-[oklab(0.708_0_0_/_0.5)] gap-y-1"
        >
          {props.barHeights.map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              variants={{
                visible: { height: `${height}%`, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="box-border caret-transparent basis-[0%] grow outline-[oklab(0.708_0_0_/_0.5)] rounded-sm"
              style={{
                background: props.barColor,
              }}
            ></motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
