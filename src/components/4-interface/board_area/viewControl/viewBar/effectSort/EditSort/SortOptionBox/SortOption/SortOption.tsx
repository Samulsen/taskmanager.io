//---------IMPORTS------------\

//__i-libraries______
import { FC, MouseEvent } from "react";
//__i-style__________
import classes from "./_SortOption.module.scss";
//__i-context________
import { BoardContext } from "../../../../../../../../../context/BoardContext";
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {
  target: string;
}

//---------COMPONENT----------\

const SortOption: FC<props> = function ({ target }) {
  //__c-hooks________

  const { sortControl } = BoardContext()!;

  //__c-logic________

  const Logic = {
    handleSortRequest(event: MouseEvent) {
      if (event.target === event.currentTarget) {
        sortControl.setState(target);
      }
    },

    UI: {
      Classes: {
        forBody() {
          return sortControl.state === target
            ? `${classes.body} ${classes.selected}`
            : `${classes.body} ${classes.unselected}`;
        },
      },
    },
    Data: {},
  };

  //__c-structure____
  return (
    <div
      className={Logic.UI.Classes.forBody()}
      onClick={Logic.handleSortRequest}
    >
      {target}
    </div>
  );
};

//---------EXPORTS------------\

export default SortOption;
