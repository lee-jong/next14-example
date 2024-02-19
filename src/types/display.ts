interface Popup {
  state: boolean;
  title?: string;
  desc?: string;
  confirm?: boolean;
  callback?: () => void;
}

interface Progress {
  state: boolean;
  text?: string;
}
