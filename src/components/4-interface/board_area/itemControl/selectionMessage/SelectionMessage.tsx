//---------IMPORTS------------\

//__i-libraries______
import { FC } from "react";
//__i-style__________
import classes from "./_SelectionMessage.module.scss";
import { ItemControlContext } from "../../../../../context/ItemControlContext";
//__i-context________
//__i-components_____

//----------PRE---------------\
//__p-types_________

interface props {}

//---------COMPONENT----------\

const SelectionMessage: FC<props> = function () {
  //__c-hooks________

  const { itemSelection } = ItemControlContext()!;

  //__c-logic________

  const Logic = {
    UI: {
      decidePlural() {
        if (itemSelection.list.length === 1) {
          return "Task selected";
        } else {
          return "Tasks selected";
        }
      },
    },
    Data: {},
  };

  //__c-structure____
  return <div className={classes.body}>{Logic.UI.decidePlural()}</div>;
};

//---------EXPORTS------------\

export default SelectionMessage;
