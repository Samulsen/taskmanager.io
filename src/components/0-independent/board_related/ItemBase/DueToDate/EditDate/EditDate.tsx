//---------IMPORTS------------\
//__i-libraries______
import { doc, updateDoc } from "firebase/firestore";
import { FC, Dispatch, SetStateAction, ChangeEvent } from "react";
import { db } from "../../../../../../firebase";
//__i-components_____
import useClickOutside from "../../../../../../hooks/useClickOutside";
import { itemOrigin } from "../../ItemBase";
import classes from "./_EditDate.module.scss";
import { AuthContext } from "../../../../../../context/AuthContext";
import { ItemControlContext } from "../../../../../../context/ItemControlContext";

//----------PRE---------------\

//__p-types_________

interface props {
  currentDate: string;
  itemOrigin: itemOrigin;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

//---------COMPONENT----------\

const EditDate: FC<props> = function ({
  setEditMode,
  itemOrigin,
  currentDate,
}) {
  //__c-hooks________

  const uid = AuthContext()!.userObject!.uid;
  const { itemSelection } = ItemControlContext()!;

  //__c-logic________

  const Logic = {
    UI: {
      disableEditMode() {
        setEditMode(false);
      },
    },
    Data: {
      createForeignDocItemRef(itemOrigin: itemOrigin) {
        return doc(
          db,
          `MainUserDataPool_${uid}`,
          "UserBoards",
          itemOrigin.board,
          itemOrigin.id
        );
      },
      postSingleUpdate(
        itemOrigin: itemOrigin,
        updatedData: { due_to_date: string }
      ) {
        const foreignRef = this.createForeignDocItemRef(itemOrigin);
        return updateDoc(foreignRef, updatedData);
      },
      decideUpdateMode(
        mulSelectionState: boolean,
        updatedData: { due_to_date: string }
      ) {
        if (mulSelectionState) {
          itemSelection.list.forEach((sinItem) => {
            this.postSingleUpdate(sinItem, updatedData).then(() => {
              if (sinItem.id === itemOrigin.id) Logic.UI.disableEditMode();
            });
          });
        } else {
          this.postSingleUpdate(itemOrigin, updatedData).then(
            Logic.UI.disableEditMode
          );
        }
      },
      handleChange(event: ChangeEvent<HTMLInputElement>) {
        if (event.currentTarget === event.target) {
          const requestedValue = event.currentTarget.value;
          const itemIdArr = itemSelection.list.map((item) => item.id);
          const mulSelectionState = itemIdArr.includes(itemOrigin.id)
            ? true
            : false;

          const updatedData = {
            due_to_date: requestedValue === "" ? "none" : requestedValue,
          };

          this.decideUpdateMode(mulSelectionState, updatedData);
        }
      },
    },
  };

  //__c-structure____

  return (
    <div className={classes.body} ref={useClickOutside(setEditMode)}>
      <input
        autoFocus
        type="date"
        name="dateInputEditor"
        value={currentDate}
        onChange={Logic.Data.handleChange.bind(Logic.Data)}
      />
    </div>
  );
};

//---------EXPORTS------------\
export default EditDate;
