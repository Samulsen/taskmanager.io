//---------IMPORTS------------\

import { FC, useState } from "react";
import { Link } from "react-router-dom";
//__i-style__________
import classes from "./_BoardItem.module.scss";
import boardIcon from "./boardIcon.svg";
import optionIcon from "./optionsIcon.svg";
//__i-components_____
import { BoardContext } from "../../../../../context/BoardContext";
import ItemListMenu from "./ItemMenu/ItemListMenu";
import RenameInput from "./RenameInput/RenameInput";

//---------COMPONENT----------\

const BoardItem: FC<{ boardId: string; currentBoardName: string }> = function ({
  boardId,
  currentBoardName,
}) {
  //__c-hooks________

  const [menuState, setMenuState] = useState(false);
  const [renameState, setRenameState] = useState(false);
  const {
    viewControl: { setState: setView },
    boardControl: { state, setState },
  } = BoardContext()!;

  //__c-logic________
  const Logic = {
    UI: {
      fitName() {
        const name = currentBoardName;
        if (name.length > 14) {
          return name.slice(0, 11) + "...";
        } else {
          return name;
        }
      },
      setSelfSelection() {
        setView("Home");
        setState(boardId);
      },
      evaluateSelectionState() {
        if (state === boardId) {
          return `${classes.body} ${classes.selected}`;
        } else {
          return `${classes.body} ${classes.unselected}`;
        }
      },
      Rename: {
        evaluate() {
          if (renameState) {
            return (
              <RenameInput setRenameState={setRenameState} boardId={boardId} />
            );
          }
          return (
            <>
              <Link to={boardId}>{Logic.UI.fitName()}</Link>
              <img
                className={`${classes.icon} ${classes.option}`}
                src={optionIcon}
                alt="iconOptionIcon"
                onClick={Logic.UI.Menu.enable.bind(Logic)}
              />
            </>
          );
        },
      },
      Menu: {
        evaluate() {
          return menuState ? (
            <ItemListMenu
              setMenuState={setMenuState}
              setRenameState={setRenameState}
              boardId={boardId}
            />
          ) : (
            <></>
          );
        },
        enable() {
          setMenuState(true);
        },
      },
    },
  };

  return (
    <div
      className={Logic.UI.evaluateSelectionState()}
      onClick={Logic.UI.setSelfSelection}
    >
      <img
        className={`${classes.icon} ${classes.boardIcon}`}
        src={boardIcon}
        alt="iconBoardItem"
      />
      {Logic.UI.Rename.evaluate()}
      {Logic.UI.Menu.evaluate()}
    </div>
  );
};

//---------EXPORTS------------\

export default BoardItem;
