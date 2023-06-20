//---------IMPORTS------------\

//__i-libraries______
import { Dispatch, FC, SetStateAction, MouseEvent } from "react";
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
    handleDeletionRequest(event: MouseEvent) {
      const target = (event.target as HTMLElement).id;
      if (target === "deleteBody" || target === "deleteBinIcon") {
        Logic.Data.initDeletion()
          .then(Logic.Data.deleteSelection.bind(Logic.Data))
          .then(Logic.Data.endDeletionRequest.bind(Logic.Data));
      }
    },

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
    <div
      id="deleteBody"
      className={classes.body}
      onClick={Logic.handleDeletionRequest}
    >
      <img id="deleteBinIcon" src={deleteIcon} alt="deleteIconItemControl" />
      Delete
    </div>
  );
};

//---------EXPORTS------------\

export default TargetDelete;
