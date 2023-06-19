//---------IMPORTS------------\

//__i-libraries______
import { FC, useState, MouseEvent } from "react";
//__i-style__________
import classes from "./_Tickbox.module.scss";
import tickIcon from "./check.svg";
//__i-context________
import { ItemControlContext } from "../../../../../context/ItemControlContext";
import { itemOrigin } from "../ItemBase";
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {
  itemOrigin: itemOrigin;
}

//---------COMPONENT----------\

const Tickbox: FC<props> = function ({ itemOrigin }) {
  //__c-hooks________

  const { Selection, ItemControl } = ItemControlContext()!;
  const [selfSelection, setSelfSelection] = useState(false);

  //__c-logic________

  const Logic = {
    addToSelection() {
      const prevSelectionSnap = Selection.array;
      const newSelectionSnap = [...Selection.array];
    },
    removeFromSelection() {},
    UI: {
      selectItem(event: MouseEvent) {
        if (event.target === event.currentTarget) {
          if (ItemControl.state) {
          } else {
            ItemControl.setState(true);
          }
        }
      },
      unselectItem(event: MouseEvent) {
        if (event.target === event.currentTarget) {
        }
      },
      renderBoxSelection() {
        return selfSelection ? (
          <div className={`${classes.box} ${classes.selected}`}>
            <img
              onClick={Logic.UI.unselectItem}
              className={classes.tickIcon}
              src={tickIcon}
              alt="tickIconItemSelfState"
            />
          </div>
        ) : (
          <div
            className={`${classes.box} ${classes.unselected}`}
            onClick={Logic.UI.selectItem}
          ></div>
        );
      },
    },
    Data: {},
  };

  //__c-structure____
  return <div className={classes.body}>{Logic.UI.renderBoxSelection()}</div>;
};

//---------EXPORTS------------\

export default Tickbox;
