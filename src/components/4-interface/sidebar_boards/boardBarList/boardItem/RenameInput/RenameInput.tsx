//---------IMPORTS------------\

import useClickOutside from "../../../../../../hooks/useClickOutside";
import classes from "./_RenameInput.module.scss";
import {
  FC,
  Dispatch,
  SetStateAction,
  useState,
  useRef,
  KeyboardEvent,
} from "react";
import { AuthContext } from "../../../../../../context/AuthContext";
import { BoardContext } from "../../../../../../context/BoardContext";
import pathBoardNames from "../../../../../../util/pathBoardNames";
import { updateDoc } from "firebase/firestore";

//---------COMPONENT----------\
const RenameInput: FC<{
  setRenameState: Dispatch<SetStateAction<boolean>>;
  boardId: string;
}> = function ({ setRenameState, boardId }) {
  //__c-hooks________
  const [wasEmptyOnRequest, setWasEmptyState] = useState(false);
  const uid = AuthContext()!.userObject!.uid;
  const updatedNameInputRef = useRef<HTMLInputElement>(null);
  const { boardControl } = BoardContext()!;
  //__c-logic________

  const Logic = {
    UI: {
      evaluateValidSubmission() {
        return wasEmptyOnRequest
          ? { placeholder: "cannot be empty!" }
          : { placeholder: "" };
      },
      evaluateSelectionState() {
        if (boardControl.state === boardId) {
          return classes.isAlsoSelected;
        } else {
          return classes.notSelected;
        }
      },
    },

    Data: {
      initRequestChain() {
        return Promise.resolve();
      },
      updateBoardName() {
        const ref = pathBoardNames(uid);
        const namePath = `boardNames.${boardId}.name`;
        const updateData = {
          [namePath]: updatedNameInputRef.current!.value,
        };
        return updateDoc(ref, updateData);
      },
      closeRequest() {
        setRenameState(false);
      },
    },

    handleEnter(event: KeyboardEvent<HTMLInputElement>) {
      event.stopPropagation();
      if (event.key === "Enter") {
        if (event.currentTarget.value.trim().length === 0) {
          setWasEmptyState(true);
        } else {
          this.Data.initRequestChain()
            .then(this.Data.updateBoardName)
            .then(this.Data.closeRequest)
            .catch();
        }
      }
    },
  };

  return (
    <div className={classes.body} ref={useClickOutside(setRenameState)}>
      <input
        className={Logic.UI.evaluateSelectionState()}
        ref={updatedNameInputRef}
        type="text"
        autoFocus
        onKeyDown={Logic.handleEnter.bind(Logic)}
        {...Logic.UI.evaluateValidSubmission()}
      />
    </div>
  );
};

//---------EXPORTS------------\
export default RenameInput;
