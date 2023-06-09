//---------IMPORTS------------\

import { useState, FC, Dispatch, SetStateAction, useCallback } from "react";
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
    const {
      config: { autoDeleteOnDone: configState },
    } = DataContext()!.appMetaData as appMetaData;
    const uid = AuthContext()?.userObject?.uid;
    // const [savedSelectionState, setSavedSelectionState] = useState(configState);
    const [uiSelectionState, setUISelectionState] = useState(configState);

    const Logic = {
      test() {
        console.log("i was fired!");
        setConfigPopState(false);
      },
      Update: {
        saveCurrentSetting() {
          if (uiSelectionState === configState) {
            console.log("No change");
          } else {
            console.log("Change!");

            // const ref = doc(db, `MainUserDataPool_${uid}`, "UserConfig");
            // const updatedData = { autoOnDeleteOnDone: uiSelectionState };
            // updateDoc(ref, updatedData)
            //   .then((updatedData) => {
            //     setConfigPopState(false);
            //     console.log(updatedData);
            //   })
            //   .catch((error) => {
            //     console.log(error);
            //   });
          }
        },
      },

      UI: {
        toggleSelection() {
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
            // onClick={Logic.Update.saveCurrentSetting.bind(Logic)}
            onClick={Logic.test}
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
