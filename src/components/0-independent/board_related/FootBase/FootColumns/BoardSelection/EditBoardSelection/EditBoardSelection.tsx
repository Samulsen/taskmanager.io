//---------IMPORTS------------\

//__i-libraries______
import { FC, Dispatch, SetStateAction } from "react";
//__i-style__________
import classes from "./_EditBoardSelection.module.scss";
//__i-context________
import { BoardlistContext } from "../../../../../../../context/BoardlistContext";
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {
  setEditMode: Dispatch<SetStateAction<boolean>>;
  board: { selection: string; setSelection: Dispatch<SetStateAction<string>> };
}

//---------COMPONENT----------\

const EditBoardSelection: FC<props> = function () {
  //__c-hooks________

  const { boardNames } = BoardlistContext()!;
  console.log(boardNames);

  //__c-logic________

  const Logic = {
    UI: {},
    Data: {},
  };

  //__c-structure____
  return <div className={classes.body}></div>;
};

//---------EXPORTS------------\

export default EditBoardSelection;
