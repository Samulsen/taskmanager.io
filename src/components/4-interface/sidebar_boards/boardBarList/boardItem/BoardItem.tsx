//---------IMPORTS------------\

import { FC, useState } from "react";
import { Link } from "react-router-dom";
//__i-style__________
import classes from "./_BoardItem.module.scss";
import boardIcon from "./boardIcon.svg";
import optionIcon from "./optionsIcon.svg";
//__i-components_____
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
      evaluateRenameState() {
        if (renameState) {
          return <RenameInput setRenameState={setRenameState} />;
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
    <div className={classes.body}>
      <img
        className={`${classes.icon} ${classes.board}`}
        src={boardIcon}
        alt="iconBoardItem"
      />
      {Logic.UI.evaluateRenameState()}
      {Logic.UI.Menu.evaluate()}
    </div>
  );
};

//---------EXPORTS------------\

export default BoardItem;
