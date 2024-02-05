import { useReducer } from "react";

interface State {
  checked: boolean;
}

const reducer = (state: State, action: any) => {
  return {
    ...state,
    [action.name]: action.checked,
  };
};

export default function useCheckboxHook(
  initialForm: State,
  handleChange?: (val: boolean) => void
) {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = (e: any) => {
    dispatch(e.target);
    if (handleChange) handleChange(e.target.checked);
  };

  return { checked: state.checked, onChange };
}
