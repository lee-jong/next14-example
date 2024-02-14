import { memo, useEffect } from "react";
import { useReducer } from "react";

interface State {
  value: string | number;
}

const reducer = (state: State, action: any) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

interface Props {
  items: Array<{ name: string; value: string }>;
  onChange: (val: string) => void;
}

const Radio = ({ items }: Props) => {
  const [state, dispatch] = useReducer(reducer, { value: "" });

  const onChange = (e: any) => {
    dispatch(e.target);
    onChange(state.value);
  };

  return (
    <div className="flex gap-[20px] items-center justify-center">
      {items.map((item) => (
        <div className="flex gap-[10px]">
          <input
            type="radio"
            name="room"
            value={item.value}
            onChange={dispatch}
          />
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default memo(Radio);
