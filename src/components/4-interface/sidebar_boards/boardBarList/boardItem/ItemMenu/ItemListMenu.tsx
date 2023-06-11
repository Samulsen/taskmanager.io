//---------IMPORTS------------\

import { Dispatch, FC, SetStateAction, useState } from "react";
import classes from "./_ItemListMenu.module.scss";
import deleteIcon from "./svgs/delete.svg";
import renameIcon from "./svgs/rename.svg";
import confirmIcon from "./svgs/confirm.svg";
import abortIcon from "./svgs/abort.svg";
import useClickOutside from "../../../../../../hooks/useClickOutside";
import { doc, updateDoc, deleteField } from "firebase/firestore";
import { db } from "../../../../../../firebase";
import { AuthContext } from "../../../../../../context/AuthContext";

//---------COMPONENT----------\
const ItemListMenu: FC<{
  setMenuState: Dispatch<SetStateAction<boolean>>;
  boardId: string;
  setRenameState: Dispatch<SetStateAction<boolean>>;
}> = function ({ setMenuState, boardId }) {
  const [requestDeletion, setRegquestDeletion] = useState(false);
  const uid = AuthContext()?.userObject?.uid;
  const Logic = {
    UI: {
      requestDeletion() {
        setRegquestDeletion(true);
      },
      finishDeletion() {
        setRegquestDeletion(false);
      },
      evaluateDeletionRequest() {
        if (requestDeletion) {
          return (
            <div className={classes.option}>
              <div
                className={classes.confirm}
                onClick={Logic.Data.confirmDeletion}
              >
                <img src={confirmIcon} alt="confirmDeletion" />
              </div>
              ?
              <div className={classes.abort} onClick={Logic.Data.abortDeletion}>
                <img src={abortIcon} alt="abortDeletion" />
              </div>
            </div>
          );
        } else {
          return (
            <div
              className={`${classes.option} ${classes.delete}`}
              onClick={Logic.UI.requestDeletion}
            >
              <img
                className={classes.icon}
                src={deleteIcon}
                alt="deleteIconOnItem"
              />
              Delete
            </div>
          );
        }
      },
    },
    Data: {
      abortDeletion() {
        setRegquestDeletion(false);
      },
      confirmDeletion() {
        const userBoardsRef = doc(db, `MainUserDataPool_${uid}`, "UserBoards");
        const namePath = `boardNames.${boardId}`;
        updateDoc(userBoardsRef, { [namePath]: deleteField() });
      },
    },
  };

  return (
    <>
      <div ref={useClickOutside(setMenuState)} className={classes.body}>
        <div className={`${classes.option} ${classes.rename}`}>
          <img
            className={classes.icon}
            src={renameIcon}
            alt="renameIconOnItem"
          />
          Rename
        </div>
        {Logic.UI.evaluateDeletionRequest()}
      </div>
      <div className={classes.pointer}></div>
    </>
  );
};

//---------EXPORTS------------\
export default ItemListMenu;
