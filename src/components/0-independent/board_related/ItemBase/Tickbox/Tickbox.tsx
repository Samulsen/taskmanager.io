//---------IMPORTS------------\

//__i-libraries______
import { FC, useState, MouseEvent, useEffect } from "react";
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

  const { itemSelection, itemControl } = ItemControlContext()!;
  const [selfSelection, setSelfSelection] = useState(false);

  //__c-logic________

  const Logic = {
    testSelectionState() {
      const idSelectionArr: string[] = itemSelection.list.map((itemOrigin) => {
        return itemOrigin.id;
      });

      if (idSelectionArr.includes(itemOrigin.id)) {
        setSelfSelection(true);
      } else {
        setSelfSelection(false);
      }
    },
    addToSelection() {
      const newSelectionSnap = [...itemSelection.list, itemOrigin];
      itemSelection.update(newSelectionSnap);
    },
    removeFromSelection() {},
    UI: {
      selectItem(event: MouseEvent) {
        if (event.target === event.currentTarget) {
          if (itemControl.state) {
            Logic.addToSelection();
          } else {
            itemControl.setState(true);
            Logic.addToSelection();
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

  //__c-effects______

  useEffect(() => {
    Logic.testSelectionState();
  }, [itemSelection.list]);

  //__c-structure____
  return <div className={classes.body}>{Logic.UI.renderBoxSelection()}</div>;
};

//---------EXPORTS------------\

export default Tickbox;
