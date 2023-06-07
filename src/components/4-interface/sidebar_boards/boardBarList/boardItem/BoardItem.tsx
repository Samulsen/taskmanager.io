//---------IMPORTS------------\

import classes from "./_BoardItem.module.scss";
import { FC } from "react";
import boardIcon from "./boardIcon.svg";
import optionIcon from "./optionsIcon.svg";

//---------COMPONENT----------\

const BoardItem: FC<{ data: string }> = function (props) {
  const Logic = {
    DisplayBoardName() {
      const name = props.data.split("_")[0];
      if (name.length > 10) {
        return name.slice(0, 10) + "...";
      } else {
        return name;
      }
    },
  };

  return <div className={classes.body}>{props.data.split("_")[0]}</div>;
};

//---------EXPORTS------------\

export default BoardItem;
