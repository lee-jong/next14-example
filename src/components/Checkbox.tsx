"use client";
import { memo } from "react";
import useCheckboxHook from "@/hook/useCheckbox";

interface Props {
  handleChange: (val: boolean) => void;
}

const Checkbox = ({ handleChange }: Props) => {
  const { checked, onChange } = useCheckboxHook(
    { checked: false },
    handleChange
  );
  return (
    <>
      <input
        type="checkbox"
        name="checked"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5"
      />
    </>
  );
};

export default memo(Checkbox);
