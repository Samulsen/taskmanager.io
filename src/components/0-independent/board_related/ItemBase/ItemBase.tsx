//---------IMPORTS------------\
import classes from "./_ItemBase.module.scss";

//---------COMPONENT----------\
const ItemBase = function () {
  return (
    <div className={classes.body}>
      <div className={classes.main}></div>
      <div className={classes.rest}></div>
    </div>
  );
};

//---------EXPORTS------------\
export default ItemBase;
