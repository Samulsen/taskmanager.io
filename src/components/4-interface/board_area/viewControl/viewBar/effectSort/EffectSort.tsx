//---------IMPORTS------------\

import { useState, MouseEvent } from "react";
//__i-style__________
import classes from "./_EffectSort.module.scss";
import sortIcon from "./sortIcon.svg";
//__i-components_____
import EditSort from "./EditSort/EditSort";

//---------COMPONENT----------\

const EffectSort = function () {
  //__c-hooks________

  const [editMode, setEditMode] = useState(false);

  //__c-logic________

  const Logic = {
    UI: {
      renderEditMode() {
        return editMode ? <EditSort setEditMode={setEditMode} /> : <></>;
      },
    },
    Edit: {
      enable(event: MouseEvent) {
        const sender = event.target as HTMLElement;
        const receiver = event.currentTarget as HTMLElement;
        if (sender === receiver || sender.id === "SortBodyIcon") {
          setEditMode(true);
        }
      },
    },
    Classes: {
      forBody() {
        return editMode
          ? `${classes.body} ${classes.selected}`
          : `${classes.body} ${classes.unselected}`;
      },
    },
  };

  //__c-structure____

  return (
    <div
      id="BodySort"
      className={Logic.Classes.forBody()}
      onClick={Logic.Edit.enable}
    >
      <img
        id="SortBodyIcon"
        className={classes.icon}
        src={sortIcon}
        alt="filterIconBar"
      />
      <span>Sort</span>
      {Logic.UI.renderEditMode()}
    </div>
  );
};

//---------EXPORTS------------\
export default EffectSort;
