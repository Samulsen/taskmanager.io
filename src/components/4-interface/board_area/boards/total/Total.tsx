//---------IMPORTS------------\

import classes from "./_Total.module.scss";
//__i-components_____
import ItemTotal from "./ItemTotal/ItemTotal";
import HeadTotal from "./HeadTotal/HeadTotal";
import FootTotal from "./FootTotal/FootTotal";

//---------COMPONENT----------\

const Total = function () {
  //__c-hooks________

  //__c-logic________

  //__c-structure____
  return (
    <div className={classes.body}>
      <HeadTotal />
      <ItemTotal />
      <ItemTotal />
      <ItemTotal />
      <FootTotal />
    </div>
  );
};

//---------EXPORTS------------\

export default Total;
