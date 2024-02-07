interface Item {
  idx?: number;
  title?: string | number;
}

interface RoomInfo {
  title: string;
  total: number;
  users: Array<{ name: string; success: number }>;
}
