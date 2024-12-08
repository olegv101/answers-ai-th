import { Info } from "lucide-react";

/**
 * Type definition for KPI card data structure
 * Represents a single performance indicator card with formatting options
 */
type KPICardData = {
  title: string;      // Card title/metric name
  value: string | number;  // Metric value
  description: string;     // Detailed description of the metric
  prefix?: string;    // Optional prefix (e.g., currency symbol)
  suffix?: string;    // Optional suffix (e.g., percentage)
};

/**
 * Predefined KPI metrics data
 * Contains static data for four key performance indicators:
 * - Infrastructure Units (with currency)
 * - Charging Growth
 * - Localization change (with percentage)
 * - Fleet growth (with percentage)
 */
const kpiData: KPICardData[] = [
  {
    title: "Infrastructure Units",
    value: 421.07,
    description: "Total cost of charging infrastructure units deployed across all locations.",
    prefix: "€",
  },
  {
    title: "Charging Growth",
    value: 33.07,
    description: "Month-over-month increase in charging station utilization rate.",
  },
  {
    title: "Localization change",
    value: 21.9,
    description: "Improvement in local market adaptation and regional coverage expansion.",
    suffix: "%",
  },
  {
    title: "Fleet growth",
    value: 7.03,
    description: "Percentage increase in total number of vehicles in operational fleet.",
    suffix: "%",
  },
];

/**
 * KPICards Component
 * Renders a grid of KPI (Key Performance Indicator) cards
 * Features:
 * - 2-column responsive grid layout
 * - Individual cards with:
 *   - Title and info icon
 *   - Description text
 *   - Formatted value display (with optional prefix/suffix)
 * - Consistent styling and spacing
 */
export function KPICards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {kpiData.map((card, index) => (
        <div
          key={index}
          className="rounded-[5px] border border-[#525252] bg-[#222324] p-8 flex flex-col"
        >
          <div className="flex flex-col mb-[78px] text-left">
            <div className="flex w-full items-center justify-between mb-2">
              <h3 className="text-[18px] font-medium text-white">
                {card.title}
              </h3>
              <Info className="h-4 w-4 text-gray-400/60" />
            </div>
            <p className="text-[12px] text-[#BBBBBB] text-left">
              {card.description}
            </p>
          </div>

          <div className="mt-auto flex justify-end">
            <p className="text-[32px] font-bold text-white leading-none">
              {card.prefix}
              {card.value}
              {card.suffix}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
