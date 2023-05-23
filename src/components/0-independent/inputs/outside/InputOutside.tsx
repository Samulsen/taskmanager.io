//---------IMPORTS------------\

import classes from "./_InputOutside.module.scss";

//---------MAIN---------------\

type attributes = {
  individualClass: string;
  type: string;
  name: string;
  placeholder: string;
};

//---------COMPONENT----------\

const InputOutside: React.FC<attributes> = function (props) {
  return (
    <input
      className={classes.main + " " + props.individualClass}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
};

//---------EXPORTS------------\

export default InputOutside;
