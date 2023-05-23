//---------IMPORTS------------\

import classes from "./_InputLogReg.module.scss";

//---------MAIN---------------\

type attributes = {
  individualClass: string;
  type: string;
  name: string;
  placeholder: string;
};

//---------COMPONENT----------\

const InputLogReg: React.FC<attributes> = function (props) {
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

export default InputLogReg;
