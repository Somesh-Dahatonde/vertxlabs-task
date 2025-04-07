import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface LineChartProps {
  datasets: {
    data: number[];
    borderColor: string;
    backgroundColor: any;
    label: string;
    fill: boolean;
  }[];
  labels: string[];
}

const LineChart: React.FC<LineChartProps> = ({ datasets, labels }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#1D1D1D",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 12,
        displayColors: true,
        callbacks: {
          title: (context: any) => context[0].label,
          label: (context: any) =>
            `${context.dataset.label}: ${context.parsed.y}`,
        },
        intersect: false,
        mode: "index" as const,
      },
    },
    interaction: {
      intersect: false,
      mode: "index" as const,
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#ffffff",
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
          padding: 8,
        },
      },
      y: {
        min: 200,
        max: 900,
        grid: {
          display: false,
          drawBorder: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#ffffff",
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
          padding: 12,
          stepSize: 150,
          callback: function (this: any, tickValue: string | number) {
            return tickValue.toString();
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0, // Changed from 0.4 to 0 for straight lines
        borderWidth: 2,
        fill: true,
        borderCapStyle: "round" as const,
        borderJoinStyle: "round" as const,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 5,
        hoverBorderWidth: 2,
        hoverBackgroundColor: "#FFFFFF",
      },
    },
    layout: {
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      },
    },
  };

  const chartData = {
    labels,
    datasets: datasets.map((dataset) => ({
      ...dataset,
      borderCapStyle: "round" as CanvasLineCap,
      borderJoinStyle: "round" as CanvasLineJoin,
      tension: 0, // Changed from 0.4 to 0 for straight lines
      pointHoverBackgroundColor: dataset.borderColor,
      pointHoverBorderColor: "#FFFFFF",
    })),
  };

  return <Line options={options} data={chartData} />;
};

export default LineChart;
