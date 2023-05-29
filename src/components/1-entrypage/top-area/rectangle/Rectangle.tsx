//---------IMPORTS------------\

import classes from "./_Rectangle.module.scss";

//---------COMPONENT----------\

const Rectangle: React.FC<{ position: string }> = function (props) {
  return <div className={classes.rectangle + " " + props.position}></div>;
};

//---------EXPORTS------------\

export default Rectangle;
