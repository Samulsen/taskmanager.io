//---------IMPORTS------------\

import classes from "./_CheckedInput.module.scss";
import { forwardRef, useState } from "react";

//---------MAIN---------------\

interface props {
  type: string;
  individualClass: string;
  placeholder: string;
  name: string;
}
type ref = HTMLInputElement;

//---------COMPONENT----------\

const CheckedInput = forwardRef<ref, props>((props, ref) => {
  //__c-hooks________

  const [value, setValue] = useState();

  //__c-logic________

  const Logic = {};

  return (
    <input
      value={value}
      ref={ref}
      name={props.name}
      type={props.type}
      className={`${classes.body} ${props.individualClass}`}
      placeholder={props.placeholder}
    />
  );
});

//---------EXPORTS------------\

export default CheckedInput;
