//---------IMPORTS------------\
import classes from "./_Status.module.scss";

//---------COMPONENT----------\
const Status = function () {
  return (
    <div className={classes.body}>
      <div className={classes.display}>In Progress</div>
    </div>
  );
};

//---------EXPORTS------------\
export default Status;
