//---------IMPORTS------------\

//__i-libraries______
import { FC, useEffect, useState } from "react";
//__i-style__________
import classes from "./_TickboxAll.module.scss";
//__i-context________
import { ItemControlContext } from "../../../../../context/ItemControlContext";
import { ActiveDataContext } from "../../../../../context/ActiveDataContext";
import { itemOrigin } from "../../ItemBase/ItemBase";
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {}

//---------COMPONENT----------\

const TickboxAll: FC<props> = function () {
  //__c-hooks________

  const { closingMode, itemControl, itemSelection } = ItemControlContext()!;
  const { clientAffectedData } = ActiveDataContext()!;
  const [selectAllState, setSelectAllState] = useState(false);

  //__c-logic________

  const Logic = {
    UI: {
      handleClick() {
        if (selectAllState) {
          this.disable();
        } else {
          this.enable();
        }
      },
      enable() {
        if (
          !(
            clientAffectedData[0]?.type === "coldDataItem" ||
            clientAffectedData.length === 0
          )
        ) {
          const allCurrentIdsArr: itemOrigin[] = clientAffectedData.map(
            (item) => {
              return { id: item.id, board: item.board_origin };
            }
          );
          itemControl.setState(true);
          itemSelection.update(allCurrentIdsArr);
        }
      },
      disable() {
        itemSelection.update([]);
        closingMode.setState(true);
      },

      Classes: {
        forBox() {
          return selectAllState
            ? `${classes.box} ${classes.selected}`
            : `${classes.box} ${classes.unselected}`;
        },
      },
    },
    Data: {},
  };

  //__c-effects______

  useEffect(() => {
    const selectionLen = itemSelection.list.length;
    const localAllLen = clientAffectedData.length;
    if (selectionLen === localAllLen && localAllLen > 0) {
      setSelectAllState(true);
    } else {
      setSelectAllState(false);
    }
  }, [itemSelection.list]);

  //__c-structure____
  return (
    <div className={classes.body}>
      <div
        className={Logic.UI.Classes.forBox()}
        onClick={Logic.UI.handleClick.bind(Logic.UI)}
      ></div>
    </div>
  );
};

//---------EXPORTS------------\

export default TickboxAll;
