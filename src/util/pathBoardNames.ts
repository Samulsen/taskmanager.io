import { doc } from "firebase/firestore";
import { db } from "../firebase";

const pathBoardNames = function (uid: string) {
  return doc(db, `MainUserDataPool_${uid}`, "UserBoards");
};

export default pathBoardNames;
