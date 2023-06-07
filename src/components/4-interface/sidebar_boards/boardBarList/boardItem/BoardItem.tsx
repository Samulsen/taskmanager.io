//---------IMPORTS------------\

import classes from "./_BoardItem.module.scss";
import { FC } from "react";
import boardIcon from "./boardIcon.svg";
import optionIcon from "./optionsIcon.svg";
import { Link } from "react-router-dom";

//---------COMPONENT----------\

const BoardItem: FC<{ data: string }> = function (props) {
  const Logic = {
    DisplayBoardName() {
      const name = props.data.split("_")[0];
      if (name.length > 13) {
        return name.slice(0, 12) + "...";
      } else {
        return name;
      }
    },
  };

  return (
    <Link className={classes.body} to={"first board_292992"}>
      <img
        className={`${classes.icon} ${classes.board}`}
        src={boardIcon}
        alt="iconBoardItem"
      />
      {Logic.DisplayBoardName()}
      <img
        className={`${classes.icon} ${classes.option}`}
        src={optionIcon}
        alt="iconOptionIcon"
      />
    </Link>
  );
};

//---------EXPORTS------------\

export default BoardItem;
