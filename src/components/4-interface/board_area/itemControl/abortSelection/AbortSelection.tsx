//---------IMPORTS------------\

//__i-libraries______
import { FC, Dispatch, SetStateAction } from "react";
//__i-style__________
import classes from "./_AbortSelection.module.scss";
import abortIcon from "./abort.svg";
import { ItemControlContext } from "../../../../../context/ItemControlContext";
//__i-context________
//__i-components_____

//----------PRE---------------\
//__p-types_________

interface props {
  setActiveClosing: Dispatch<SetStateAction<boolean>>;
}

//---------COMPONENT----------\

const AbortSelection: FC<props> = function ({ setActiveClosing }) {
  //__c-hooks________

  const { itemSelection } = ItemControlContext()!;

  //__c-logic________

  const Logic = {
    UI: {
      abortSelection() {
        setActiveClosing(true);
        itemSelection.update([]);
      },
    },
    Data: {},
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      <img
        src={abortIcon}
        alt="abortItemControl"
        onClick={Logic.UI.abortSelection}
      />
    </div>
  );
};

//---------EXPORTS------------\

export default AbortSelection;
