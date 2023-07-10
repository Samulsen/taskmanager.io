//---------IMPORTS------------\

//__i-libraries______
import { FC, Dispatch, SetStateAction } from "react";
//__i-style__________
import classes from "./_EditBoardSelection.module.scss";
//__i-helper_________
import useClickOutside from "../../../../../../../hooks/useClickOutside";
import { boardOrigin } from "../BoardSelection";
//__i-context________
import { BoardlistContext } from "../../../../../../../context/BoardlistContext";
//__i-components_____
import EditBoardSelectionItem from "./EditBoardSelectionItem/EditBoardSelectionItem";

//----------PRE---------------\

//__p-types_________

interface props {
  setEditMode: Dispatch<SetStateAction<boolean>>;
  board: {
    selection: boardOrigin;
    setSelection: Dispatch<SetStateAction<boardOrigin>>;
  };
}

//---------COMPONENT----------\

const EditBoardSelection: FC<props> = function ({ board, setEditMode }) {
  //__c-hooks________

  const { boardNames } = BoardlistContext()!;

  //__c-logic________

  const Logic = {
    UI: {},
    Data: {},
  };

  //__c-structure____
  return (
    <div className={classes.body} ref={useClickOutside(setEditMode)}>
      <div className={classes.pointer}></div>
      <div className={classes.wrapper}>
        {boardNames.map((boardData) => {
          return (
            <EditBoardSelectionItem
              key={boardData[0]}
              board={board}
              setEditMode={setEditMode}
              boardData={boardData}
            />
          );
        })}
      </div>
    </div>
  );
};

//---------EXPORTS------------\

export default EditBoardSelection;
