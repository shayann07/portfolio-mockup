import { motion } from "framer-motion";

const particles = [
  "absolute bg-[oklab(0.714_0.117894_-0.165257_/_0.2)] box-border caret-transparent h-1 opacity-[0.298418] outline-[oklab(0.708_0_0_/_0.5)] w-1 rounded-[3.35544e+07px] scale-[0.726383px] left-[94.0106%] top-[12.1716%] md:opacity-[0.0273652] md:scale-[0.0685966px]",
  "absolute bg-[oklab(0.714_0.117894_-0.165257_/_0.2)] box-border caret-transparent h-1 opacity-[0.00700674] outline-[oklab(0.708_0_0_/_0.5)] w-1 rounded-[3.35544e+07px] scale-[0.019102px] left-[14.5438%] top-[15.6624%] md:opacity-[0.624294] md:scale-[0.870928px]",
  "absolute bg-[oklab(0.714_0.117894_-0.165257_/_0.2)] box-border caret-transparent h-1 opacity-[0.281261] outline-[oklab(0.708_0_0_/_0.5)] w-1 rounded-[3.35544e+07px] scale-[0.682515px] left-[93.4798%] top-[31.0733%] md:opacity-[0.0461084] md:scale-[0.121164px]",
  "absolute bg-[oklab(0.714_0.117894_-0.165257_/_0.2)] box-border caret-transparent h-1 opacity-[0.358887] outline-[oklab(0.708_0_0_/_0.5)] w-1 rounded-[3.35544e+07px] scale-[0.525154px] left-[57.7961%] top-[31.1351%] md:opacity-[0.811342] md:scale-[1.09852px]",
  "absolute bg-[oklab(0.714_0.117894_-0.165257_/_0.2)] box-border caret-transparent h-1 opacity-[0.0369876] outline-[oklab(0.708_0_0_/_0.5)] w-1 rounded-[3.35544e+07px] scale-[0.0929822px] left-[80.3792%] top-[77.7702%] md:opacity-[0.0119079] md:scale-[0.0438778px]",
  "absolute bg-[oklab(0.714_0.117894_-0.165257_/_0.2)] box-border caret-transparent h-1 opacity-[0.0764328] outline-[oklab(0.708_0_0_/_0.5)] w-1 rounded-[3.35544e+07px] scale-[0.195714px] left-[61.0471%] top-[5.47073%] md:opacity-[0.038568] md:scale-[0.0964005px]",
  "absolute bg-[oklab(0.714_0.117894_-0.165257_/_0.2)] box-border caret-transparent h-1 opacity-[0.658304] outline-[oklab(0.708_0_0_/_0.5)] w-1 rounded-[3.35544e+07px] scale-[0.919524px] left-[96.1125%] top-[50.3173%] md:opacity-[0.772458] md:scale-[1.05249px]",
  "absolute bg-[oklab(0.714_0.117894_-0.165257_/_0.2)] box-border caret-transparent h-1 opacity-[0.487346] outline-[oklab(0.708_0_0_/_0.5)] w-1 rounded-[3.35544e+07px] scale-[0.69566px] left-[0.385949%] top-[8.45741%] md:opacity-[0.526781] md:scale-[0.759338px]",
  "absolute bg-[oklab(0.714_0.117894_-0.165257_/_0.2)] box-border caret-transparent h-1 opacity-[0.541442] outline-[oklab(0.708_0_0_/_0.5)] w-1 rounded-[3.35544e+07px] scale-[0.780205px] left-[47.4561%] top-[1.70369%] md:opacity-[0.515913] md:scale-[0.748352px]",
  "absolute bg-[oklab(0.714_0.117894_-0.165257_/_0.2)] box-border caret-transparent h-1 opacity-[0.638903] outline-[oklab(0.708_0_0_/_0.5)] w-1 rounded-[3.35544e+07px] scale-[1.49731px] left-[82.3168%] top-[99.3245%] md:opacity-[0.610082] md:scale-[1.44235px]",
  "absolute bg-[oklab(0.714_0.117894_-0.165257_/_0.2)] box-border caret-transparent h-1 opacity-[0.614514] outline-[oklab(0.708_0_0_/_0.5)] w-1 rounded-[3.35544e+07px] scale-[1.44461px] left-[51.4331%] top-[73.1734%] md:opacity-[0.633199] md:scale-[1.49464px]",
  "absolute bg-[oklab(0.714_0.117894_-0.165257_/_0.2)] box-border caret-transparent h-1 opacity-[0.673477] outline-[oklab(0.708_0_0_/_0.5)] w-1 rounded-[3.35544e+07px] scale-[1.49589px] left-[95.8107%] top-[22.6853%] md:opacity-[0.755603] md:scale-[1.47154px]",
];

export const FooterBackground = () => {
  return (
    <div className="absolute box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] pointer-events-none inset-0 overflow-hidden">
      {particles.map((className, index) => {
        // Deterministic random values based on index
        const duration = 3 + (index % 5); // 3-7s
        const yOffset = 10 + (index % 3) * 5; // 10-20px
        const delay = index * 0.2;

        return (
          <motion.div
            key={index}
            className={className}
            animate={{
              y: [0, -yOffset, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
            }}
          />
        );
      })}
    </div>
  );
};
