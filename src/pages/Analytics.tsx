import { ChevronDown, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import ChartCard from "../components/ChartCard";

const chartData = [400, 800, 600, 900, 400, 600, 800];
const chartLabels = [
  "Mar 1",
  "Mar 5",
  "Mar 10",
  "Mar 15",
  "Mar 20",
  "Mar 25",
  "Mar 30",
];

const Analytics = () => {
  return (
    <main className="flex-1">
      <Header title="Analytics" />

      {/* Sub Header */}
      <div className="flex justify-between items-center border-b border-[#1D1D1DD1] bg-[#080808]">
        <div className="flex gap-2 ">
          <div className="border-r px-3 py-2 border-[#1D1D1DD1]">
            <button className="px-4 py-2 bg-[#080808] text-white rounded-lg ">
              Overview
            </button>
          </div>
          <div className="border-r px-3 py-2 border-[#1D1D1DD1]">
            <button className="px-4 py-2 text-[#555555] hover:text-white">
              Demographics
            </button>
          </div>
        </div>
        <div className="border-l px-3 py-2 border-[#1D1D1DD1]">
          <button className="text-[#555555] px-4 py-2 hover:text-white">
            More
          </button>
        </div>
      </div>

      {/* Content */}
      <div className=" bg-[#080808]">
        {/* Overview Section */}
        <section className="m-4">
          <h2 className="text-2xl font-semibold mb-6">Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            <ChartCard data={chartData} labels={chartLabels} />

            {/* Stats Card */}
            <div className="bg-[#080808] p-3 border border-[#1D1D1D] rounded-md ">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-semibold">Insights</h3>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-[#1D1D1D] rounded-lg text-sm">
                  Visitors <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <p className=" text-md mb-2">Founders</p>
                  <div className="flex gap-12 items-center">
                    <span className="text-3xl font-semibold">7.4K</span>
                    <p className=" text-sm ">
                      <span className="text-[#01754F]">+000%</span> <br />
                      (000)
                    </p>
                  </div>
                </div>

                <div>
                  <p className=" text-md mb-2">Investors</p>

                  <div className="flex gap-12 items-center">
                    <span className="text-3xl font-semibold">6.09K</span>
                    <p className=" text-sm ">
                      <span className="text-[#01754F]">+000%</span> <br />
                      (000)
                    </p>
                  </div>
                </div>
                <div className="bg-[#1D1D1D] w-full h-[1px]" />
                <button className="flex items-center justify-end gap-2  hover:text-white text-sm w-full">
                  View detailed insights <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Demographics Section */}
        <section className="border border-[#1D1D1D] rounded-md m-4 p-4">
          <h2 className="text-2xl font-semibold mb-6">Demographics</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-2/3">
              {/* World Map */}
              <div className="h-[300px] bg-[#1D1D1D] rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-50">
                  <svg viewBox="0 0 800 400" className="w-full h-full">
                    <pattern
                      id="grid"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="1"
                        cy="1"
                        r="1"
                        fill="rgba(255,255,255,0.1)"
                      />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                <div className="absolute bottom-0 flex items-center border border-[#1D1D1DD1] rounded-2xl h-8 bg-black m-2">
                  {[
                    { country: "India", color: "#4834D4" },
                    { country: "USA", color: "#BD5302" },
                    { country: "Canada", color: "#E9C16B" },
                    { country: "UAE", color: "#01754F" },
                  ].map((item) => (
                    <div
                      key={item.country}
                      className="flex p-2 gap-2 items-center"
                    >
                      <div
                        style={{
                          backgroundColor: item.color,
                          width: "1rem",
                          height: "1rem",
                          borderRadius: "50%",
                        }}
                      />
                      <div className="text-sm">{item.country}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3">
              {/* Country Stats */}
              <div className="space-y-6 w-full">
                {[
                  {
                    country: "India",
                    percentage: "40%",
                    flag: "🇮🇳",
                    color: "#4834D4",
                  },
                  {
                    country: "USA",
                    percentage: "25%",
                    flag: "🇺🇸",
                    color: "#BD5302",
                  },
                  {
                    country: "Canada",
                    percentage: "10%",
                    flag: "🇨🇦",
                    color: "#E9C16B",
                  },
                  {
                    country: "UAE",
                    percentage: "7%",
                    flag: "🇦🇪",
                    color: "#01754F",
                  },
                ].map((item) => (
                  <div key={item.country} className="flex gap-2 items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-5xl">{item.flag}</span>
                    </div>
                    <div className="flex flex-col justify-start w-full">
                      <div className="flex gap-4 justify-between">
                        <span className="text-sm">{item.country}</span>
                        <span>{item.percentage}</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#1D1D1D] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: item.percentage,
                            backgroundColor: item.color,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#1D1D1D] w-full h-[1px] mt-8" />
              <button className="mt-8 flex items-center justify-end gap-2 hover:text-white text-sm w-full">
                View all countries <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Analytics;
