//---------IMPORTS------------\
import classes from "./_EffectFilter.module.scss";
import filterIcon from "./filterIcon.svg";

//---------COMPONENT----------\
const EffectFilter = function () {
  return (
    <div className={classes.body}>
      <img className={classes.icon} src={filterIcon} alt="filterIconBar" />
      Filter
    </div>
  );
};

//---------EXPORTS------------\
export default EffectFilter;
