//---------IMPORTS------------\
import { onSnapshot, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../../../../firebase";
import { AuthContext } from "../../../../../context/AuthContext";
import classes from "./_ViewTitle.module.scss";

//---------COMPONENT----------\

const ViewTitle = function () {
  //__c-hooks________

  const { boardID } = useParams();
  const uid = AuthContext()!.userObject?.uid;
  const [boardName, setBoardName] = useState("...");

  //__c-logic________

  const Logic = {
    setCurrentBoardName(metaDataSnapshot: string) {
      setBoardName(metaDataSnapshot);
    },
  };

  //__c-effects______

  useEffect(() => {
    //__NOTE: If boardID is truthy, it is dynamic
    if (boardID) {
      console.log(boardID);

      const q = query(
        collection(db, `MainUserDataPool_${uid}`, "UserBoards", `${boardID}`),
        where("type", "==", "metadata")
      );
      const unsub = onSnapshot(q, (itemsSnapshot) => {
        itemsSnapshot.forEach((item) => {
          Logic.setCurrentBoardName(
            (item.data() as unknown as { name: string; type: string }).name
          );
        });
      });

      return unsub;
    } else {
      setBoardName("Total");
    }
    //__NOTE: rerenders on new board click, unsubs from old query hook and reinitializes hook for new boardID value
  }, [boardID]);

  //__c-structure____

  return (
    <div className={classes.body}>
      <span>Board - </span>
      <span className={classes.dynamic}>{boardName}</span>
    </div>
  );
};

//---------EXPORTS------------\

export default ViewTitle;
