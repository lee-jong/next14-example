"use client";
import { useState, Suspense } from "react";
import List from "./list";
import Loading from "@/components/Progress";
import { useTodoMutation } from "@/quires/useTodoQuery";
import Card from "@/components/Card/layout";
import Popup from "@/components/Popup/todo";
import DonutChart from "@/components/Chart/donut";
import useTodoStore from "@/store/useTodoStore";
import Button from "@/components/Button";

const Todo = () => {
  const { mutateAsync } = useTodoMutation();
  const [popup, setPopupStatus] = useState(false);
  const { todo } = useTodoStore();
  // 나중에 팝업은 글로벌하게 관리 - Store 추가하면서 수정
  const handlePopup = () => {
    setPopupStatus(!popup);
  };

  const handleConfirm = (data: string) => {
    const req = { title: data };
    mutateAsync(req);
    handlePopup();
  };

  return (
    <>
      <div className="mx-[30px]">
        <div className="flex justify-center items-center">
          <div className="text-[40px] font-bold">LOGO</div>
        </div>
        <div className="flex justify-end item-center">
          <Button onClick={handlePopup} text="작성하기" />
        </div>
        <div className="mt-[30px] grid grid-cols-auto gap-[30px]">
          <Card>
            <Suspense fallback={<Loading />}>
              <List />
            </Suspense>
          </Card>
          <Card>
            <div className="font-bold text-2xl">달성률</div>
            <DonutChart {...todo} />
          </Card>
        </div>
      </div>
      {/*  추후에 store 에 해당 내용 셋팅 */}
      {popup && <Popup onConfirm={handleConfirm} onCancel={handlePopup} />}
    </>
  );
};

export default Todo;
