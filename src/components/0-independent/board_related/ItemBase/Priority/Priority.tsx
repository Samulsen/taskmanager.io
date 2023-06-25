//---------IMPORTS------------\

//__i-libraries______
import {
  FC,
  useState,
  ChangeEvent,
  FocusEvent,
  useEffect,
  KeyboardEvent,
} from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../firebase";
//__i-context________
import { AuthContext } from "../../../../../context/AuthContext";
import { ItemControlContext } from "../../../../../context/ItemControlContext";
//__i-style__________
import classes from "./_Priority.module.scss";
//__i-helper_________
import { itemOrigin } from "../ItemBase";

//---------COMPONENT----------\
const Priority: FC<{ displayValue: string; itemOrigin: itemOrigin }> =
  function ({ displayValue, itemOrigin }) {
    //__c-hooks________

    const uid = AuthContext()!.userObject!.uid;
    const [currentPrio, setCurrentPrio] = useState("");
    const { itemControl, itemSelection } = ItemControlContext()!;

    //__c-logic________

    const Logic = {
      UI: {
        validateInput(event: ChangeEvent<HTMLInputElement>) {
          if (event.currentTarget === event.target) {
            const pattern: RegExp = /^(?!00$)(?!0\d)\d*$/;
            if (pattern.test(event.currentTarget.value)) {
              setCurrentPrio(event.currentTarget.value);
            }
          }
        },
      },
      Data: {
        postSingleDoc(itemOriginParameter: itemOrigin) {
          const itemDocRef = doc(
            db,
            `MainUserDataPool_${uid}`,
            "UserBoards",
            itemOriginParameter.board,
            itemOriginParameter.id
          );
          const updatedData = {
            priority: currentPrio === "" ? "0" : currentPrio,
          };
          updateDoc(itemDocRef, updatedData);
        },
        postUpdate() {
          if (itemControl.state) {
            const itemIdArr = itemSelection.list.map((item) => item.id);
            if (itemIdArr.includes(itemOrigin.id)) {
              itemSelection.list.forEach((sinItemOr) => {
                this.postSingleDoc(sinItemOr);
              });
            } else {
              this.postSingleDoc(itemOrigin);
            }
          } else {
            this.postSingleDoc(itemOrigin);
          }
        },
        submitOnUnfocus(event: FocusEvent<HTMLInputElement>) {
          if (event.currentTarget === event.target) {
            this.postUpdate();
          }
        },
        submitOnEnter(event: KeyboardEvent<HTMLInputElement>) {
          if (event.currentTarget === event.target) {
            if (event.key === "Enter") {
              this.postUpdate();
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
          onBlur={Logic.Data.submitOnUnfocus.bind(Logic.Data)}
          onKeyDown={Logic.Data.submitOnEnter.bind(Logic.Data)}
        />
      </div>
    );
  };

//---------EXPORTS------------\
export default Priority;
