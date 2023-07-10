//---------IMPORTS------------\

//__i-libraries______
import { FC, Dispatch, SetStateAction, useState, useEffect } from "react";
//__i-style__________
import classes from "./_BoardSelection.module.scss";
//__i-context________
import { BoardlistContext } from "../../../../../../context/BoardlistContext";
//__i-components_____
import EditBoardSelection from "./EditBoardSelection/EditBoardSelection";

//----------PRE---------------\

//__p-types_________

export interface boardOrigin {
  name: string;
  id: string;
}

interface props {
  board: {
    selection: boardOrigin;
    setSelection: Dispatch<SetStateAction<boardOrigin>>;
  };
}

//---------COMPONENT----------\

const BoardSelection: FC<props> = function ({ board }) {
  //__c-hooks________

  const { boardNames } = BoardlistContext()!;
  const [editMode, setEditMode] = useState(false);

  //__c-logic________

  const Logic = {
    UI: {
      fitText() {
        let boardName = board.selection.name;
        if (boardName.length > 15) {
          boardName = boardName.slice(0, 12) + "...";
        }
        return boardName;
      },

      Edit: {
        enable() {
          if (board.selection.id === "empty") {
            return;
          }
          setEditMode(true);
        },
        render() {
          return editMode ? (
            <EditBoardSelection
              board={{
                selection: board.selection,
                setSelection: board.setSelection,
              }}
              setEditMode={setEditMode}
            />
          ) : (
            <></>
          );
        },
      },
      Classes: {
        forBody() {
          return board.selection.name === "Select Board"
            ? `${classes.body} ${classes.unselected}`
            : `${classes.body} ${classes.selected}`;
        },
      },
    },
    Data: {},
  };

  //__c-effects______

  useEffect(() => {
    if (boardNames.length === 0) {
      board.setSelection({ name: "No Boards", id: "empty" });
      return;
    }

    if (boardNames.length > 0) {
      board.setSelection({ name: "Select Board", id: "select" });
      return;
    }
  }, [boardNames]);

  //__c-structure____
  return (
    <div className={Logic.UI.Classes.forBody()} onClick={Logic.UI.Edit.enable}>
      {Logic.UI.fitText()}
      {Logic.UI.Edit.render()}
    </div>
  );
};

//---------EXPORTS------------\

export default BoardSelection;
