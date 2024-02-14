"use client";
import { memo } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card/layout";
import Circle from "@/components/Chart/circle";

interface Props extends RoomInfo {}

const Personal = ({ total }: Props) => {
  const onClick = () => {};
  return (
    <Card height="400px">
      <div>개인 달성 </div>
      <div className="w-6/12 h-6/12">
        <Circle total={total} success={10} />
      </div>
      <div className="absolute right-[30px] bottom-[30px]">
        <Button onClick={onClick} text="오늘의 할당량 달성!" />
      </div>
    </Card>
  );
};

export default memo(Personal);
