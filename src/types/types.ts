//---------IMPORTS------------\

import { Dispatch, SetStateAction } from "react";

//---------EXPORTS------------\

//__NOTE: Registerform
export type input = boolean | string;
export type nameValidator = Dispatch<SetStateAction<input>>;

//__NOTE: Board Data

export interface RawItemFields {
  type: string;
  timestamp: any | { seconds: number; nanoseconds: number };
  board_origin: string | undefined;
  due_to_date: number | string;
  taskname: string;
  status: string;
  priority: number;
  comment: string;
}

export interface CompositItemData {
  id: string;
  type: string;
  timestamp: any | { seconds: number; nanoseconds: number };
  board_origin: string | undefined;
  due_to_date: number | string;
  taskname: string;
  status: string;
  priority: number;
  comment: string;
}
