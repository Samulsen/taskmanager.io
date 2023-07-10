//---------IMPORTS------------\

import { onSnapshot, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { db } from "../../../../../firebase";

//__i-context________
import { BoardContext } from "../../../../../context/BoardContext";
import { AuthContext } from "../../../../../context/AuthContext";
import { ActiveDataContext } from "../../../../../context/ActiveDataContext";

//__i-helper_________
import classes from "./_Dynamic.module.scss";
import { CompositItemData, RawItemFields } from "../../../../../types/types";

//__i-components_____
import HeadBase from "../../../../0-independent/board_related/HeadBase/HeadBase";
import ItemBase from "../../../../0-independent/board_related/ItemBase/ItemBase";
import FootBase from "../../../../0-independent/board_related/FootBase/FootBase";

//---------COMPONENT----------\

const Dynamic = function () {
  //__c-hooks________

  const { boardID } = useParams();
  const { boardControl, rawQueryItems } = BoardContext()!;
  const uid = AuthContext()?.userObject?.uid;
  const { clientAffectedData } = ActiveDataContext()!;

  //__c-logic________

  const Logic = {
    UI: {
      renderItems() {
        if (
          clientAffectedData[0]?.type === "coldDataItem" ||
          clientAffectedData.length === 0
        ) {
          return <></>;
        } else {
          return clientAffectedData.map((data) => {
            return <ItemBase base="dynamic" key={data.id} data={data} />;
          });
        }
      },
    },
  };

  //__c-effects______

  useEffect(() => {
    boardControl.setState(boardID as string);
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, `MainUserDataPool_${uid}`, "UserBoards", `${boardID}`),
      where("type", "==", "item")
    );
    const unsub = onSnapshot(
      q,
      //__NOTE: temporarily on true, possible later false for more specific rerenders
      { includeMetadataChanges: true },
      (itemsSnapshot) => {
        if (!itemsSnapshot.metadata.hasPendingWrites) {
          const tempQueryArray = [] as CompositItemData[];
          itemsSnapshot.forEach((item) => {
            tempQueryArray.push({
              id: item.id,
              ...(item.data() as RawItemFields),
            });
          });
          rawQueryItems.setData(tempQueryArray);
        }
      }
    );

    return unsub;
    //__NOTE: rerenders on new board click, unsubs from old query hook and reinitializes hook for new boardID value
  }, [boardID]);

  //__c-structure____

  return (
    <div className={classes.body}>
      <HeadBase type="dynamic" />
      {Logic.UI.renderItems()}
      <FootBase mode="dynamic" />
    </div>
  );
};

//---------EXPORTS------------\

export default Dynamic;
