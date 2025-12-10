import { useInView, UseInViewOptions } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = (options?: UseInViewOptions) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true, // Only trigger once
        amount: 0.1, // Trigger when 10% visible (earlier trigger)
        ...options,
    });

    return { ref, isInView };
};
