"use client";
import { useRouter } from "next/navigation";

const Card = ({
  hover,
  path,
  children,
}: {
  hover?: boolean;
  path?: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const handleRouter = () => {
    if (!path) return;
    router.push(path);
  };

  return (
    <div
      onClick={() => handleRouter()}
      className={`w-full h-full gird rounded-xl  dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] p-[30px] ${
        hover && "hover:bg-gray-700"
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
