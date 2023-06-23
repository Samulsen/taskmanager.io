//---------IMPORTS------------\

//__i-libraries______
import { FC, Dispatch, SetStateAction } from "react";
//__i-style__________
import classes from "./_FootColumns.module.scss";
import BoardSelection from "./BoardSelection/BoardSelection";
//__i-context________
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {
  boardSelection: {
    selection: string;
    setSelection: Dispatch<SetStateAction<string>>;
  };
}

//---------COMPONENT----------\

const FootColumns: FC<props> = function ({ boardSelection }) {
  //__c-hooks________

  //__c-logic________

  const Logic = {
    UI: {},
    Data: {},
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      <BoardSelection board={boardSelection} />
    </div>
  );
};

//---------EXPORTS------------\

export default FootColumns;
