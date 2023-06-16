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

  //__c-logic________

  const Logic = {
    UI: {
      disableEditMode() {
        setEditMode(false);
      },
    },
    Data: {
      handleChange(event: ChangeEvent<HTMLInputElement>) {
        if (event.currentTarget === event.target) {
          const requestedValue = event.currentTarget.value;
          const itemDocRef = doc(
            db,
            `MainUserDataPool_${uid}`,
            "UserBoards",
            itemOrigin.board,
            itemOrigin.id
          );
          const updatedData = {
            due_to_date: requestedValue === "" ? "none" : requestedValue,
          };
          updateDoc(itemDocRef, updatedData).then(Logic.UI.disableEditMode);
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
        onChange={Logic.Data.handleChange}
      />
    </div>
  );
};

//---------EXPORTS------------\
export default EditDate;
