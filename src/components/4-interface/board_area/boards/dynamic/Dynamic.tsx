//---------IMPORTS------------\

import { onSnapshot, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import classes from "./_Dynamic.module.scss";

//__i-context________
import { BoardContext } from "../../../../../context/BoardContext";
import { ActiveDataContext } from "../../../../../context/ActiveDataContext";
//__i-components_____
import HeadBase from "../../../../0-independent/board_related/HeadBase/HeadBase";
import ItemBase from "../../../../0-independent/board_related/ItemBase/ItemBase";
import FootBase from "../../../../0-independent/board_related/FootBase/FootBase";
import { db } from "../../../../../firebase";
import { AuthContext } from "../../../../../context/AuthContext";

//---------COMPONENT----------\

const Dynamic = function () {
  //__c-hooks________

  const { boardID } = useParams();
  const { boardControl } = BoardContext()!;
  const uid = AuthContext()?.userObject?.uid;

  //__c-logic________

  const Logic = {};

  //__c-effects______

  useEffect(() => {
    boardControl.setState(boardID as string);
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, `MainUserDataPool_${uid}`, "UserBoards", `${boardID}`),
      where("type", "==", "item")
    );
    const unsub = onSnapshot(q, (itemsSnapshot) => {
      if (!itemsSnapshot.metadata.hasPendingWrites) {
        itemsSnapshot.forEach((item) => {
          console.log(item.id, item.data());
        });
      }
    });

    return unsub;
    //__NOTE: rerenders on new board click, unsubs from old query hook and reinitializes hook for new boardID value
  }, [boardID]);

  //__c-structure____

  return (
    <div className={classes.body}>
      <HeadBase type="dynamic" />

      <FootBase type="dynamic" />
    </div>
  );
};

//---------EXPORTS------------\

export default Dynamic;
