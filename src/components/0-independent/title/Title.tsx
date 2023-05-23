//---------IMPORTS------------\

import classes from "./_Title.module.scss";

//---------COMPONENT----------\

const Title = function () {
  return (
    <div className={classes.body}>
      <span className={classes.part_1}>taskmanager</span>
      <span className={classes.part_2}>.</span>
      <span className={classes.part_3}>io</span>
    </div>
  );
};

//---------EXPORTS------------\

export default Title;
