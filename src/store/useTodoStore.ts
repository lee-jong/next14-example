import { create } from "zustand";

export interface TodoStore {
  todo: {
    total: number;
    success: number;
  };
  fetchTodo: (total: number) => void;
  todoUpdate: (success: boolean) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
  todo: { total: 0, success: 0 },
  fetchTodo: (total: number) => {
    set((state: TodoStore) => ({
      ...state,
      todo: { ...state.todo, total },
    }));
  },
  todoUpdate: (success: boolean) => {
    if (success) {
      set((state: TodoStore) => ({
        ...state,
        todo: { ...state.todo, success: state.todo.success + 1 },
      }));
    } else {
      set((state: TodoStore) => ({
        ...state,
        todo: { ...state.todo, success: state.todo.success - 1 },
      }));
    }
  },
}));

export default useTodoStore;
