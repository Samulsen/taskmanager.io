//---------IMPORTS------------\

//__i-libraries______
import { FC } from "react";
//__i-style__________
import classes from "./_SelectionMessage.module.scss";
//__i-context________
import { ItemControlContext } from "../../../../../context/ItemControlContext";
import { ActiveDataContext } from "../../../../../context/ActiveDataContext";
//__i-components_____

//----------PRE---------------\
//__p-types_________

interface props {}

//---------COMPONENT----------\

const SelectionMessage: FC<props> = function () {
  //__c-hooks________

  const { itemSelection } = ItemControlContext()!;
  const { clientAffectedData } = ActiveDataContext()!;

  //__c-logic________

  const Logic = {
    UI: {
      decidePlural() {
        if (itemSelection.list.length === 1) {
          return "Task selected";
        } else {
          if (clientAffectedData.length === itemSelection.list.length) {
            return "all Tasks selected";
          } else {
            return "Tasks selected";
          }
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
