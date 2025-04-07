import React, { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import LineChart from "./LineChart";

interface ChartCardProps {
  data: number[];
  labels: string[];
}

interface FilterOption {
  id: string;
  label: string;
  data: Record<string, number[]>;
  color: string;
}

// const generateTimeRangeData = (baseData: number[], range: string): number[] => {
//   switch (range) {
//     case "Today":
//       return baseData.slice(-1);
//     case "Yesterday":
//       return baseData.slice(-2, -1);
//     case "This week":
//       return baseData.slice(-7);
//     case "Last week":
//       return baseData.slice(-14, -7);
//     case "Last 7 days":
//       return baseData.slice(-7);
//     case "Last 30 days":
//     default:
//       return baseData;
//   }
// };

const getLabelsForTimeRange = (range: string): string[] => {
  const today = new Date();
  const labels: string[] = [];

  switch (range) {
    case "Today":
      labels.push(
        today.toLocaleDateString("en-US", { month: "short", day: "numeric" })
      );
      break;
    case "Yesterday":
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      labels.push(
        yesterday.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })
      );
      break;
    case "This week":
    case "Last 7 days":
      for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        labels.push(
          date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
        );
      }
      break;
    case "Last week":
      for (let i = 13; i >= 7; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        labels.push(
          date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
        );
      }
      break;
    case "Last 30 days":
    default:
      return [
        "Mar 1",
        "Mar 5",
        "Mar 10",
        "Mar 15",
        "Mar 20",
        "Mar 25",
        "Mar 30",
      ];
  }

  return labels;
};

const filterOptions: FilterOption[] = [
  {
    id: "visitors",
    label: "Visitors",
    data: {
      "Last 30 days": [
        400, 800, 600, 900, 400, 600, 800, 300, 600, 800, 500, 700, 400, 900,
      ],
      "Last 7 days": [500, 600, 700, 800, 750, 650, 900],
      "This week": [550, 650, 750, 850, 800, 700, 950],
      "Last week": [450, 550, 650, 750, 700, 600, 850],
      Yesterday: [700],
      Today: [800],
    },
    color: "#ffffff",
  },
  {
    id: "connections",
    label: "Connections",
    data: {
      "Last 30 days": [300, 600, 800, 500, 700, 400, 900],
      "Last 7 days": [400, 500, 600, 700, 650, 550, 800],
      "This week": [450, 550, 650, 750, 700, 600, 850],
      "Last week": [350, 450, 550, 650, 600, 500, 750],
      Yesterday: [600],
      Today: [700],
    },
    color: "#01754F",
  },
  {
    id: "interactions",
    label: "Interactions",
    data: {
      "Last 30 days": [500, 400, 700, 600, 800, 500, 600],
      "Last 7 days": [600, 500, 800, 700, 900, 600, 700],
      "This week": [650, 550, 850, 750, 950, 650, 750],
      "Last week": [550, 450, 750, 650, 850, 550, 650],
      Yesterday: [500],
      Today: [600],
    },
    color: "#BD5302",
  },
  {
    id: "impressions",
    label: "Impressions",
    data: {
      "Last 30 days": [600, 700, 500, 800, 600, 700, 500],
      "Last 7 days": [700, 800, 600, 900, 700, 800, 600],
      "This week": [750, 850, 650, 950, 750, 850, 650],
      "Last week": [650, 750, 550, 850, 650, 750, 550],
      Yesterday: [800],
      Today: [900],
    },
    color: "#E9C16B",
  },
];

const timeRanges = [
  "Today",
  "Yesterday",
  "This week",
  "Last week",
  "Last 7 days",
  "Last 30 days",
];

const ChartCard: React.FC<ChartCardProps> = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    "visitors",
  ]);
  const [showMetricDropdown, setShowMetricDropdown] = useState(false);
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState("Last 30 days");

  const toggleFilter = (filterId: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  const getActiveDatasets = () => {
    return filterOptions
      .filter((option) => selectedFilters.includes(option.id))
      .map((option) => ({
        data: option.data[selectedTimeRange],
        borderColor: option.color,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, `${option.color}21`);
          gradient.addColorStop(1, `${option.color}00`);
          return gradient;
        },
        label: option.label,
        fill: true,
      }));
  };

  return (
    <div className="lg:col-span-2 bg-[#080808] p-2 border border-[#1D1D1D] rounded-md ">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <div className="relative">
            <button
              className="flex items-center gap-2 px-3 py-1.5 bg-[#1D1D1D] rounded-lg text-sm"
              onClick={() => setShowMetricDropdown(!showMetricDropdown)}
            >
              Metrics <ChevronDown className="w-4 h-4" />
            </button>
            {showMetricDropdown && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#1D1D1D] rounded-lg shadow-lg overflow-hidden z-10">
                {filterOptions.map((option) => (
                  <button
                    key={option.id}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-[#2D2D2D] flex items-center gap-2 ${
                      selectedFilters.includes(option.id)
                        ? "text-white"
                        : "text-[#555555]"
                    }`}
                    onClick={() => toggleFilter(option.id)}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: option.color }}
                    />
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className="flex items-center gap-2 px-3 py-1.5 bg-[#1D1D1D] rounded-lg text-sm"
              onClick={() => setShowTimeDropdown(!showTimeDropdown)}
            >
              {selectedTimeRange} <ChevronDown className="w-4 h-4" />
            </button>
            {showTimeDropdown && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#1D1D1D] rounded-lg shadow-lg overflow-hidden z-10">
                {timeRanges.map((range) => (
                  <button
                    key={range}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-[#2D2D2D] ${
                      selectedTimeRange === range
                        ? "text-white"
                        : "text-[#555555]"
                    }`}
                    onClick={() => {
                      setSelectedTimeRange(range);
                      setShowTimeDropdown(false);
                    }}
                  >
                    {range}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-[#1D1D1D] rounded-lg text-sm">
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>
      </div>
      <div className="h-[300px]">
        <LineChart
          datasets={getActiveDatasets()}
          labels={getLabelsForTimeRange(selectedTimeRange)}
        />
      </div>
    </div>
  );
};

export default ChartCard;
