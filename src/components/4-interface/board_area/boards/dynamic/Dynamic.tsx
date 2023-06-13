//---------IMPORTS------------\

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import classes from "./_Dynamic.module.scss";
//__i-context________
import { BoardContext } from "../../../../../context/BoardContext";
//__i-components_____
import HeadBase from "../../../../0-independent/board_related/HeadBase/HeadBase";
import ItemBase from "../../../../0-independent/board_related/ItemBase/ItemBase";
import FootBase from "../../../../0-independent/board_related/FootBase/FootBase";

//---------COMPONENT----------\

const Dynamic = function () {
  //__c-hooks________
  const { boardID } = useParams();
  const { boardControl } = BoardContext()!;
  //__c-logic________

  //__c-effects______
  useEffect(() => {
    boardControl.setState(boardID as string);
  }, []);
  //__c-structure____
  return (
    <div className={classes.body}>
      <HeadBase type="dynamic" />
      <ItemBase type="dynamic" />
      <ItemBase type="dynamic" />
      <ItemBase type="dynamic" />
      <FootBase type="dynamic" />
    </div>
  );
};

//---------EXPORTS------------\

export default Dynamic;
