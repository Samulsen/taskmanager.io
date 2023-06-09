//---------IMPORTS------------\

import { useState, FC, Dispatch, SetStateAction, MouseEvent } from "react";
import classes from "./_ConfigPop.module.scss";
import arrowIcon from "./arrow.svg";
import checkIcon from "./check.svg";
import uncheckedIcon from "./unchecked.svg";
import {
  DataContext,
  appMetaData,
} from "../../../../../../context/DataContext";
import { AuthContext } from "../../../../../../context/AuthContext";
import useClickOutside from "../../../../../../hooks/useClickOutside";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../../firebase";

//---------COMPONENT----------\
const ConfigPop: FC<{ setConfigPopState: Dispatch<SetStateAction<boolean>> }> =
  function ({ setConfigPopState }) {
    //__c-hooks________
    const {
      config: { autoDeleteOnDone: configState },
    } = DataContext()!.appMetaData as appMetaData;
    const uid = AuthContext()?.userObject?.uid;
    const [uiSelectionState, setUISelectionState] = useState(configState);
    //__c-logic________
    const Logic = {
      Update: {
        saveCurrentSetting(event: MouseEvent<HTMLDivElement>) {
          event.stopPropagation();
          if (uiSelectionState === configState) {
            setConfigPopState(false);
          } else {
            const ref = doc(db, `MainUserDataPool_${uid}`, "UserConfig");
            const updatedData = { autoDeleteOnDone: uiSelectionState };
            updateDoc(ref, updatedData)
              .then((updatedData) => {
                setConfigPopState(false);
                console.log(updatedData);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        },
      },

      UI: {
        toggleSelection(event: MouseEvent<HTMLDivElement>) {
          event.stopPropagation();
          uiSelectionState
            ? setUISelectionState(false)
            : setUISelectionState(true);
        },
        evaluateBackground() {
          return uiSelectionState
            ? ` ${classes.tickbox} ${classes.selected}`
            : `${classes.tickbox} ${classes.unselected}`;
        },
        evaluateIcon() {
          return uiSelectionState ? (
            <img src={checkIcon} alt="checkIconTaskAutomation" />
          ) : (
            <img src={uncheckedIcon} alt="uncheckIconTaskAutomation" />
          );
        },
      },
    };

    return (
      <>
        <div ref={useClickOutside(setConfigPopState)} className={classes.body}>
          <div className={classes.header}>Settings</div>
          <div className={classes.settings}>
            <div className={classes.detail}>
              Delete Task when Status is "<span>Done!</span>"?
            </div>
            <img className={classes.arrow} src={arrowIcon} alt="arrowToField" />
            <div
              className={Logic.UI.evaluateBackground()}
              onClick={Logic.UI.toggleSelection}
            >
              {Logic.UI.evaluateIcon()}
            </div>
          </div>
          <div
            className={classes.confirm}
            onClick={Logic.Update.saveCurrentSetting.bind(Logic)}
          >
            Save & Back
          </div>
        </div>
        <div className={classes.pointer}></div>
      </>
    );
  };

//---------EXPORTS------------\
export default ConfigPop;
