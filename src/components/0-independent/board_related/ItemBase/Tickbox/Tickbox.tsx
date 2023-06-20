//---------IMPORTS------------\

//__i-libraries______
import { FC, MouseEvent, Dispatch, SetStateAction } from "react";
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
  selfSelection: { state: boolean; set: Dispatch<SetStateAction<boolean>> };
}

//---------COMPONENT----------\

const Tickbox: FC<props> = function ({ itemOrigin, selfSelection }) {
  //__c-hooks________

  const { itemSelection, itemControl, closingMode } = ItemControlContext()!;

  //__c-logic________

  const Logic = {
    addToSelection() {
      const newSelectionSnap = [...itemSelection.list, itemOrigin];
      itemSelection.update(newSelectionSnap);
    },
    removeFromSelection() {
      const newSelectionSnap = itemSelection.list.filter((globalItemOrigin) => {
        if (!(globalItemOrigin.id === itemOrigin.id)) return globalItemOrigin;
      });
      itemSelection.update(newSelectionSnap);
    },
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
          if (itemSelection.list.length === 1) {
            Logic.removeFromSelection();
            closingMode.setState(true);
          } else {
            Logic.removeFromSelection();
          }
        }
      },
      renderBoxSelection() {
        return selfSelection.state ? (
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
  };

  //__c-structure____
  return <div className={classes.body}>{Logic.UI.renderBoxSelection()}</div>;
};

//---------EXPORTS------------\

export default Tickbox;
