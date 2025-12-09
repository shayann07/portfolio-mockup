import { personalLinks } from "@/config/personalLinks";
import React from "react";

export const ContactForm = () => {
    // Animation state for social icons - same pattern as SkillCategory chips
    const [animatedIcons, setAnimatedIcons] = React.useState<Set<number>>(new Set());
    const iconTimeoutRefs = React.useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

    // Cleanup timeouts on unmount
    React.useEffect(() => {
        return () => {
            iconTimeoutRefs.current.forEach((timeout) => {
                clearTimeout(timeout);
            });
            iconTimeoutRefs.current.clear();
        };
    }, []);

    const handleIconMouseEnter = (index: number) => {
        const existingTimeout = iconTimeoutRefs.current.get(index);
        if (existingTimeout) {
            clearTimeout(existingTimeout);
            iconTimeoutRefs.current.delete(index);
        }

        const timeout = setTimeout(() => {
            setAnimatedIcons((prev) => {
                const newSet = new Set(prev);
                newSet.add(index);
                return newSet;
            });
            iconTimeoutRefs.current.delete(index);
        }, 400);

        iconTimeoutRefs.current.set(index, timeout);
    };

    const handleIconMouseLeave = (index: number) => {
        const existingTimeout = iconTimeoutRefs.current.get(index);
        if (existingTimeout) {
            clearTimeout(existingTimeout);
            iconTimeoutRefs.current.delete(index);
        }

        const timeout = setTimeout(() => {
            setAnimatedIcons((prev) => {
                const newSet = new Set(prev);
                newSet.delete(index);
                return newSet;
            });
            iconTimeoutRefs.current.delete(index);
        }, 400);

        iconTimeoutRefs.current.set(index, timeout);
    };

    const socialLinks = [
        {
            href: personalLinks.github.link,
            label: "GitHub",
            color: "purple",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
            ),
        },
        {
            href: personalLinks.linkedin.link,
            label: "LinkedIn",
            color: "blue",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" rx="1" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            ),
        },
        {
            href: personalLinks.email.link,
            label: "Email",
            color: "purple",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
            ),
        },
    ];

    const getIconStyles = (index: number, color: string) => {
        const isAnimated = animatedIcons.has(index);
        const glowColor = color === "blue" ? "rgba(100,150,250,0.4)" : "rgba(180,140,255,0.4)";
        const textColor = color === "blue" ? "oklch(0.917_0.08_205.041)" : "oklch(0.92_0.08_280)";
        const bgColor = color === "blue" ? "oklab(0.715_-0.116822_-0.0824726_/_0.1)" : "oklab(0.65_0.12_-0.15_/_0.1)";
        const borderColor = color === "blue" ? "oklab(0.789_-0.131264_-0.0805336_/_0.2)" : "oklab(0.72_0.13_-0.16_/_0.2)";
        const borderColorHover = color === "blue" ? "oklab(0.789_-0.131264_-0.0805336_/_0.5)" : "oklab(0.72_0.13_-0.16_/_0.5)";

        return {
            containerStyle: {
                boxShadow: isAnimated ? `0 0 12px 0 ${glowColor}` : 'none',
                transform: isAnimated ? 'scale(1.06) translateY(-2px)' : 'scale(1) translateY(0)',
                filter: isAnimated ? 'brightness(1.12)' : 'brightness(1)',
                opacity: isAnimated ? 1 : 0.95,
                transition: 'box-shadow 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1), filter 500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms cubic-bezier(0.16, 1, 0.3, 1), border-color 500ms cubic-bezier(0.16, 1, 0.3, 1)',
                borderColor: isAnimated ? borderColorHover : borderColor,
            },
            bgColor,
            textColor,
            borderColor,
        };
    };

    return (
        <div className="max-w-2xl mx-auto">
            {/* Form Card - matching CTAContent card pattern */}
            <div className="relative backdrop-blur-2xl bg-[linear-gradient(to_right_bottom,oklab(0.627_0.147802_-0.219953_/_0.15)_0%,oklab(0.558_0.153983_-0.243379_/_0.08)_100%)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(139,92,246,0.3)_0px_0px_80px_0px] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] border overflow-hidden p-8 rounded-[32px] border-solid border-[oklab(0.714_0.117894_-0.165257_/_0.3)] md:p-10">
                {/* Inner gradient overlay - matching CTAContent */}
                <div className="absolute bg-[linear-gradient(to_right_bottom,oklab(0.714_0.117894_-0.165257_/_0.08)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] rounded-[31px] inset-px"></div>

                <form className="relative space-y-6">
                    {/* Name Field */}
                    <div>
                        <label className="flex items-center gap-2 text-[oklch(0.902_0.063_306.703)] text-[11px] font-semibold tracking-[1.8px] uppercase mb-3">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full px-5 py-4 rounded-xl backdrop-blur-xl bg-[oklab(0.627_0.147802_-0.219953_/_0.08)] border border-[oklab(0.714_0.117894_-0.165257_/_0.25)] text-white placeholder-[oklab(0.708_0_0_/_0.4)] text-sm outline-none focus:border-[oklab(0.714_0.117894_-0.165257_/_0.5)] transition-all duration-300"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="flex items-center gap-2 text-[oklch(0.902_0.063_306.703)] text-[11px] font-semibold tracking-[1.8px] uppercase mb-3">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="your.email@example.com"
                            className="w-full px-5 py-4 rounded-xl backdrop-blur-xl bg-[oklab(0.627_0.147802_-0.219953_/_0.08)] border border-[oklab(0.714_0.117894_-0.165257_/_0.25)] text-white placeholder-[oklab(0.708_0_0_/_0.4)] text-sm outline-none focus:border-[oklab(0.714_0.117894_-0.165257_/_0.5)] transition-all duration-300"
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label className="flex items-center gap-2 text-[oklch(0.902_0.063_306.703)] text-[11px] font-semibold tracking-[1.8px] uppercase mb-3">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                            Message
                        </label>
                        <textarea
                            placeholder="Tell me about your project or idea..."
                            rows={5}
                            className="w-full px-5 py-4 rounded-xl backdrop-blur-xl bg-[oklab(0.627_0.147802_-0.219953_/_0.08)] border border-[oklab(0.714_0.117894_-0.165257_/_0.25)] text-white placeholder-[oklab(0.708_0_0_/_0.4)] text-sm outline-none focus:border-[oklab(0.714_0.117894_-0.165257_/_0.5)] transition-all duration-300 resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full text-white font-bold items-center bg-transparent bg-[linear-gradient(to_right,oklch(0.558_0.288_302.321)_0%,oklch(0.496_0.265_301.924)_100%)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,oklab(0.627_0.147802_-0.219953_/_0.4)_0px_10px_15px_-3px,oklab(0.627_0.147802_-0.219953_/_0.4)_0px_4px_6px_-4px] caret-transparent gap-x-2 flex justify-center outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 text-center px-8 py-4 rounded-[14px] transition-all duration-300 hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,oklab(0.627_0.147802_-0.219953_/_0.6)_0px_15px_25px_-5px,oklab(0.627_0.147802_-0.219953_/_0.6)_0px_8px_10px_-6px] tracking-[1.5px] uppercase text-sm"
                    >
                        Send Message
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                    </button>
                </form>

                {/* Social Section */}
                <div className="relative mt-10 pt-8 border-t border-[oklab(0.714_0.117894_-0.165257_/_0.15)]">
                    <p className="text-center text-[oklab(0.708_0_0_/_0.5)] text-[11px] tracking-[1.8px] uppercase mb-6">
                        Or Connect With Me On
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        {socialLinks.map((link, index) => {
                            const styles = getIconStyles(index, link.color);
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                                    style={styles.containerStyle}
                                    className={`w-14 h-14 flex items-center justify-center backdrop-blur-xl bg-[${styles.bgColor}] border rounded-2xl text-[${styles.textColor}]`}
                                    onMouseEnter={() => handleIconMouseEnter(index)}
                                    onMouseLeave={() => handleIconMouseLeave(index)}
                                >
                                    {link.icon}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
