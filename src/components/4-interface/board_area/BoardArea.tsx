//---------IMPORTS------------\

import classes from "./_BoardArea.module.scss";
import { FC, ReactNode } from "react";
import ViewControl from "./viewControl/ViewControl";
import ItemControl from "./itemControl/ItemControl";

//---------COMPONENT----------\

const BoardArea: FC<{ children: ReactNode }> = function ({ children: board }) {
  //__c-hooks________

  //__c-logic________

  const Logic = {
    UI: {},
  };

  //__c-structure____

  return (
    <div className={classes.body}>
      <ViewControl />
      {board}
      <ItemControl />
    </div>
  );
};

//---------EXPORTS------------\

export default BoardArea;
