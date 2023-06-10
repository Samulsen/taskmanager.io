//---------IMPORTS------------\

import classes from "./_AddNewBoard.module.scss";
import useClickOutside from "../../../../../../hooks/useClickOutside";
import { Dispatch, FC, SetStateAction, KeyboardEvent, useState } from "react";
import randomID from "../../../../../../util/randomID";

//---------COMPONENT----------\
const AddNewBoard: FC<{
  setCanAddBoardstate: Dispatch<SetStateAction<boolean>>;
}> = function ({ setCanAddBoardstate }) {
  const [wasEmptyOnRequest, setWasEmptyState] = useState(false);

  const Logic = {
    Data: {
      OpenNewBoardCollection() {},
      UpdateBoardNames() {},
    },
    evaluateValidSubmission() {
      return wasEmptyOnRequest
        ? { placeholder: "cannot be empty!" }
        : { placeholder: "" };
    },
    handleEnter(event: KeyboardEvent<HTMLInputElement>) {
      event.stopPropagation();
      if (event.key === "Enter") {
        if (event.currentTarget.value.trim().length === 0) {
          setWasEmptyState(true);
        } else {
        }
      }
    },
  };

  return (
    <div className={classes.body}>
      <div ref={useClickOutside(setCanAddBoardstate)}>
        <input
          onKeyDown={Logic.handleEnter}
          autoFocus
          type="text"
          {...Logic.evaluateValidSubmission()}
        />
      </div>
    </div>
  );
};

//---------EXPORTS------------\
export default AddNewBoard;
