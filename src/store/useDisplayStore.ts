import { create } from "zustand";

interface DisplayStore {
  // Popup
  popup: Popup;
  fetchPopup: (popup: Popup) => void;
  // Progress
  progress: Progress;
  fetchProgress: (data: Progress) => void;
}

const useTodoStore = create<DisplayStore>((set) => ({
  // Popup
  popup: {
    state: false,
    title: "",
    desc: "",
    confirm: false,
    callback: () => {},
  },
  fetchPopup: (popup: Popup) => {
    set((state: DisplayStore) => ({
      ...state,
      popup: { ...state.popup, ...popup },
    }));
  },
  progress: {
    state: false,
    text: "",
  },
  fetchProgress: (data: Progress) => {
    if (!data.state) data.text = "";
    set((state: DisplayStore) => ({
      ...state,
      progress: { ...state.progress, ...data },
    }));
  },
}));

export default useTodoStore;
