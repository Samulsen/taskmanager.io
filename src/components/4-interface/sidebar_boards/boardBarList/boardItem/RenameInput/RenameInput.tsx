//---------IMPORTS------------\
//__i-libraries______
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
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../../../../firebase";
//__i-components_____
import classes from "./_RenameInput.module.scss";
import useClickOutside from "../../../../../../hooks/useClickOutside";

//---------COMPONENT----------\
const RenameInput: FC<{
  setRenameState: Dispatch<SetStateAction<boolean>>;
  boardData: { id: string; name: string };
}> = function ({ setRenameState, boardData }) {
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
        if (boardControl.state === boardData.id) {
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
      updateBoardNameInBoardList() {
        const ref = doc(db, `MainUserDataPool_${uid}`, "UserBoards");
        const namePath = `boardNames.${boardData.id}.name`;
        const updateData = {
          [namePath]: updatedNameInputRef.current!.value,
        };
        return updateDoc(ref, updateData);
      },
      updateBoardNameInLocalMetadata() {
        const MetaDataRef = doc(
          db,
          `MainUserDataPool_${uid}`,
          "UserBoards",
          `${boardData.id}`,
          "BoardMetaData"
        );
        const updateData = { name: updatedNameInputRef.current!.value };
        return updateDoc(MetaDataRef, updateData);
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
            .then(this.Data.updateBoardNameInBoardList)
            .then(this.Data.updateBoardNameInLocalMetadata)
            .then(this.Data.closeRequest)
            .catch();
        }
      }
    },
  };
  //__c-structure____
  return (
    <div className={classes.body} ref={useClickOutside(setRenameState)}>
      <input
        defaultValue={boardData.name}
        type="text"
        {...Logic.UI.evaluateValidSubmission()}
        autoFocus
        ref={updatedNameInputRef}
        className={Logic.UI.evaluateSelectionState()}
        onKeyDown={Logic.handleEnter.bind(Logic)}
      />
    </div>
  );
};

//---------EXPORTS------------\
export default RenameInput;
