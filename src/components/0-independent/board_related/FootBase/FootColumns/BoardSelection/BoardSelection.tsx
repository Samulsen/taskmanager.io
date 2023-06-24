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

interface props {
  board: {
    selection: string;
    setSelection: Dispatch<SetStateAction<string>>;
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
      Edit: {
        enable() {
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
          return board.selection === "Select Board"
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
      board.setSelection("No Boards");
      return;
    }

    // if(boardNames.length > 0 && board.selection !== "Select Board")
  }, [boardNames]);

  //__c-structure____
  return (
    <div className={Logic.UI.Classes.forBody()} onClick={Logic.UI.Edit.enable}>
      {board.selection}
      {Logic.UI.Edit.render()}
    </div>
  );
};

//---------EXPORTS------------\

export default BoardSelection;
