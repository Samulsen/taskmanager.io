//---------IMPORTS------------\
//__i-libraries______
import classes from "./_AddNewBoard.module.scss";
import { Dispatch, FC, SetStateAction, KeyboardEvent, useState } from "react";
import { updateDoc } from "firebase/firestore";
import { useRef } from "react";
//__i-context________
import { AuthContext } from "../../../../../../context/AuthContext";
//__i-helper_________"
import randomID from "../../../../../../util/randomID";
import useClickOutside from "../../../../../../hooks/useClickOutside";
import pathBoardNames from "../../../../../../util/pathBoardNames";

//---------COMPONENT----------\
const AddNewBoard: FC<{
  setCanAddBoardstate: Dispatch<SetStateAction<boolean>>;
}> = function ({ setCanAddBoardstate }) {
  //__c-hooks________
  const [wasEmptyOnRequest, setWasEmptyState] = useState(false);
  const uid = AuthContext()!.userObject!.uid;
  const boardInputNameRef = useRef<HTMLInputElement>(null);
  //__c-logic________
  const Logic = {
    UI: {
      evaluateValidSubmission() {
        return wasEmptyOnRequest
          ? { placeholder: "cannot be empty!" }
          : { placeholder: "" };
      },
    },
    Data: {
      initRequestChain() {
        return Promise.resolve();
      },
      openNewBoardCollection() {
        return Promise.resolve();
      },
      updateBoardNames() {
        const ref = pathBoardNames(uid);
        const namePath = `boardNames.${randomID()}`;
        const updateData = {
          [namePath]: boardInputNameRef.current!.value,
        };
        return updateDoc(ref, updateData);
      },
      closeRequest() {
        setCanAddBoardstate(false);
      },
    },
    handleEnter(event: KeyboardEvent<HTMLInputElement>) {
      event.stopPropagation();
      if (event.key === "Enter") {
        if (event.currentTarget.value.trim().length === 0) {
          setWasEmptyState(true);
        } else {
          this.Data.initRequestChain()
            .then(this.Data.openNewBoardCollection)
            .then(this.Data.updateBoardNames)
            .then(this.Data.closeRequest)
            .catch();
        }
      }
    },
  };

  return (
    <div className={classes.body}>
      <div ref={useClickOutside(setCanAddBoardstate)}>
        <input
          ref={boardInputNameRef}
          onKeyDown={Logic.handleEnter.bind(Logic)}
          autoFocus
          type="text"
          {...Logic.UI.evaluateValidSubmission()}
        />
      </div>
    </div>
  );
};

//---------EXPORTS------------\
export default AddNewBoard;
