"use client";
import { memo, useEffect } from "react";
import { useTodoSuspenseQuery } from "@/quires/useTodoQuery";
import useTodoStore from "@/store/useTodoStore";
import Item from "./item";

const list = () => {
  const { data } = useTodoSuspenseQuery();
  const { fetchTodo } = useTodoStore();

  useEffect(() => {
    fetchTodo(data);
  }, [data]);

  return (
    <div className="w-full">
      <div className="font-bold text-2xl">오늘의 계획!</div>
      <div className="flex flex-col gap-[20px] mt-[50px] h-[400px] overflow-y-scroll scroll_list">
        {data &&
          data.map((item: Item, idx: number) => (
            <Item
              {...item}
              idx={idx}
              key={`todo_item_${idx}`}
              className={`${idx && "mt-[10px]"}`}
            />
          ))}
      </div>
    </div>
  );
};

export default memo(list);
