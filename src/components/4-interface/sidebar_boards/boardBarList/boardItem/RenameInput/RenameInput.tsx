//---------IMPORTS------------\

import classes from "./_RenameInput.module.scss";
import { FC, Dispatch, SetStateAction } from "react";

//---------COMPONENT----------\
const RenameInput: FC<{ setRenameState: Dispatch<SetStateAction<boolean>> }> =
  function ({ setRenameState }) {
    return (
      <div className={classes.body}>
        <input type="text" />
      </div>
    );
  };

//---------EXPORTS------------\
export default RenameInput;
