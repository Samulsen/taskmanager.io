//---------IMPORTS------------\

import classes from "./_EditStatus.module.scss";
import { FC, Dispatch, SetStateAction, MouseEvent } from "react";
import useClickOutside from "../../../../../../hooks/useClickOutside";
import { itemOrigin } from "../../ItemBase";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../../firebase";
import { AuthContext } from "../../../../../../context/AuthContext";

//----------PRE---------------\

//__p-types_________

interface props {
  displayValue: string;
  itemOrigin: itemOrigin;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}
//---------COMPONENT----------\

const EditStatus: FC<props> = function ({
  displayValue,
  itemOrigin,
  setEditMode,
}) {
  //__c-hooks________

  const uid = AuthContext()!.userObject!.uid;

  //__c-logic________

  const Logic = {
    UI: {
      Edit: {
        disable() {
          setEditMode(false);
        },
      },
    },
    Data: {
      applyLabel(event: MouseEvent<HTMLDivElement>) {
        //__NOTE: Subject to rewrite!
        const targetOrigin = (event.target as any).innerHTML;
        const itemDocRef = doc(
          db,
          `MainUserDataPool_${uid}`,
          "UserBoards",
          itemOrigin.board,
          itemOrigin.id
        );
        if (targetOrigin === "") {
          const updatedData = {
            status: "none",
          };
          updateDoc(itemDocRef, updatedData).then(Logic.UI.Edit.disable);
        }
        if (targetOrigin === "Done!") {
          const updatedData = {
            status: "done",
          };
          updateDoc(itemDocRef, updatedData).then(Logic.UI.Edit.disable);
        }
        if (targetOrigin === "In Progress!") {
          const updatedData = {
            status: "progress",
          };
          updateDoc(itemDocRef, updatedData).then(Logic.UI.Edit.disable);
        }
        if (targetOrigin === "Untouched!") {
          const updatedData = {
            status: "untouched",
          };
          updateDoc(itemDocRef, updatedData).then(Logic.UI.Edit.disable);
        }
      },
    },
  };

  //__c-structure____

  return (
    <div
      className={classes.body}
      onClick={Logic.Data.applyLabel}
      ref={useClickOutside(setEditMode)}
    >
      <div className={classes.pointer}></div>
      <div className={classes.default}></div>
      <div className={classes.done}>Done!</div>
      <div className={classes.progress}>In Progress!</div>
      <div className={classes.untouched}>Untouched!</div>
    </div>
  );
};

//---------EXPORTS------------\
export default EditStatus;
