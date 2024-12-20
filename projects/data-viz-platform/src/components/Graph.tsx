import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { ArrowUp, ChevronDown, Info } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";

/**
 * Mock data for the line chart
 * Represents monthly values and change percentages
 */
const data = [
  { month: "Apr", value: 35000, change: 2.3 },
  { month: "May", value: 45000, change: 4.6 },
  { month: "Jun", value: 40000, change: 3.1 },
  { month: "Jul", value: 80000, change: 5.8 },
  { month: "Aug", value: 60000, change: 4.2 },
  { month: "Sep", value: 45000, change: 3.7 },
  { month: "Oct", value: 65000, change: 4.9 },
];

/**
 * CustomTooltip Component
 * Renders a custom tooltip for the line chart
 * Features:
 * - Formatted value display
 * - Change percentage indicator
 * - Visual indicators for positive/negative changes
 */
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#222324] border border-[#525252] rounded-lg p-4">
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-bold text-white text-left mb-2">
            ${(payload[0].value / 1000).toFixed(2)}k
          </p>
          <Info className="h-4 w-4 text-gray-400/60" />
        </div>
        <div className="flex items-center gap-2 text-[#999999]">
          <div className="border border-[#C9FF3B] rounded-full bg-[#C9FF3B]/10 p-1">
            <ArrowUp className="text-[#C9FF3B] size-3" />
          </div>
          <span className="text-[16px]">
            {payload[0].payload.change}% above target
          </span>
        </div>
      </div>
    );
  }
  return null;
};

/**
 * Graph Component
 * Main chart visualization component
 * Features:
 * - Interactive line chart
 * - Custom tooltips
 * - Responsive container
 * - Customized axes and grid
 */
export function Graph() {
  const currentMonth = "May"; // cos i love may

  return (
    <div className="rounded-lg border border-[#444444] bg-[#222324] p-4">
      <div className="flex items-center justify-end mb-4 mr-10">
        <Select defaultValue="unsatisfied">
          <SelectTrigger className="flex flex-row items-center justify-between w-[237px] bg-[#18181A80]/50 border border-[#525252] text-white rounded-[5px] px-4 py-2">
            <SelectValue>Unsatisfied Demand %</SelectValue>
            <ChevronDown className="text-white h-5 w-5" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
      <div className="h-[449px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 40, right: 40, left: 10, bottom: 20 }}
          >
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C9FF3B" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#C9FF3B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={true}
              horizontal={true}
              strokeDasharray="3 3"
              stroke="#333333"
              strokeOpacity={0.5}
            />
            <CartesianGrid
              horizontal={false}
              vertical={true}
              verticalCoordinatesGenerator={(props) => {
                const { width } = props;
                const count = 16; // number of vertical lines
                const gap = width / count;
                return Array.from({ length: count + 1 }, (_, i) => i * gap);
              }}
              stroke="#525252"
              strokeOpacity={0.5}
              strokeWidth={1}
            />
            <XAxis
              dataKey="month"
              stroke="#ffffff"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tick={({ x, y, payload }) => (
                <g transform={`translate(${x},${y})`}>
                  <text
                    x={0}
                    y={0}
                    dy={20}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize={12}
                  >
                    {payload.value}
                  </text>
                  {payload.value === currentMonth && (
                    <text
                      x={0}
                      y={0}
                      dy={35}
                      textAnchor="middle"
                      fill="#999999"
                      fontSize={10}
                    >
                      Current
                    </text>
                  )}
                </g>
              )}
            />
            <YAxis
              stroke="#ffffff"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#ffffff", fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}K`}
              dx={-20}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "#525252", strokeDasharray: "3 3" }}
            />
            <Area
              type="linear"
              dataKey="value"
              stroke="#C9FF3B"
              dot={true}
              strokeWidth={3}
              fill="url(#areaGradient)"
              activeDot={{ r: 6, fill: "#C9FF3B" }}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
