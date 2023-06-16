//---------IMPORTS------------\

import { FC, useState, ChangeEvent, FocusEvent } from "react";
import { itemOrigin } from "../ItemBase";
import classes from "./_Priority.module.scss";

//---------COMPONENT----------\
const Priority: FC<{ displayValue: string; itemOrigin: itemOrigin }> =
  function ({ displayValue, itemOrigin }) {
    //__c-hooks________

    const [currentPrio, setCurrentPrio] = useState(displayValue);

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
        submit(event: FocusEvent<HTMLInputElement>) {
          if (event.currentTarget === event.target) {
          }
        },
      },

      logger() {
        console.log("was fired");
      },
    };

    //__c-structure____

    return (
      <div className={classes.body}>
        <input
          type="text"
          name={itemOrigin.id}
          value={currentPrio}
          onChange={Logic.UI.validateInput}
          // onBlur={Logic.logger}
        />
      </div>
    );
  };

//---------EXPORTS------------\
export default Priority;
