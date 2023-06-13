//---------IMPORTS------------\

import classes from "./_HeadColumn.module.scss";
import { FC } from "react";

//---------COMPONENT----------\

const HeadColumn: FC<{ width: string; title: string }> = function ({
  width,
  title,
}) {
  return <div className={`${classes.body} ${width}`}>{title}</div>;
};

//---------EXPORTS------------\
export default HeadColumn;
