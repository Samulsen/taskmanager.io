//---------IMPORTS------------\

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../../firebase";
import classes from "./_Total.module.scss";
import { QuerySnapshot, DocumentData } from "firebase/firestore";

//__i-context________

import { BoardContext } from "../../../../../context/BoardContext";
import { AuthContext } from "../../../../../context/AuthContext";
import { BoardlistContext } from "../../../../../context/BoardlistContext";

//__i-components_____

import HeadBase from "../../../../0-independent/board_related/HeadBase/HeadBase";
import ItemBase from "../../../../0-independent/board_related/ItemBase/ItemBase";
import FootBase from "../../../../0-independent/board_related/FootBase/FootBase";
import { CompositItemData, RawItemFields } from "../../../../../types/types";
import { useEffect } from "react";

//----------PRE---------------\

//__p-types_________

type boardItemsSnapshotArray = QuerySnapshot<DocumentData>[];

//---------COMPONENT----------\

const Total = function () {
  //__c-hooks________

  const { boardNames } = BoardlistContext()!;
  const { rawQueryItems } = BoardContext()!;
  const uid = AuthContext()!.userObject?.uid;

  //__c-logic________

  const Logic = {
    UI: {},
    Data: {
      createSingleBoardSnapshot(boardId: string) {
        const q = query(
          collection(db, `MainUserDataPool_${uid}`, "UserBoards", `${boardId}`),
          where("type", "==", "item")
        );
        return getDocs(q);
      },
      initializePromiseAll() {
        return Promise.all(
          boardNames.map((board) => {
            return this.createSingleBoardSnapshot(board[0]);
          })
        ).then((snapArray) => {
          return Promise.resolve(snapArray);
        });
      },
      convertAllItems(rawSnapshotArray: boardItemsSnapshotArray) {
        const unpackedAndRepackedArray = [] as CompositItemData[];

        rawSnapshotArray.forEach((singleSnapCollection) => {
          singleSnapCollection.forEach((doc) => {
            const compositItem: CompositItemData = {
              id: doc.id,
              ...(doc.data() as RawItemFields),
            };
            unpackedAndRepackedArray.push(compositItem);
          });
        });
        return Promise.resolve(unpackedAndRepackedArray);
      },
      mergeToRaw(allItemsArray: CompositItemData[]) {
        rawQueryItems.setData(allItemsArray);
      },
    },
  };

  //__c-effects______

  useEffect(() => {
    Logic.Data.initializePromiseAll
      .bind(Logic.Data)()
      .then(Logic.Data.convertAllItems.bind(Logic.Data))
      .then(Logic.Data.mergeToRaw.bind(Logic.Data));
  }, []);

  //__c-structure____
  return (
    <div className={classes.body}>
      <HeadBase type="total" />
      <FootBase type="total" />
    </div>
  );
};

//---------EXPORTS------------\

export default Total;
