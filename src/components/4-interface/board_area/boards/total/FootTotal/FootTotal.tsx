//---------IMPORTS------------\
import classes from "./_FootTotal.module.scss";

//---------COMPONENT----------\
const FootTotal = function () {
  return (
    <div className={classes.body}>
      <div className={classes.main}></div>
      <div className={classes.rest}></div>
    </div>
  );
};

//---------EXPORTS------------\
export default FootTotal;
