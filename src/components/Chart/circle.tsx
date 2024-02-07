"use client";
import { memo } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

interface Props {
  total: number;
  success: number;
}
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const CircleChart = ({ total, success }: Props) => {
  const rate = Math.ceil((success / total) * 100);
  const options: ApexOptions = {
    labels: ["달성률"],
    colors: [],
    plotOptions: {
      radialBar: {
        dataLabels: {
          value: {
            color: "#ffffff",
          },
        },
        hollow: {
          size: "70%",
        },
      },
    },
  };
  const series = [rate];

  return (
    <>
      <ApexChart
        className="text-white"
        type="radialBar"
        options={options}
        series={series}
        height={"300px"}
        width={"250px"}
      />
    </>
  );
};

export default memo(CircleChart);
