//---------IMPORTS------------\

import { MouseEvent, useState } from "react";
//__i-style__________
import classes from "./_EffectFilter.module.scss";
import filterIcon from "./filterIcon.svg";
import EditFilter from "./EditFilter/EditFilter";

//---------COMPONENT----------\

const EffectFilter = function () {
  //__c-hooks________

  const [editMode, setEditMode] = useState(false);

  //__c-logic________

  const Logic = {
    Edit: {
      render() {
        return editMode ? <EditFilter setEditMode={setEditMode} /> : <></>;
      },
      enable(event: MouseEvent) {
        const target = event.target as HTMLElement;
        const receiver = event.currentTarget as HTMLElement;
        if (target === receiver || target.id === "filterIconViewbar") {
          setEditMode(true);
        }
      },
    },
    UI: {
      Classes: {
        forBody() {
          return editMode
            ? `${classes.body} ${classes.selected}`
            : `${classes.body} ${classes.unselected}`;
        },
      },
    },
  };

  //__c-structure____

  return (
    <div className={Logic.UI.Classes.forBody()} onClick={Logic.Edit.enable}>
      <img
        id="filterIconViewbar"
        className={classes.icon}
        src={filterIcon}
        alt="filterIconBar"
      />
      Filter
      {Logic.Edit.render()}
    </div>
  );
};

//---------EXPORTS------------\

export default EffectFilter;
