//---------IMPORTS------------\

import classes from "./_HeadTotal.module.scss";
import HeadColumn from "../../../../../0-independent/board_related/columns/HeadColumn/HeadColumn";

//---------COMPONENT----------\
const HeadTotal = function () {
  return (
    <div className={classes.body}>
      <div className={classes.grouplineUpper}></div>
      <div className={classes.main}>
        <div className={classes.quad}></div>
        <HeadColumn width={classes.task} title="Task" />
        <HeadColumn width={classes.mid} title="Board" />
        <HeadColumn width={classes.mid} title="Due to Date" />
        <HeadColumn width={classes.mid} title="Status" />
        <HeadColumn width={classes.fit} title="Priority" />
        <HeadColumn width={classes.comment} title="Comment" />
      </div>
      <div className={classes.rest}></div>
    </div>
  );
};

//---------EXPORTS------------\
export default HeadTotal;
