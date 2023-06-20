//---------IMPORTS------------\

//__i-libraries______
import { Dispatch, FC, SetStateAction } from "react";
//__i-style__________
import classes from "./_TargetDelete.module.scss";
import deleteIcon from "./delete.svg";
//__i-context________
import { ItemControlContext } from "../../../../../context/ItemControlContext";
import { AuthContext } from "../../../../../context/AuthContext";
import { itemOrigin } from "../../../../0-independent/board_related/ItemBase/ItemBase";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../../../firebase";
//__i-components_____

//----------PRE---------------\
//__p-types_________

interface props {
  mergeRequest: {
    current: string;
    setCurrent: Dispatch<SetStateAction<string>>;
  };
}

//---------COMPONENT----------\

const TargetDelete: FC<props> = function ({ mergeRequest }) {
  //__c-hooks________

  const { itemSelection, closingMode } = ItemControlContext()!;
  const { uid } = AuthContext()!.userObject!;

  //__c-logic________

  const Logic = {
    UI: {},

    Data: {
      initDeletion() {
        mergeRequest.setCurrent("deletionRequest");
        return Promise.resolve();
      },
      deleteSingleDoc(itemOrigin: itemOrigin) {
        const docRef = doc(
          db,
          `MainUserDataPool_${uid}`,
          "UserBoards",
          itemOrigin.board,
          itemOrigin.id
        );
        return deleteDoc(docRef);
      },
      deleteSelection() {
        return Promise.all(
          itemSelection.list.map((itemOrigin) => {
            return this.deleteSingleDoc(itemOrigin);
          })
        );
      },
      endDeletionRequest() {
        closingMode.setState(true);
        itemSelection.update([]);
        mergeRequest.setCurrent("none");
      },
    },
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      <img src={deleteIcon} alt="deleteIconItemControl" />
      Delete
    </div>
  );
};

//---------EXPORTS------------\

export default TargetDelete;
