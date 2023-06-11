//---------IMPORTS------------\

import { Dispatch, FC, SetStateAction, useState } from "react";
import classes from "./_ItemListMenu.module.scss";
import deleteIcon from "./svgs/delete.svg";
import renameIcon from "./svgs/rename.svg";
import confirmIcon from "./svgs/confirm.svg";
import abortIcon from "./svgs/abort.svg";
import useClickOutside from "../../../../../../hooks/useClickOutside";

//---------COMPONENT----------\
const ItemListMenu: FC<{ setMenuState: Dispatch<SetStateAction<boolean>> }> =
  function ({ setMenuState }) {
    const [requestDeletion, setRegquestDeletion] = useState(false);

    const Logic = {
      UI: {
        requestDeletion() {
          setRegquestDeletion(true);
        },
        evaluateDeletionRequest() {
          if (requestDeletion) {
            return (
              <div className={classes.option}>
                <div className={classes.confirm}>
                  <img src={confirmIcon} alt="confirmDeletion" />
                </div>
                ?
                <div className={classes.abort}>
                  <img src={abortIcon} alt="abortDeletion" />
                </div>
              </div>
            );
          } else {
            return (
              <div
                className={classes.option}
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
        abortDeletion() {},
        confirmDeletion() {},
      },
    };

    return (
      <>
        <div ref={useClickOutside(setMenuState)} className={classes.body}>
          <div className={classes.option}>
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
