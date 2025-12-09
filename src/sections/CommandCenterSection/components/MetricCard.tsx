import { ReactNode } from "react";

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
};

export const MetricCard = (props: MetricCardProps) => {
  const valueColorClass = props.valueColor || "text-white";
  
  return (
    <div className={`group/card relative backdrop-blur-2xl box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] border p-6 rounded-3xl border-solid transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] origin-center will-change-transform hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(139,92,246,0.25)_0px_0px_70px_0px] hover:brightness-[1.05] cursor-pointer ${props.cardBg} ${props.cardBorder} hover:border-opacity-40`}>
      <div className="absolute bg-[linear-gradient(to_right_bottom,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] rounded-[23px] inset-px"></div>
      <div className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
        <div className={`items-center box-border caret-transparent flex h-12 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-12 mb-4 rounded-xl ${props.iconBg}`}>
          <div className="text-white">
            {props.icon}
          </div>
        </div>
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-2">
          <h3 className={`${valueColorClass} text-4xl font-black box-border caret-transparent tracking-[-0.9px] leading-[43.2px] outline-[oklab(0.708_0_0_/_0.5)] uppercase mb-1`}>
            {props.value}
          </h3>
          <p className="text-white text-xs font-bold box-border caret-transparent tracking-[1.8px] leading-4 outline-[oklab(0.708_0_0_/_0.5)] uppercase">
            {props.label}
          </p>
          <p className="text-white text-[10px] box-border caret-transparent leading-[15px] outline-[oklab(0.708_0_0_/_0.5)] opacity-80">
            {props.subtitle}
          </p>
        </div>
        <div className="items-end box-border caret-transparent gap-x-1 flex h-12 outline-[oklab(0.708_0_0_/_0.5)] gap-y-1">
          {props.barHeights.map((height, index) => (
            <div
              key={index}
              className="box-border caret-transparent basis-[0%] grow outline-[oklab(0.708_0_0_/_0.5)] rounded-sm"
              style={{
                height: `${height}%`,
                background: props.barColor,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
