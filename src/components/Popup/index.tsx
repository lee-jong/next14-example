import { memo } from "react";
import useInputFieid from "@/hook/useInputFleid";
import PopupLayout from "./layout";

interface Props {
  onConfirm?: (data: string) => void;
  onCancel?: () => void;
}
const Popup = (props: Props) => {
  const { text, onChange } = useInputFieid({ text: "" });
  const { onConfirm, onCancel } = props;

  return (
    <PopupLayout>
      <div className="relative fixed h-[300px] top-[30%] sm:top-[calc(100vh-300px)] max-w-xl row-start-2 w-full min-w-0  p-[--gutter] shadow-lg ring-1 ring-zinc-950/10 [--gutter:theme(spacing.8)] mb-auto rounded-2xl  sm:rounded-t-3xl  ring-white/10 forced-colors:outline bg-zinc-900">
        <div className="text-[24px] font-semibold text-white">등록 하기</div>
        <div className="flex items-center text-white mt-[20px] gap-[20px]">
          <div className="w-[40px] text-[18px] font-semibold">제목 </div>
          <input
            name="text"
            type="text"
            className="dark:text-white border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-3 bg-gray-700 border-gray-600 placeholder-gray-400 focus:border-blue-500"
            placeholder="오늘의 할 일을 적어주세요."
            required
            onChange={onChange}
          />
        </div>
        <div className="absolute bottom-[35px] right-[35px] flex gap-[20px] text-[14px]">
          <div
            onClick={() => onConfirm && onConfirm(text)}
            className="bg-zinc-600 py-[10px] px-[20px] rounded font-semibold text-white"
          >
            확인
          </div>
          <div
            onClick={onCancel}
            className="bg-zinc-600 py-[10px] px-[20px] rounded font-semibold text-white"
          >
            취소
          </div>
        </div>
      </div>
    </PopupLayout>
  );
};

export default memo(Popup);
