"use client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Props {
  total: number;
  success: number;
}

const DonutChart = ({ total, success }: Props) => {
  const options: ApexOptions = {
    series: [success, total - success],
    labels: ["달성", "미달성"],
    colors: ["#030712", "#9ca3af"],
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "20px",
      },
      fillSeriesColor: false,
      hideEmptySeries: true,
    },
    markers: {
      strokeOpacity: [0, 1],
    },
    responsive: [
      {
        breakpoint: 450,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <>
      <ApexChart
        type="donut"
        options={options}
        series={options.series}
        width="100%"
        height="100%"
      />
    </>
  );
};

export default DonutChart;
