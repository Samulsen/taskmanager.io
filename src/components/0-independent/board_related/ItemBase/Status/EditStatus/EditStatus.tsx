//---------IMPORTS------------\
//__i-libraries______
import { FC, Dispatch, SetStateAction, MouseEvent } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../../firebase";
//__i-style__________
import classes from "./_EditStatus.module.scss";
//__i-helper_________
import useClickOutside from "../../../../../../hooks/useClickOutside";
import { itemOrigin } from "../../ItemBase";
//__i-context________
import { AuthContext } from "../../../../../../context/AuthContext";
import { ConfigContext } from "../../../../../../context/ConfigContext";

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
  const { autoDeleteOnDone } = ConfigContext();

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
      docItemref: doc(
        db,
        `MainUserDataPool_${uid}`,
        "UserBoards",
        itemOrigin.board,
        itemOrigin.id
      ),
      AutoDelete: {
        delay() {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve("");
            }, 500);
          });
        },
        delete() {
          deleteDoc(Logic.Data.docItemref);
        },
      },
      applyLabel(event: MouseEvent<HTMLDivElement>) {
        //__NOTE: Subject to rewrite!
        const targetOrigin = (event.target as any).innerHTML;
        if (targetOrigin === "") {
          const updatedData = {
            status: "none",
          };
          updateDoc(this.docItemref, updatedData).then(Logic.UI.Edit.disable);
        }
        if (targetOrigin === "Done!") {
          const updatedData = {
            status: "done",
          };
          if (autoDeleteOnDone) {
            updateDoc(this.docItemref, updatedData)
              .then(Logic.UI.Edit.disable)
              .then(Logic.Data.AutoDelete.delay)
              .then(Logic.Data.AutoDelete.delete);
          } else {
            updateDoc(this.docItemref, updatedData).then(Logic.UI.Edit.disable);
          }
        }
        if (targetOrigin === "In Progress!") {
          const updatedData = {
            status: "progress",
          };
          updateDoc(this.docItemref, updatedData).then(Logic.UI.Edit.disable);
        }
        if (targetOrigin === "Untouched!") {
          const updatedData = {
            status: "untouched",
          };
          updateDoc(this.docItemref, updatedData).then(Logic.UI.Edit.disable);
        }
      },
    },
  };

  //__c-structure____

  return (
    <div
      className={classes.body}
      onClick={Logic.Data.applyLabel.bind(Logic.Data)}
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
