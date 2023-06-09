//---------IMPORTS------------\

import { FC, useState } from "react";
import { Link } from "react-router-dom";
//__i-style__________
import classes from "./_BoardItem.module.scss";
import boardIcon from "./boardIcon.svg";
import optionIcon from "./optionsIcon.svg";
//__i-components_____
import ItemMenu from "./ItemMenu/ItemMenu";

//---------COMPONENT----------\

const BoardItem: FC<{ data: string }> = function (props) {
  const Logic = {
    UI: {
      fitName() {
        const name = props.data.split("_")[0];
        if (name.length > 13) {
          return name.slice(0, 12) + "...";
        } else {
          return name;
        }
      },
      setMenu() {},
    },
  };

  return (
    <div className={classes.body}>
      <img
        className={`${classes.icon} ${classes.board}`}
        src={boardIcon}
        alt="iconBoardItem"
      />
      <Link to={"first board_292992"}>{Logic.UI.fitName()}</Link>
      <img
        className={`${classes.icon} ${classes.option}`}
        src={optionIcon}
        alt="iconOptionIcon"
      />
    </div>
  );
};

//---------EXPORTS------------\

export default BoardItem;
