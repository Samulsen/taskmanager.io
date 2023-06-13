//---------IMPORTS------------\
import classes from "./_HeadTotal.module.scss";

//---------COMPONENT----------\
const HeadTotal = function () {
  return (
    <div className={classes.body}>
      <div className={classes.main}></div>
      <div className={classes.rest}></div>
    </div>
  );
};

//---------EXPORTS------------\
export default HeadTotal;
