//---------IMPORTS------------\

import classes from "./_ButtonOutside.module.scss";

//---------MAIN---------------\

type additions = { border: string; displayText: string };

//---------COMPONENT----------\

const ButtonOutside: React.FC<additions> = function (props) {
  const Logic = {
    evaluteClassList() {
      let classList;
      if (props.border === "white") {
        classList = classes.body + " " + classes.border_white;
        return classList;
      }
      if (props.border === "green") {
        classList = classes.body + " " + classes.border_green;
        return classList;
      }
    },
  };

  return <div className={Logic.evaluteClassList()}>{props.displayText}</div>;
};

//---------EXPORTS------------\

export default ButtonOutside;
