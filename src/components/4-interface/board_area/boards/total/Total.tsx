//---------IMPORTS------------\

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../../firebase";
import classes from "./_Total.module.scss";

//__i-context________

import { BoardContext } from "../../../../../context/BoardContext";
import { AuthContext } from "../../../../../context/AuthContext";
import { BoardlistContext } from "../../../../../context/BoardlistContext";

//__i-components_____

import HeadBase from "../../../../0-independent/board_related/HeadBase/HeadBase";
import ItemBase from "../../../../0-independent/board_related/ItemBase/ItemBase";
import FootBase from "../../../../0-independent/board_related/FootBase/FootBase";

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
        return getDocs(
          collection(db, `MainUserDataPool_${uid}`, "UserBoards", `${boardId}`)
        );
      },

      initializePromiseAll() {
        return Promise.all(
          boardNames.map((board) => {
            return this.createSingleBoardSnapshot(board[0]);
          })
        );
      },
    },
  };

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
