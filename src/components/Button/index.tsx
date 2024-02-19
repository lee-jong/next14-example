import { memo } from "react";

interface Props {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: Props) => {
  return (
    <div
      className="bg-zinc-600 rounded p-[10px] text-[18px] cursor-pointer min-w-[80px] w-full h-full flex center"
      onClick={onClick}
    >
      <div className="font-semibold">{text}</div>
    </div>
  );
};

export default memo(Button);
