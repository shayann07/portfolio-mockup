import { ArrowUp } from "lucide-react";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const FooterContent = () => {
  const techTags = ["React", "TypeScript", "Tailwind CSS", "Motion"];

  return (
    <div className="relative box-border caret-transparent max-w-screen-xl mx-auto px-6 outline-[oklab(0.708_0_0_/_0.5)]">
      <div className="relative py-8">
        {/* Row 1: Copyright left, Back to Top button right */}
        <div className="flex items-center justify-between gap-4">
          {/* Copyright - Left */}
          <p className="text-[11px] leading-[18px] text-[oklab(0.80_0.02_-0.05_/_0.75)] box-border caret-transparent">
            © 2025 ·{" "}
            <span className="text-[oklch(0.902_0.063_306.703)]">
              Muhammad Shayan
            </span>{" "}
            · shayxo.dev
          </p>

          {/* Back to Top Button - Right (flatter, subtle glow like design) */}
          <button
            onClick={scrollToTop}
            className="
              inline-flex items-center gap-2 rounded-full
              px-7 py-2
              text-[11px] font-semibold tracking-[0.20em] uppercase
              text-[oklch(0.96_0.04_305.5)]
              bg-[linear-gradient(135deg,oklch(0.66_0.20_305.5),oklch(0.56_0.18_305.5))]
              border border-[oklch(0.78_0.23_305.5)]
              shadow-[0_10px_24px_oklch(0.25_0.08_305.5_/_0.45)]
              hover:shadow-[0_12px_30px_oklch(0.25_0.08_305.5_/_0.6)]
              transition-all duration-200
              whitespace-nowrap
            "
          >
            BACK TO TOP
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Horizontal divider (same as design) */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[oklch(0.714_0.203_305.504_/_0.18)] to-transparent mt-8 mb-5" />

        {/* Row 2: Tech tags centered */}
        <div className="flex items-center justify-center gap-3 flex-wrap pb-6">
          {techTags.map((tech) => (
            <span
              key={tech}
              className="
                px-4 py-1.5 rounded-full
                border border-[oklch(0.714_0.203_305.504_/_0.35)]
                bg-[oklch(0.225_0.03_305.5_/_0.6)]
                text-[oklch(0.86_0.03_305.5)]
                text-xs font-medium tracking-wide
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
