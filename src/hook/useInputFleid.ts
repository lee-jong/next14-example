import { useReducer } from "react";

interface State {
  text: string;
}

const reducer = (state: State, action: any) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

export default function useCheckboxHook(
  initialForm: State,
  handleChange?: (val: string) => void
) {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = (e: any) => {
    dispatch(e.target);
    if (handleChange) handleChange(e.target.value);
  };

  return { text: state.text, onChange };
}
