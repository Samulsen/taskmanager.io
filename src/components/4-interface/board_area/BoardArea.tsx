//---------IMPORTS------------\

import classes from "./_BoardArea.module.scss";
import { FC } from "react";
import ViewControl from "./viewControl/ViewControl";

//---------COMPONENT----------\

const BoardArea: FC<{ children: any }> = function ({ children: board }) {
  return (
    <div className={classes.body}>
      <ViewControl />
      {board}
    </div>
  );
};

//---------EXPORTS------------\

export default BoardArea;
