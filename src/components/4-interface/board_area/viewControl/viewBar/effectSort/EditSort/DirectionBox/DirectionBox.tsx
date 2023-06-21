//---------IMPORTS------------\

//__i-libraries______
import { FC } from "react";
//__i-style__________
import classes from "./_DirectionBox.module.scss";
import ascIcon from "./ascending.svg";
import desIcon from "./descending.svg";
//__i-context________
//__i-components_____
import DirectionOption from "./DirectionOption/DirectionOption";

//----------PRE---------------\

//__p-types_________

interface props {}

//---------COMPONENT----------\

const DirectionBox: FC<props> = function () {
  //__c-hooks________

  //__c-logic________

  const Logic = {
    UI: {},
    Data: {},
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      <DirectionOption
        key="2828282"
        direction="des"
        start={9}
        end={1}
        icon={desIcon}
      />
      <DirectionOption
        key="0101019"
        direction="ase"
        start={1}
        end={9}
        icon={ascIcon}
      />
    </div>
  );
};

//---------EXPORTS------------\

export default DirectionBox;
