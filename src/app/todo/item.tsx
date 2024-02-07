"use client";
import { memo, useState } from "react";
import Checkbox from "@/components/Checkbox";
import MenuIcon from "public/icons/menu";
import { useTodoDelete } from "@/quires/useTodoQuery";
import useTodoStore from "@/store/useTodoStore";
import DropDown from "@/components/DropDown";

interface Props extends Item {
  idx: number;
  className: string;
}

const Item = ({ title, className, idx }: Props) => {
  const [checked, setChecked] = useState(false);
  const { mutateAsync } = useTodoDelete();
  const { todoUpdate } = useTodoStore();

  const handleChange = (val: boolean) => {
    setChecked(val);
    todoUpdate(val);
  };

  const deleteTodo = () => {
    mutateAsync({ idx, title });
  };

  return (
    <div className="flex justify-between">
      <div
        className={`text-lg flex gap-[20px] items-center ${className} ${
          checked && "line-through"
        }`}
      >
        <Checkbox handleChange={handleChange} />
        <div className="font-semibold">
          <span>{++idx} .</span>
          <span className="pl-4">{title}</span>
        </div>
      </div>
      <DropDown onDelete={deleteTodo}>
        <MenuIcon />
      </DropDown>
    </div>
  );
};

export default memo(Item);
