//---------IMPORTS------------\

import classes from "./_InputOutside.module.scss";

//---------MAIN---------------\

type attributes = {
  individualClass: string;
  type: string;
  name: string;
  placeholder: string;
  ref: React.Ref<HTMLInputElement>;
};

//---------COMPONENT----------\

const InputOutside: React.FC<attributes> = function (props) {
  return (
    <input
      ref={props.ref}
      className={classes.main + " " + props.individualClass}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
};

//---------EXPORTS------------\

export default InputOutside;
