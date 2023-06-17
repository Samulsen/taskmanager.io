//---------IMPORTS------------\
//__i-libraries______
import classes from "./_AddNewBoard.module.scss";
import { Dispatch, FC, SetStateAction, KeyboardEvent, useState } from "react";
import { updateDoc, serverTimestamp, setDoc, doc } from "firebase/firestore";
import { useRef } from "react";
//__i-context________
import { AuthContext } from "../../../../../../context/AuthContext";
//__i-helper_________"
import randomID from "../../../../../../util/randomID";
import useClickOutside from "../../../../../../hooks/useClickOutside";
import { db } from "../../../../../../firebase";

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
        //__NOTE:Provides stable random id throught async request, passes down through resolved values!
        return Promise.resolve(randomID());
      },
      //__NOTE: actually opens a new sub collection for the board items!
      openNewBoardCollection(boardId: string): Promise<string> {
        return new Promise((resolve) => {
          const ref = doc(
            db,
            `MainUserDataPool_${uid}`,
            "UserBoards",
            boardId,
            "BoardMetaData"
          );
          const data = {
            name: boardInputNameRef.current!.value,
            type: "metadata",
          };
          setDoc(ref, data).then(() => {
            resolve(boardId);
          });
        });
      },
      //__NOTE: adds only to the boardNames Map!
      addToBoardNames(boardId: string) {
        const ref = doc(db, `MainUserDataPool_${uid}`, "UserBoards");
        const namePath = `boardNames.${boardId}`;
        const addedData = {
          [namePath]: {
            name: boardInputNameRef.current!.value,
            timestamp: serverTimestamp(),
          },
        };
        return updateDoc(ref, addedData);
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
            .then(this.Data.addToBoardNames)
            .then(this.Data.closeRequest)
            .catch();
        }
      }
    },
  };
  //__c-structure____
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
