//---------IMPORTS------------\

import EditDate from "./EditDate/EditDate";
import classes from "./_DueToDate.module.scss";
import { FC, useState, ChangeEvent, MouseEvent } from "react";

//---------COMPONENT----------\
const DueToDate: FC<{ dateString: string }> = function ({ dateString }) {
  //__c-hooks________

  const [editMode, setEditMode] = useState(false);

  //__c-logic________

  const Logic = {
    UI: {
      decideRenderMode() {
        if (editMode) {
          return this.Edit.render();
        } else {
          return this.Display.render();
        }
      },
      Edit: {
        render() {
          return <EditDate setEditMode={setEditMode} />;
        },
        enable(event: MouseEvent) {
          const clickedElement = event.target as HTMLSpanElement;
          const displayElement = event.currentTarget as HTMLSpanElement;

          if (
            clickedElement === displayElement ||
            displayElement.contains(clickedElement)
          ) {
            setEditMode(true);
          }
        },
      },
      Display: {
        render() {
          return (
            <div className={classes.display} onClick={Logic.UI.Edit.enable}>
              {Logic.UI.Display.convertDateString()}
            </div>
          );
        },
        convertDateString() {
          if (dateString === "none") {
            return <div className={classes.empty} data-descr="set date"></div>;
          } else {
            const currentDate = new Date(dateString);
            const year = currentDate.getFullYear();
            const month = (currentDate.getMonth() + 1)
              .toString()
              .padStart(2, "0");
            const dayNum = currentDate.getDate().toString().padStart(2, "0");
            let day = "";
            switch (currentDate.getDay()) {
              case 0:
                day = "Su";
                break;
              case 1:
                day = "Mo";
                break;
              case 2:
                day = "Th";
                break;
              case 3:
                day = "We";
                break;
              case 4:
                day = "Th";
                break;
              case 5:
                day = "Fr";
                break;
              case 6:
                day = "Sa";
                break;

              default:
                day = "nn";
                break;
            }
            return (
              <>
                <span className={classes.day}>{`${day}, `}</span>
                <span>{`${dayNum}.${month}.${year}`}</span>
              </>
            );
          }
        },
      },
    },
  };
  //__c-structure____
  return <div className={classes.body}>{Logic.UI.decideRenderMode()}</div>;
};

//---------EXPORTS------------\
export default DueToDate;
