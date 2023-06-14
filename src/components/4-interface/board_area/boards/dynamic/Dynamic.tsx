//---------IMPORTS------------\

import { onSnapshot, collection, query } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import classes from "./_Dynamic.module.scss";

//__i-context________
import { BoardContext } from "../../../../../context/BoardContext";
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
      collection(db, `MainUserDataPool_${uid}`, "UserBoards", `${boardID}`)
    );
    const unsub = onSnapshot(q, (itemsSnapshot) => {
      if (!itemsSnapshot.metadata.hasPendingWrites) {
        itemsSnapshot.forEach((item) => {
          console.log(item.id, item.data());
        });
      }
    });

    return unsub;
  }, []);

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
