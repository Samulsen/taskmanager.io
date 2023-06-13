//---------IMPORTS------------\
import classes from "./_DueToDate.module.scss";

//---------COMPONENT----------\
const DueToDate = function () {
  return (
    <div className={classes.body}>
      <div className={classes.display}>Mo, 28.07.2023</div>
      {/* <input type="date" /> */}
    </div>
  );
};

//---------EXPORTS------------\
export default DueToDate;
