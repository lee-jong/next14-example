"use client";
import { memo, useState } from "react";
import Checkbox from "@/components/Checkbox";
import MenuIcon from "public/icons/menu";
import { useTodoDelete } from "@/quires/useTodoQuery";
import useTodoStore from "@/store/useTodoStore";

interface Props extends Item {
  idx: number;
  className: string;
}

const Item = ({ title, className, idx }: Props) => {
  const [drop, setDrop] = useState(false);
  const [checked, setChecked] = useState(false);
  const { mutateAsync } = useTodoDelete();
  const { todoUpdate } = useTodoStore();

  const handleChange = (val: boolean) => {
    setChecked(val);
    todoUpdate(val);
  };

  const deleteTodo = () => {
    mutateAsync({ idx, title });
    setDrop(false);
  };

  return (
    <div className="flex justify-between">
      <div
        className={`text-white text-lg flex gap-[20px] items-center ${className} ${
          checked && "line-through"
        }`}
      >
        <Checkbox handleChange={handleChange} />
        <div className="font-semibold">{++idx} .</div>
        <div className="font-semibold">{title}</div>
      </div>
      {/* Drop Down */}
      <div className="relative">
        <button
          onClick={() => setDrop(!drop)}
          className="inline-block text-gray-400 hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2"
          type="button"
        >
          <MenuIcon />
        </button>
        <div
          id="dropdown"
          className={`absolute mt-[10px] right-[15px] w-[150px] z-10 text-base bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${
            !drop && "hidden list-none"
          }`}
        >
          <ul className="p-2">
            <li onClick={deleteTodo}>
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                삭제
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
