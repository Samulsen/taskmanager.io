//---------IMPORTS------------\

import {
  FC,
  useState,
  ChangeEvent,
  FocusEvent,
  useEffect,
  KeyboardEvent,
} from "react";
import { itemOrigin } from "../ItemBase";
import classes from "./_Priority.module.scss";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { AuthContext } from "../../../../../context/AuthContext";

//---------COMPONENT----------\
const Priority: FC<{ displayValue: string; itemOrigin: itemOrigin }> =
  function ({ displayValue, itemOrigin }) {
    //__c-hooks________
    const uid = AuthContext()!.userObject!.uid;
    const [currentPrio, setCurrentPrio] = useState("");

    //__c-logic________

    const Logic = {
      UI: {
        validateInput(event: ChangeEvent<HTMLInputElement>) {
          if (event.currentTarget === event.target) {
            const pattern: RegExp = /^(?!00$)\d*$/;
            if (pattern.test(event.currentTarget.value)) {
              setCurrentPrio(event.currentTarget.value);
            }
          }
        },
      },
      Data: {
        submitOnUnfocus(event: FocusEvent<HTMLInputElement>) {
          if (event.currentTarget === event.target) {
            const itemDocRef = doc(
              db,
              `MainUserDataPool_${uid}`,
              "UserBoards",
              itemOrigin.board,
              itemOrigin.id
            );
            const updatedData = {
              priority: currentPrio === "" ? "0" : currentPrio,
            };
            updateDoc(itemDocRef, updatedData);
          }
        },

        submitOnEnter(event: KeyboardEvent<HTMLInputElement>) {
          if (event.currentTarget === event.target) {
            if (event.key === "Enter") {
              const itemDocRef = doc(
                db,
                `MainUserDataPool_${uid}`,
                "UserBoards",
                itemOrigin.board,
                itemOrigin.id
              );
              const updatedData = {
                priority: currentPrio === "" ? "0" : currentPrio,
              };
              updateDoc(itemDocRef, updatedData);
              event.currentTarget.blur();
            }
          }
        },
      },
    };

    //__c-effects______

    useEffect(() => {
      setCurrentPrio(displayValue);
    }, [displayValue]);

    //__c-structure____

    return (
      <div className={classes.body}>
        <input
          type="text"
          name={itemOrigin.id}
          value={currentPrio}
          onChange={Logic.UI.validateInput}
          onBlur={Logic.Data.submitOnUnfocus}
          onKeyDown={Logic.Data.submitOnEnter}
        />
      </div>
    );
  };

//---------EXPORTS------------\
export default Priority;
