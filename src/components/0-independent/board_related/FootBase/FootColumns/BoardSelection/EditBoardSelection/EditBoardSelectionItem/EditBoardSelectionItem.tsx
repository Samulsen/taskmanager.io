//---------IMPORTS------------\

//__i-libraries______
import { FC, Dispatch, SetStateAction, MouseEvent } from "react";
//__i-style__________
import classes from "./_EditBoardSelectionItem.module.scss";
//__i-helper_________
import { BoardMetaData } from "../../../../../../../../context/BoardlistContext";
import { boardOrigin } from "../../BoardSelection";
//__i-context________
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {
  boardData: [string, BoardMetaData];
  setEditMode: Dispatch<SetStateAction<boolean>>;
  board: {
    selection: boardOrigin;
    setSelection: Dispatch<SetStateAction<boardOrigin>>;
  };
}

//---------COMPONENT----------\

const EditBoardSelectionItem: FC<props> = function ({
  boardData,
  board,
  setEditMode,
}) {
  //__c-hooks________

  //__c-logic________

  const Logic = {
    UI: {
      fitText() {
        let boardName = boardData[1].name;
        if (boardName.length > 15) {
          boardName = boardName.slice(0, 12) + "...";
        }
        return boardName;
      },
    },
    Data: {
      setSelectionBoard(event: MouseEvent) {
        if (event.currentTarget === event.target) {
          event.stopPropagation();
          board.setSelection({ name: boardData[1].name, id: boardData[0] });
          setEditMode(false);
        }
      },
    },
  };

  //__c-structure____
  return (
    <div className={classes.body} onClick={Logic.Data.setSelectionBoard}>
      {Logic.UI.fitText()}
    </div>
  );
};

//---------EXPORTS------------\

export default EditBoardSelectionItem;
