//---------IMPORTS------------\

//__i-libraries______
import { FC } from "react";
//__i-style__________
import classes from "./_SortOptionBox.module.scss";
//__i-context________
import { BoardContext } from "../../../../../../../../context/BoardContext";
import SortOption from "./SortOption/SortOption";
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {}

//---------COMPONENT----------\

const SortOptionBox: FC<props> = function () {
  //__c-hooks________

  const { sortControl } = BoardContext()!;

  //__c-logic________

  const Logic = {
    UI: {},
    Data: {},
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      <SortOption target="Priority" />
      <SortOption target="Itemage" />
      <SortOption target="Due Date" />
    </div>
  );
};

//---------EXPORTS------------\

export default SortOptionBox;
