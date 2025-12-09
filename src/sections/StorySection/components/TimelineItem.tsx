export type TimelineItemProps = {
  variant: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  organization: string;
  period: string;
  bulletPoints: Array<{
    text: string;
    isLast?: boolean;
  }>;
};

export const TimelineItem = (props: TimelineItemProps) => {
  return (
    <div
      className={`relative items-start box-border caret-transparent gap-x-8 flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-8 md:items-center md:justify-between ${props.variant}`}
    >
      <div className="absolute box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] z-20 left-8 md:left-1/2 md:-translate-x-1/2 group/dot">
        <div
          className={`timeline-dot box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6 border-gray-950 rounded-[3.35544e+07px] border-4 border-solid transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer group-hover/dot:scale-[1.32] ${props.variant === "mb-16 md:flex-row" ? "bg-[linear-gradient(to_right_bottom,oklch(0.714_0.203_305.504)_0%,oklch(0.558_0.288_302.321)_100%)] timeline-dot-variant-1" : props.variant === "mb-16 md:flex-row-reverse" ? "bg-[linear-gradient(to_right_bottom,oklch(0.702_0.183_293.541)_0%,oklch(0.541_0.281_293.009)_100%)] timeline-dot-variant-2" : "bg-[linear-gradient(to_right_bottom,oklch(0.673_0.182_276.935)_0%,oklch(0.511_0.262_276.966)_100%)] timeline-dot-variant-3"}`}
        ></div>
      </div>
      <div
        className={`box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] w-full ml-20 md:w-[calc(50%_-_48px)] md:ml-0 ${props.variant === "mb-16 md:flex-row" || props.variant === "md:flex-row" ? "pr-0 md:pr-6" : "pl-0 md:pl-6"}`}
      >
        <div
          data-timeline-card
          className={`relative backdrop-blur-2xl shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(139,92,246,0.15)_0px_0px_60px_0px] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] border overflow-hidden p-8 rounded-3xl border-solid transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] origin-center will-change-transform hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(139,92,246,0.25)_0px_0px_70px_0px] hover:brightness-[1.05] cursor-pointer ${props.variant === "mb-16 md:flex-row" ? "bg-[linear-gradient(to_right_bottom,oklab(0.627_0.147802_-0.219953_/_0.1)_0%,oklab(0.558_0.153983_-0.243379_/_0.05)_100%)] border-[oklab(0.714_0.117894_-0.165257_/_0.2)] hover:border-[oklab(0.714_0.117894_-0.165257_/_0.3)]" : props.variant === "mb-16 md:flex-row-reverse" ? "bg-[linear-gradient(to_right_bottom,oklab(0.606_0.096545_-0.230606_/_0.1)_0%,oklab(0.541_0.109836_-0.258645_/_0.05)_100%)] border-[oklab(0.702_0.0730911_-0.16777_/_0.2)] hover:border-[oklab(0.702_0.0730911_-0.16777_/_0.3)]" : "bg-[linear-gradient(to_right_bottom,oklab(0.585_0.0288678_-0.231205_/_0.1)_0%,oklab(0.511_0.0317755_-0.260066_/_0.05)_100%)] border-[oklab(0.673_0.0219752_-0.180668_/_0.2)] hover:border-[oklab(0.673_0.0219752_-0.180668_/_0.3)]"}`}
        >
          <div
            className={`absolute box-border caret-transparent opacity-50 outline-[oklab(0.708_0_0_/_0.5)] w-[3px] inset-y-0 ${props.variant === "mb-16 md:flex-row" ? "bg-[linear-gradient(oklch(0.714_0.203_305.504)_0%,oklch(0.627_0.265_303.9)_50%,oklch(0.714_0.203_305.504)_100%)] shadow-[rgba(139,92,246,0.8)_0px_0px_20px_0px] right-0" : props.variant === "mb-16 md:flex-row-reverse" ? "bg-[linear-gradient(oklch(0.702_0.183_293.541)_0%,oklch(0.606_0.25_292.717)_50%,oklch(0.702_0.183_293.541)_100%)] shadow-[rgba(139,92,246,0.7)_0px_0px_20px_0px] left-0" : "bg-[linear-gradient(oklch(0.673_0.182_276.935)_0%,oklch(0.585_0.233_277.117)_50%,oklch(0.673_0.182_276.935)_100%)] shadow-[rgba(99,102,241,0.7)_0px_0px_20px_0px] right-0"}`}
          ></div>
          <div className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
            <div className="items-start box-border caret-transparent gap-x-4 flex outline-[oklab(0.708_0_0_/_0.5)] gap-y-4 mb-6 group/icon">
              <div
                className={`items-center shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent flex shrink-0 h-14 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-14 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-center group-hover/icon:scale-110 group-hover/icon:shadow-[rgba(139,92,246,0.4)_0px_0px_20px_0px,rgba(139,92,246,0.3)_0px_0px_40px_0px] ${props.variant === "mb-16 md:flex-row" ? "bg-[linear-gradient(to_right_bottom,oklch(0.627_0.265_303.9)_0%,oklch(0.558_0.288_302.321)_100%)]" : props.variant === "mb-16 md:flex-row-reverse" ? "bg-[linear-gradient(to_right_bottom,oklch(0.606_0.25_292.717)_0%,oklch(0.541_0.281_293.009)_100%)]" : "bg-[linear-gradient(to_right_bottom,oklch(0.585_0.233_277.117)_0%,oklch(0.511_0.262_276.966)_100%)]"}`}
              >
                <img
                  src={props.iconSrc}
                  alt={props.iconAlt}
                  className="text-white box-border caret-transparent h-7 outline-[oklab(0.708_0_0_/_0.5)] w-7 group-hover/icon:rotate-[360deg] group-hover/icon:scale-110"
                  style={{
                    transition: 'rotate 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94), scale 500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                />
              </div>
              <div className="box-border caret-transparent basis-[0%] grow outline-[oklab(0.708_0_0_/_0.5)]">
                <h3
                  className={`text-transparent text-2xl font-black bg-clip-text box-border tracking-[-0.6px] leading-8 outline-[oklab(0.708_0_0_/_0.5)] uppercase mb-2 ${props.variant === "mb-16 md:flex-row" ? "bg-[linear-gradient(to_right,oklch(0.902_0.063_306.703)_0%,oklch(0.714_0.203_305.504)_100%)]" : props.variant === "mb-16 md:flex-row-reverse" ? "bg-[linear-gradient(to_right,oklch(0.894_0.057_293.283)_0%,oklch(0.702_0.183_293.541)_100%)]" : "bg-[linear-gradient(to_right,oklch(0.87_0.065_274.039)_0%,oklch(0.673_0.182_276.935)_100%)]"}`}
                >
                  {props.title}
                </h3>
                <p className="text-[oklab(0.946_0.0199398_-0.0262945_/_0.8)] font-semibold box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-1">
                  {props.organization}
                </p>
                <p className="text-[oklab(0.902_0.037653_-0.0505099_/_0.5)] text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)] font-ui_monospace">
                  {props.period}
                </p>
              </div>
            </div>
            <ul className="box-border caret-transparent list-none outline-[oklab(0.708_0_0_/_0.5)] pl-0">
              {props.bulletPoints.map((point, index) => (
                <li
                  key={index}
                  className={
                    point.isLast
                      ? "text-[oklab(0.946_0.0199398_-0.0262945_/_0.7)] text-sm items-start box-border caret-transparent gap-x-3 flex leading-[22.75px] outline-[oklab(0.708_0_0_/_0.5)] gap-y-3"
                      : "text-[oklab(0.946_0.0199398_-0.0262945_/_0.7)] text-sm items-start box-border caret-transparent gap-x-3 flex leading-[22.75px] outline-[oklab(0.708_0_0_/_0.5)] gap-y-3 mb-3"
                  }
                >
                  <div
                    className={`box-border caret-transparent shrink-0 h-1.5 outline-[oklab(0.708_0_0_/_0.5)] w-1.5 mt-2 rounded-[3.35544e+07px] ${props.variant === "mb-16 md:flex-row" ? "bg-[linear-gradient(to_right,oklch(0.714_0.203_305.504)_0%,oklch(0.627_0.265_303.9)_100%)]" : props.variant === "mb-16 md:flex-row-reverse" ? "bg-[linear-gradient(to_right,oklch(0.702_0.183_293.541)_0%,oklch(0.606_0.25_292.717)_100%)]" : "bg-[linear-gradient(to_right,oklch(0.673_0.182_276.935)_0%,oklch(0.585_0.233_277.117)_100%)]"}`}
                  ></div>
                  <span className="box-border caret-transparent block outline-[oklab(0.708_0_0_/_0.5)]">
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent hidden min-h-0 min-w-0 outline-[oklab(0.708_0_0_/_0.5)] w-[calc(50%_-_px)] md:block md:min-h-[auto] md:min-w-[auto]"></div>
    </div>
  );
};
