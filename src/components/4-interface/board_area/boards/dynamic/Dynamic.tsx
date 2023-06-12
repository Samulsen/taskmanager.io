//---------IMPORTS------------\

import classes from "./_Dynamic.module.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { BoardContext } from "../../../../../context/BoardContext";

//---------COMPONENT----------\

const Dynamic = function () {
  const { boardID } = useParams();
  const { boardControl } = BoardContext()!;

  useEffect(() => {
    boardControl.setState(boardID as string);
  }, []);

  return <div className={classes.body}></div>;
};

//---------EXPORTS------------\

export default Dynamic;
