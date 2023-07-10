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
import { ItemControlContext } from "../../../../../../context/ItemControlContext";

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
  const { itemSelection, closingMode } = ItemControlContext()!;

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
      LocalDocItemRef: doc(
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
        delete(ref: any) {
          deleteDoc(ref);
        },
      },
      createForeignDocItemRef(itemOrigin: itemOrigin) {
        return doc(
          db,
          `MainUserDataPool_${uid}`,
          "UserBoards",
          itemOrigin.board,
          itemOrigin.id
        );
      },
      decideUpdateMode(
        mulSelectionState: boolean,
        updatedData: { status: string }
      ) {
        if (mulSelectionState) {
          itemSelection.list.forEach((sinItem) => {
            this.postSingleUpdate(sinItem, updatedData).then(() => {
              if (sinItem.id === itemOrigin.id) Logic.UI.Edit.disable();
            });
          });
        } else {
          this.postSingleUpdate(itemOrigin, updatedData).then(
            Logic.UI.Edit.disable
          );
        }
      },
      postSingleUpdate(
        itemOrigin: itemOrigin,
        updatedData: { status: string }
      ) {
        const foreignRef = this.createForeignDocItemRef(itemOrigin);
        return updateDoc(foreignRef, updatedData);
      },
      applyLabel(event: MouseEvent<HTMLDivElement>) {
        //__NOTE: Subject to rewrite!
        const targetOrigin = (event.target as any).innerHTML;
        const itemIdArr = itemSelection.list.map((item) => item.id);
        const mulSelectionState = itemIdArr.includes(itemOrigin.id)
          ? true
          : false;
        if (targetOrigin === "") {
          const updatedData = {
            status: "none",
          };
          this.decideUpdateMode(mulSelectionState, updatedData);
        }
        if (targetOrigin === "Done!") {
          const updatedData = {
            status: "done",
          };
          if (autoDeleteOnDone) {
            if (mulSelectionState) {
              itemSelection.list.forEach((sinItem) => {
                const foreignRef = this.createForeignDocItemRef(sinItem);
                this.postSingleUpdate(sinItem, updatedData)
                  .then(() => {
                    if (itemOrigin.id === sinItem.id) Logic.UI.Edit.disable();
                  })
                  .then(Logic.Data.AutoDelete.delay)
                  .then(() => {
                    Logic.Data.AutoDelete.delete(foreignRef);
                  });
                itemSelection.update([]);
                closingMode.setState(true);
              });
            } else {
              this.postSingleUpdate(itemOrigin, updatedData)
                .then(Logic.UI.Edit.disable)
                .then(Logic.Data.AutoDelete.delay)
                .then(Logic.Data.AutoDelete.delete);
            }
          } else {
            this.decideUpdateMode(mulSelectionState, updatedData);
          }
        }
        if (targetOrigin === "In Progress!") {
          const updatedData = {
            status: "progress",
          };
          this.decideUpdateMode(mulSelectionState, updatedData);
        }
        if (targetOrigin === "Untouched!") {
          const updatedData = {
            status: "untouched",
          };
          this.decideUpdateMode(mulSelectionState, updatedData);
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
