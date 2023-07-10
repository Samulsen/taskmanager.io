//---------IMPORTS------------\

//__i-libraries______
import { FC, Dispatch, SetStateAction } from "react";
//__i-style__________
import classes from "./_FootColumns.module.scss";
import BoardSelection, { boardOrigin } from "./BoardSelection/BoardSelection";
import StatusSummary from "./StatusSummary/StatusSummary";
//__i-context________
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {
  mode: string;
  boardSelection: {
    selection: boardOrigin;
    setSelection: Dispatch<SetStateAction<boardOrigin>>;
  };
}

//---------COMPONENT----------\

const FootColumns: FC<props> = function ({ boardSelection, mode }) {
  //__c-hooks________

  //__c-logic________

  const Logic = {
    UI: {
      decideMode() {
        return mode === "total" ? (
          <BoardSelection board={boardSelection} />
        ) : (
          <></>
        );
      },
    },
    Data: {},
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      {Logic.UI.decideMode()}
      <div className={classes.date}></div>
      <StatusSummary />
      <div className={classes.priority}></div>
      <div className={classes.comment}></div>
    </div>
  );
};

//---------EXPORTS------------\

export default FootColumns;
