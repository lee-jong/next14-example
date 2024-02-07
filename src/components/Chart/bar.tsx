"use client";
import { memo } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

interface Props {
  data: Array<{ x: string; y: number }>;
}

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = ({ data }: Props) => {
  const options: ApexOptions = {
    colors: ["rgba(0, 143, 251, 0.85)"],
    chart: {
      background: "#18181b",
    },
    theme: {
      mode: "dark",
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };
  const series = [{ data }];

  return (
    <ApexChart
      type="bar"
      options={options}
      series={series}
      height={200}
      width={500}
    />
  );
};

export default memo(BarChart);
