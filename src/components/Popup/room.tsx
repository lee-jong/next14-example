"use client";
import { memo, useRef } from "react";
import Layout from "./layout";
import Button from "@/components/Button";
import InputFleid from "@/components/Input";
import RadioBtn from "../Input/Radio";

const Room = () => {
  const onConfirm = () => {};
  const onCancel = () => {};

  const onChangeInput = (val: string) => {
    console.log("#", val);
  };

  const radioBtns = useRef<Array<{ name: string; value: string }>>([
    { name: "공통 과제", value: "public" },
    { name: "개인 과제", value: "personal" },
  ]);

  return (
    <Layout>
      <div className="relative fixed h-[300px] top-[30%] sm:top-[calc(100vh-300px)] max-w-xl row-start-2 w-full min-w-0  p-[--gutter] shadow-lg ring-1 ring-zinc-950/10 [--gutter:theme(spacing.8)] mb-auto rounded-2xl  sm:rounded-t-3xl  ring-white/10 forced-colors:outline bg-zinc-900">
        <div>생성하기</div>
        <div className="flex gap-[20px] mt-[20px]">
          <div className="w-[40px]">선택</div>
          <RadioBtn items={radioBtns.current} onChange={onChangeInput} />
        </div>
        <div className="flex gap-[20px] mt-[20px] items-center">
          <div className="w-[40px]">목표</div>
          <InputFleid
            onChange={onChangeInput}
            placeholder="함께 진행할 목표를 입력하여 주세요!"
          />
        </div>
        <div className="absolute right-[30px] bottom-[30px] flex gap-[20px]">
          <Button onClick={onConfirm} text="확인" />
          <Button onClick={onCancel} text="취소" />
        </div>
      </div>
    </Layout>
  );
};
export default memo(Room);
