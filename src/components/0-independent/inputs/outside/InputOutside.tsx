//---------IMPORTS------------\

import classes from "./_InputOutside.module.scss";
import { forwardRef } from "react";

//---------MAIN---------------\

type attributes = {
  individualClass: string;
  type: string;
  name: string;
  placeholder: string;
  ref: React.Ref<HTMLInputElement>;
};

//---------COMPONENT----------\

const InputOutside: React.FC<attributes> = forwardRef(function (props, ref) {
  return (
    <input
      ref={ref}
      className={classes.main + " " + props.individualClass}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
});

//---------EXPORTS------------\

export default InputOutside;
