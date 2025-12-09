import { MetricCard } from "./MetricCard";

// Icon components - sized to match design
const BoxIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const ChartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const LightningIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

export const MetricCards = () => {
  return (
    <div className="box-border caret-transparent gap-4 grid grid-cols-1 outline-[oklab(0.708_0_0_/_0.5)] md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        icon={<BoxIcon />}
        metric="3+"
        title="PRODUCTION APPS SHIPPED"
        subtitle="Live on stores"
        color="purple"
        chartData={[20, 35, 50, 65, 75, 85, 95]}
      />
      <MetricCard
        icon={<ChartIcon />}
        metric="10k+"
        title="TOTAL INSTALLS"
        subtitle="Across all apps"
        color="teal"
        chartData={[15, 30, 45, 60, 70, 80, 90]}
      />
      <MetricCard
        icon={<LightningIcon />}
        metric="40-60%"
        title="PERFORMANCE GAINS"
        subtitle="Optimization results"
        color="green"
        chartData={[25, 40, 55, 70, 80, 88, 95]}
      />
      <MetricCard
        icon={<ShieldIcon />}
        metric="99%+"
        title="CRASH-FREE RELEASES"
        subtitle="Production stability"
        color="purple2"
        chartData={[95, 96, 97, 98, 99, 99, 99]}
      />
    </div>
  );
};
