//---------IMPORTS------------\

import classes from "./_EditTask.module.scss";
import useClickOutside from "../../../../../../hooks/useClickOutside";
import { FC, Dispatch, SetStateAction, ChangeEvent, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { AuthContext } from "../../../../../../context/AuthContext";
import { db } from "../../../../../../firebase";
import { itemOrigin } from "../../ItemBase";

//----------PRE---------------\

//__p-types_________

interface props {
  editMode: { set: Dispatch<SetStateAction<boolean>> };
  displayValue: string;
  itemOrigin: itemOrigin;
}

//---------COMPONENT----------\

const EditTask: FC<props> = function ({ editMode, displayValue, itemOrigin }) {
  //__c-hooks________

  const [editedDisplayValue, setEditedDisplayValue] = useState(displayValue);
  const uid = AuthContext()!.userObject!.uid;

  //__c-logic________
  const Logic = {
    UI: {
      disableEdit() {
        editMode.set(false);
      },
      handleEdit(event: ChangeEvent<HTMLInputElement>) {
        if (event.target === event.currentTarget) {
          event.stopPropagation();
          setEditedDisplayValue(event.currentTarget.value);
        }
      },
      handleEnter(event: any) {
        if (event.target === event.currentTarget) {
          if (event.key === "Enter") {
            const itemDocRef = doc(
              db,
              `MainUserDataPool_${uid}`,
              "UserBoards",
              itemOrigin.board,
              itemOrigin.id
            );
            const updatedData = {
              taskname: editedDisplayValue,
            };
            updateDoc(itemDocRef, updatedData).then(Logic.UI.disableEdit);
          }
        }
      },
    },
  };
  //__c-structure____
  return (
    <div className={classes.body} ref={useClickOutside(editMode.set)}>
      <input
        autoFocus
        name="editTaskInput"
        type="text"
        value={editedDisplayValue}
        onChange={Logic.UI.handleEdit}
        onKeyDown={Logic.UI.handleEnter}
      />
    </div>
  );
};

//---------EXPORTS------------\
export default EditTask;
