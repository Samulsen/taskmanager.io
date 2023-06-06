//---------IMPORTS------------\

import classes from "./_MiddleBarHeader.module.scss";
import Title from "../../../0-independent/title/Title";

//---------COMPONENT----------\

const MiddleBarHeader = function () {
  return (
    <div className={classes.body}>
      <Title individualClass={classes.transfomer} />
    </div>
  );
};

//---------EXPORTS------------\

export default MiddleBarHeader;
