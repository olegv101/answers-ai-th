import { Graph } from "./Graph";
import { Info, Plus } from "lucide-react";
import { Button } from "./ui/Button";

/**
 * Type definition for KPI card data
 * Represents individual metric displays with optional prefix/suffix
 */
type KPICardData = {
  title: string;
  value: string | number;
  description: string;
  prefix?: string;
  suffix?: string;
};

/**
 * Predefined KPI metrics data
 * Contains various performance indicators with their respective values and formatting
 */
const kpiData: KPICardData[] = [
  {
    title: "Infrastructure Units",
    value: 421.07,
    description: "Total investment in charging stations and supporting infrastructure across all locations.",
    prefix: "€",
  },
  {
    title: "Charging Growth",
    value: 33.07,
    description: "Year-over-year expansion rate of our charging network and installation of new units.",
  },
  {
    title: "Localization change",
    value: 21.9,
    description: "Percentage increase in market penetration and adaptation to local market demands.",
    suffix: "%",
  },
  {
    title: "Fleet growth",
    value: 7.03,
    description: "Annual growth rate of our vehicle fleet size and operational capacity.",
    suffix: "%",
  },
];

/**
 * DashboardMetrics Component
 * Main dashboard view combining graphs and KPI metrics
 * Layout:
 * - Left side (60%): Graph visualization
 * - Right side (40%): KPI cards grid
 * Features:
 * - Responsive layout
 * - Interactive graph
 * - KPI cards with tooltips
 */
export function DashboardMetrics() {
  return (
    <div className="flex gap-4">
      <div className="w-3/5">
        <h3 className="text-[24px] font-semibold text-white flex justify-start mb-4">
          Graphs
        </h3>
        <Graph />
      </div>
      <div className="w-2/5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[24px] font-semibold text-white">
            Key Performance Indicators
          </h3>
          <Button
            variant="standard"
            className="rounded-[5px] flex flex-row items-center bg-[#18181A80]"
          >
            Variables
            <Plus className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {kpiData.map((card, index) => (
            <div
              key={index}
              className="h-[261px] rounded-[5px] border border-[#525252] bg-[#222324] p-7 flex flex-col"
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
      </div>
    </div>
  );
}
