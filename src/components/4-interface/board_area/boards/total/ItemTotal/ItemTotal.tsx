//---------IMPORTS------------\
import classes from "./_ItemTotal.module.scss";

//---------COMPONENT----------\
const ItemTotal = function () {
  return (
    <div className={classes.body}>
      <div className={classes.main}></div>
      <div className={classes.rest}></div>
    </div>
  );
};

//---------EXPORTS------------\
export default ItemTotal;
