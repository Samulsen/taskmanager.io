//---------IMPORTS------------\

import classes from "./_Logo.module.scss";
import logo from "./logo.svg";

//---------MAIN---------------\

type animations = { animation: string; individualClass: string };

//---------COMPONENT----------\

const Logo: React.FC<animations> = function (props) {
  const Logic = {
    evaluateAnimationClass() {
      let animationClass;
      switch (props.animation) {
        case "entrypage":
          animationClass = classes.blob__animation_entrypage;
          break;
        case "noDelay":
          animationClass = classes.blob__animation_noDelay;
          break;

        default:
          break;
      }
      return classes.blob + " " + animationClass;
    },
  };

  return (
    <div className={props.individualClass}>
      <div className={classes.body}>
        <div className={Logic.evaluateAnimationClass()}></div>
        <img className={classes.form} src={logo} alt="logoMain" />
      </div>
    </div>
  );
};

//---------EXPORTS------------\

export default Logo;
