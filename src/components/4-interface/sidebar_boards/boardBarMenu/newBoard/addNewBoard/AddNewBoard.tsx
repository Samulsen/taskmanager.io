//---------IMPORTS------------\

import classes from "./_AddNewBoard.module.scss";
import useClickOutside from "../../../../../../hooks/useClickOutside";
import { Dispatch, FC, SetStateAction, KeyboardEvent } from "react";

//---------COMPONENT----------\
const AddNewBoard: FC<{
  setCanAddBoardstate: Dispatch<SetStateAction<boolean>>;
}> = function ({ setCanAddBoardstate }) {
  const Logic = {
    Data: {
      evaluateRequest(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
          console.log("emter was ht");
        } else {
          console.log("enter was not hit");
        }
      },
    },
  };

  return (
    <div className={classes.body}>
      <div ref={useClickOutside(setCanAddBoardstate)}>
        <input onKeyDown={Logic.Data.evaluateRequest} autoFocus type="text" />
      </div>
    </div>
  );
};

//---------EXPORTS------------\
export default AddNewBoard;
