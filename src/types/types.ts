//---------IMPORTS------------\

//---------EXPORTS------------\

//__NOTE: Board Data

export interface RawItemFields {
  type: string;
  timestamp: any | { seconds: number; nanoseconds: number };
  board_origin: string;
  due_to_date: string;
  taskname: string;
  status: string;
  priority: number;
  comment: string;
}

export interface CompositItemData {
  id: string;
  type: string;
  timestamp: any | { seconds: number; nanoseconds: number };
  board_origin: string;
  due_to_date: string;
  taskname: string;
  status: string;
  priority: number;
  comment: string;
}
