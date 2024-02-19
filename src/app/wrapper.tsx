"use client";

import { ReactNode } from "react";
import useDisplayStore from "@/store/useDisplayStore";
import Popup from "@/components/Popup";
import Progress from "@/components/Progress";

interface Props {
  children: ReactNode;
}
export default function Wrapper({ children }: Props) {
  const { popup, progress } = useDisplayStore();
  return (
    <>
      {children}
      {popup.state && <Popup />}
      {progress.state && <Progress />}
    </>
  );
}
