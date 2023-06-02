//---------IMPORTS------------\

import classes from "./_CheckedInput.module.scss";
import {
  forwardRef,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { input, nameValidator } from "../../../../types/types";

//---------MAIN---------------\

interface props {
  type: string;
  position: string;
  placeholder: string;
  name: string;
  validityLogic: (value: string, validator: nameValidator) => void;
  setInputValidity: Dispatch<SetStateAction<input>>;
  inputValidity: input;
}
type fRef = HTMLInputElement;

//---------COMPONENT----------\

const CheckedInput = forwardRef<fRef, props>((props, fRef) => {
  //__c-hooks________

  const [value, setValue] = useState("");

  //__c-logic________

  const Logic = {
    checkInputValidity(e: React.ChangeEvent<HTMLInputElement>) {
      setValue(e.target.value);
      console.log(value);
      props.validityLogic(value, props.setInputValidity);
    },
    evaluateBorderColor() {
      if (props.inputValidity === "cold") return classes.border_cold;
      if (props.inputValidity === true) return classes.border_valid;
      if (props.inputValidity === false) return classes.border_invalid;
    },
  };

  return (
    <input
      onChange={Logic.checkInputValidity}
      value={value}
      ref={fRef}
      name={props.name}
      type={props.type}
      className={`${classes.body} ${
        props.position
      } ${Logic.evaluateBorderColor()}`}
      placeholder={props.placeholder}
    />
  );
});

//---------EXPORTS------------\

export default CheckedInput;
