import useDisplayStore from "@/store/useDisplayStore";
import Progress from "public/icons/progress";
export default function Loading() {
  const { progress } = useDisplayStore();
  const { text } = progress;
  return (
    <div className="absolute z-50 w-full h-full flex flex-col top-0 bg-zinc-950/70 center">
      <Progress />
      {text && <div className="mt-[20px]">{text}</div>}
    </div>
  );
}
