"use client";
import { useReducer } from "react";

interface State {
  value: string;
}

interface Props {
  onChange: (val: string) => void;
  placeholder?: string;
}

const reducer = (state: State, action: any) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const Input = ({ onChange, placeholder }: Props) => {
  const [state, dispatch] = useReducer(reducer, { value: "" });

  const onChangeInput = (e: any) => {
    dispatch(e.target);
    onChange(state.value);
  };

  return (
    <input
      name="text"
      type="text"
      className="border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-3 bg-gray-700 border-gray-600 placeholder-gray-400 focus:border-blue-500"
      placeholder={placeholder}
      required
      onChange={onChangeInput}
    />
  );
};

export default Input;
