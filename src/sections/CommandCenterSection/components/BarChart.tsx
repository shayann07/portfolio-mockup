type BarChartProps = {
  data: number[];
  colorClass: string;
};

export const BarChart = (props: BarChartProps) => {
  const maxValue = Math.max(...props.data);

  return (
    <div className="flex items-end gap-1 h-14">
      {props.data.map((value, index) => {
        const height = (value / maxValue) * 100;
        return (
          <div
            key={index}
            className={`flex-1 rounded-sm ${props.colorClass} transition-all duration-500 ease-out`}
            style={{
              height: `${height}%`,
              minHeight: "6px",
            }}
          />
        );
      })}
    </div>
  );
};
