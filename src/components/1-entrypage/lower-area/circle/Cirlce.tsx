//---------IMPORTS------------\

import classes from "./_Circle.module.scss";

//---------COMPONENT----------\

const Cirlce: React.FC<{ position: string }> = function (props) {
  return <div className={classes.circle + " " + props.position}></div>;
};

//---------EXPORTS------------\

export default Cirlce;
