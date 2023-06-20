//---------IMPORTS------------\

import { FC } from "react";
import classes from "./_HeadBase.module.scss";
import HeadColumn from "./HeadColumn/HeadColumn";
import TickboxAll from "./TickboxAll/TickboxAll";

//---------COMPONENT----------\
const HeadBase: FC<{ type: string }> = function ({ type }) {
  //__c-logic________

  const Logic = {
    UI: {
      evaluateType() {
        if (type === "total")
          return <HeadColumn width={classes.mid} title="Board" />;
      },
    },
  };

  return (
    <div className={classes.body}>
      <div className={classes.grouplineUpper}></div>
      <div className={classes.main}>
        <TickboxAll />
        <HeadColumn width={classes.task} title="Task" />
        {Logic.UI.evaluateType()}
        <HeadColumn width={classes.mid} title="Due to Date" />
        <HeadColumn width={classes.mid} title="Status" />
        <HeadColumn width={classes.prio} title="Priority" />
        <HeadColumn width={classes.comment} title="Comment" />
      </div>
      <div className={classes.rest}></div>
    </div>
  );
};

//---------EXPORTS------------\
export default HeadBase;
