//---------IMPORTS------------\

import classes from "./_Total.module.scss";
//__i-components_____
import HeadBase from "../../../../0-independent/board_related/columns/HeadBase/HeadBase";
import ItemTotal from "./ItemTotal/ItemTotal";
import FootTotal from "./FootTotal/FootTotal";

//---------COMPONENT----------\

const Total = function () {
  //__c-hooks________

  //__c-logic________

  //__c-structure____
  return (
    <div className={classes.body}>
      <HeadBase type="total" />
      <ItemTotal />
      <ItemTotal />
      <ItemTotal />
      <FootTotal />
    </div>
  );
};

//---------EXPORTS------------\

export default Total;
