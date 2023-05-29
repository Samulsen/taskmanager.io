//---------IMPORTS------------\

import classes from "./_NavTrigger.module.scss";

//---------MAIN---------------\

type setState = React.Dispatch<React.SetStateAction<boolean>>;

//---------COMPONENT----------\

const NavTrigger: React.FC<{ sendClickRequest: setState }> = function (props) {
  const Logic = {
    handleClick() {
      props.sendClickRequest(true);
    },
  };

  return <div className={classes.navTrigger} onClick={Logic.handleClick}></div>;
};

//---------EXPORTS------------\

export default NavTrigger;
