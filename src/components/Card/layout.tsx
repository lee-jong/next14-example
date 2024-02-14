"use client";
import { useRouter } from "next/navigation";

const Card = ({
  hover,
  path,
  children,
  height = "full",
}: {
  hover?: boolean;
  path?: string;
  children: React.ReactNode;
  height?: string | number;
}) => {
  const router = useRouter();
  const handleRouter = () => {
    if (!path) return;
    router.push(path);
  };
  return (
    <div
      onClick={() => handleRouter()}
      className={`relative w-full h-[${height}] gird rounded-xl  bg-zinc-900 shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] p-[30px] ${
        hover && "hover:bg-gray-700"
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
