import { memo } from "react";
import Card from "@/components/Card/layout";
import LineChart from "@/components/Chart/bar";

interface Props extends RoomInfo {}

const right = ({ users }: Props) => {
  const chartData = users.map((user) => {
    return {
      x: user.name,
      y: user.success,
    };
  });

  return (
    <Card>
      <div>공통 목표 달성률</div>
      <LineChart data={chartData} />
    </Card>
  );
};

export default memo(right);
