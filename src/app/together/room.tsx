"use client";
import { memo } from "react";
import { useRouter } from "next/navigation";

interface Props {
  index: string | number;
  content: string;
  users: string;
}

const Room = ({ index, content, users }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    if (typeof index !== "number") return;
    router.push(`/together/common/${index}`);
  };

  return (
    <div className="flex justify-between py-[20px]" onClick={handleClick}>
      <div className="w-full">{index}</div>
      <div className="w-full">{content}</div>
      <div className="w-full">{users}</div>
    </div>
  );
};

export default memo(Room);
