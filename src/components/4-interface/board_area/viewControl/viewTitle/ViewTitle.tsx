//---------IMPORTS------------\

import classes from "./_ViewTitle.module.scss";

//---------COMPONENT----------\

const ViewTitle = function () {
  return (
    <div className={classes.body}>
      <span>Board - </span>
      <span className={classes.dynamic}>First Project</span>
    </div>
  );
};

//---------EXPORTS------------\

export default ViewTitle;
