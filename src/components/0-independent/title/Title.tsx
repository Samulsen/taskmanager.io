//---------IMPORTS------------\

import classes from "./_Title.module.scss";

//---------COMPONENT----------\

const Title: React.FC<{ individualClass: string }> = function (props) {
  return (
    <div className={props.individualClass}>
      <div className={classes.body}>
        <span className={classes.part_1}>taskmanager</span>
        <span className={classes.part_2}>.</span>
        <span className={classes.part_3}>io</span>
      </div>
    </div>
  );
};

//---------EXPORTS------------\

export default Title;
