"use client";
import { useState, useEffect } from "react";

interface State {
  value: string;
}

interface Props {
  type?: "text" | "password" | undefined;
  onChange: (val: string) => void;
  placeholder?: string;
  onBlur?: (val: string) => void;
}

const Input = ({ onChange, placeholder, type = "text", onBlur }: Props) => {
  const [state, dispatch] = useState("");
  useEffect(() => {
    onChange(state);
  }, [state]);

  const onChangeInput = (e: any) => {
    dispatch(e.target.value);
  };

  return (
    <input
      name="value"
      type={type}
      className="border border-gray-300 text-gray-900 text-1xl text-white rounded-lg w-full p-3 bg-gray-700 border-gray-600 placeholder-gray-400 focus:border-blue-500"
      placeholder={placeholder}
      required
      onChange={onChangeInput}
      onBlur={() => onBlur && onBlur(state)}
    />
  );
};

export default Input;
