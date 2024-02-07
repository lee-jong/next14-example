import { memo } from "react";

interface Props {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: Props) => {
  return (
    <div
      className="bg-zinc-600 rounded p-[10px] text-[18px] cursor-pointer "
      onClick={onClick}
    >
      <div className="font-semibold">{text}</div>
    </div>
  );
};

export default memo(Button);
