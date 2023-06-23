//---------IMPORTS------------\

//__i-libraries______
import { FC, Dispatch, SetStateAction, useState } from "react";
//__i-style__________
import classes from "./_BoardSelection.module.scss";
import { BoardlistContext } from "../../../../../../context/BoardlistContext";
//__i-context________
//__i-components_____

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
      Classes: {
        forBody() {
          return board.selection === "Select Board"
            ? `${classes.body} ${classes.empty}`
            : `${classes.body}`;
        },
      },
    },
    Data: {},
  };

  //__c-structure____
  return <div className={Logic.UI.Classes.forBody()}>{board.selection}</div>;
};

//---------EXPORTS------------\

export default BoardSelection;
