//---------IMPORTS------------\
import classes from "./_EffectSort.module.scss";
import sortIcon from "./sortIcon.svg";

//---------COMPONENT----------\
const EffectSort = function () {
  return (
    <div className={classes.body}>
      <img className={classes.icon} src={sortIcon} alt="filterIconBar" />
      Sort
    </div>
  );
};

//---------EXPORTS------------\
export default EffectSort;
