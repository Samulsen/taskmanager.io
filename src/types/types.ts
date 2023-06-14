//---------IMPORTS------------\

import { FieldValue } from "firebase/firestore";
import { Dispatch, SetStateAction } from "react";

//---------EXPORTS------------\

//__NOTE: Registerform
export type input = boolean | string;
export type nameValidator = Dispatch<SetStateAction<input>>;

//__NOTE: Board Data

export interface itemdata {
  type: string;
  //   created_at_timestamp: { seconds: number; nanoseconds: number };
  timestamp: any;
  board_origin: string | undefined;
  due_to_date: number | string;
  taskname: string;
  status: string;
  priority: number;
  comment: string;
}
