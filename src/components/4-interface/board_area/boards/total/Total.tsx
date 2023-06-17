//---------IMPORTS------------\

import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../../../firebase";
import classes from "./_Total.module.scss";
import { QuerySnapshot, DocumentData, Unsubscribe } from "firebase/firestore";

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
import { ActiveDataContext } from "../../../../../context/ActiveDataContext";

//----------PRE---------------\

//__p-types_________

type boardItemsSnapshotArray = QuerySnapshot<DocumentData>[];

//---------COMPONENT----------\

const Total = function () {
  //__c-hooks________

  const uid = AuthContext()!.userObject?.uid;
  const { rawQueryItems } = BoardContext()!;
  const { boardNames, state } = BoardlistContext()!;
  const { clientAffectedData } = ActiveDataContext()!;

  //__c-logic________

  const Logic = {
    UI: {
      renderItems() {
        return clientAffectedData.map((item) => {
          return <ItemBase base="total" key={item.id} data={item} />;
        });
      },
    },
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
    const processedBoards = [] as string[];
    let accumulator = [] as CompositItemData[];
    const unsubFunctionsPool = [] as Unsubscribe[];
    const boardsArr = boardNames.map((board) => {
      return board[0];
    });
    if (state === "warm") {
      boardsArr.forEach((boardID) => {
        const q = query(
          collection(db, `MainUserDataPool_${uid}`, "UserBoards", `${boardID}`),
          where("type", "==", "item")
        );
        unsubFunctionsPool.push(
          onSnapshot(q, { includeMetadataChanges: true }, (itemsSnapshot) => {
            if (!itemsSnapshot.metadata.hasPendingWrites) {
              //__NOTE: Unpack new snapshot and prepare for accumulator check
              const tempQueryArray = [] as CompositItemData[];
              itemsSnapshot.forEach((item) => {
                tempQueryArray.push({
                  id: item.id,
                  ...(item.data() as RawItemFields),
                });
              });

              //__NOTE: Check for duplication
              const hasOldSnapshot = processedBoards.includes(boardID);
              if (hasOldSnapshot) {
                const strippedAccumulator: CompositItemData[] =
                  accumulator.filter(
                    (item) => !(item.board_origin === boardID)
                  );
                accumulator = [...strippedAccumulator, ...tempQueryArray];
                rawQueryItems.setData(accumulator);
              } else {
                processedBoards.push(boardID);
                accumulator = [...accumulator, ...tempQueryArray];
                rawQueryItems.setData(accumulator);
              }
            }
          })
        );
      });
    }

    return () => {
      unsubFunctionsPool.forEach((unsub) => {
        unsub();
      });
    };
  }, [state]);

  // useEffect(() => {
  //   if (state === "warm") {
  //     Logic.Data.initializePromiseAll
  //       .bind(Logic.Data)()
  //       .then(Logic.Data.convertAllItems.bind(Logic.Data))
  //       .then(Logic.Data.mergeToRaw.bind(Logic.Data));
  //   }
  // }, [boardNames]);

  //__c-structure____
  return (
    <div className={classes.body}>
      <HeadBase type="total" />
      {Logic.UI.renderItems()}
      <FootBase type="total" />
    </div>
  );
};

//---------EXPORTS------------\

export default Total;
