import { memo } from "react";
import PopupLayout from "./layout";
import useDisplayStore from "@/store/useDisplayStore";
import Button from "@/components/Button";
const Popup = () => {
  const { popup, fetchPopup } = useDisplayStore();
  const { title, desc, confirm, callback } = popup;

  const initPopup = () => {
    fetchPopup({ state: false, title: "", desc: "", callback: () => {} });
  };

  const onConfirm = () => {
    if (callback) callback();
    initPopup();
  };

  const onCancel = () => {
    initPopup();
  };
  return (
    <PopupLayout>
      <div className="relative fixed h-[300px] top-[30%] sm:top-[calc(100vh-300px)] max-w-xl row-start-2 w-full min-w-0  p-[--gutter] shadow-lg ring-1 ring-zinc-950/10 [--gutter:theme(spacing.8)] mb-auto rounded-2xl  sm:rounded-t-3xl  ring-white/10 forced-colors:outline bg-zinc-900">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-xl mt-[20px]">{desc}</div>
        <div className="absolute bottom-[30px] right-[30px]">
          <Button text="확인" onClick={onConfirm} />
          {confirm && <Button text="취소" onClick={onCancel} />}
        </div>
      </div>
    </PopupLayout>
  );
};

export default memo(Popup);
