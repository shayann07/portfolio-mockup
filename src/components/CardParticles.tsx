import { motion } from "framer-motion";

// Reduced set of particles optimized for smaller cards (vs the 12 in the large footer)
const particles = [
    // style: className string
    "absolute bg-[oklab(0.714_0.117894_-0.165257_/_0.2)] box-border caret-transparent h-1 opacity-[0.3] outline-[oklab(0.708_0_0_/_0.5)] w-1 rounded-full left-[10%] top-[20%]",
    "absolute bg-[oklab(0.714_0.117894_-0.165257_/_0.2)] box-border caret-transparent h-1 opacity-[0.5] outline-[oklab(0.708_0_0_/_0.5)] w-1 rounded-full left-[85%] top-[15%]",
    "absolute bg-[oklab(0.714_0.117894_-0.165257_/_0.2)] box-border caret-transparent h-1 opacity-[0.2] outline-[oklab(0.708_0_0_/_0.5)] w-1 rounded-full left-[60%] top-[40%]",
    "absolute bg-[oklab(0.714_0.117894_-0.165257_/_0.2)] box-border caret-transparent h-1 opacity-[0.4] outline-[oklab(0.708_0_0_/_0.5)] w-1 rounded-full left-[25%] top-[70%]",
    "absolute bg-[oklab(0.714_0.117894_-0.165257_/_0.2)] box-border caret-transparent h-1 opacity-[0.15] outline-[oklab(0.708_0_0_/_0.5)] w-1 rounded-full left-[75%] top-[80%]",
    "absolute bg-[oklab(0.714_0.117894_-0.165257_/_0.2)] box-border caret-transparent h-1 opacity-[0.35] outline-[oklab(0.708_0_0_/_0.5)] w-1 rounded-full left-[40%] top-[10%]",
];

export const CardParticles = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit]">
            {particles.map((className, index) => {
                // Deterministic animation values
                const duration = 4 + (index % 3) * 2; // 4s, 6s, 8s
                const yOffset = 15;
                const delay = index * 0.5;

                return (
                    <motion.div
                        key={index}
                        className={className}
                        animate={{
                            y: [0, -yOffset, 0],
                            opacity: [0.1, 0.5, 0.1], // Subtle twinkling
                            scale: [0.8, 1.2, 0.8],
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
