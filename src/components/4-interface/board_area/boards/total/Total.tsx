//---------IMPORTS------------\

import classes from "./_Total.module.scss";
//__i-components_____
import HeadBase from "../../../../0-independent/board_related/HeadBase/HeadBase";
import ItemBase from "../../../../0-independent/board_related/ItemBase/ItemBase";
import FootBase from "../../../../0-independent/board_related/FootBase/FootBase";

//---------COMPONENT----------\

const Total = function () {
  //__c-hooks________

  //__c-logic________

  //__c-structure____
  return (
    <div className={classes.body}>
      <HeadBase type="total" />
      <FootBase type="total" />
    </div>
  );
};

//---------EXPORTS------------\

export default Total;
