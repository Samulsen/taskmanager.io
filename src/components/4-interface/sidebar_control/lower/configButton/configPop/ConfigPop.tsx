//---------IMPORTS------------\

import { useEffect, useState, FC, Dispatch, SetStateAction } from "react";
import classes from "./_ConfigPop.module.scss";
import arrowIcon from "./arrow.svg";
import checkIcon from "./check.svg";
import uncheckedIcon from "./unchecked.svg";
import {
  DataContext,
  appMetaData,
} from "../../../../../../context/DataContext";
import useClickOutside from "../../../../../../hooks/useClickOutside";

//---------COMPONENT----------\
const ConfigPop: FC<{ setCofigPopState: Dispatch<SetStateAction<boolean>> }> =
  function ({ setCofigPopState }) {
    const {
      config: { autoDeleteOnDone: configState },
    } = DataContext()!.appMetaData as appMetaData;
    // const [savedSelectionState, setSavedSelectionState] = useState(configState);
    const [uiSelectionState, setUISelectionState] = useState(configState);

    const Logic = {
      Update: {
        saveCurrentSetting() {
          if (uiSelectionState === configState) {
          } else {
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
        <div ref={useClickOutside(setCofigPopState)} className={classes.body}>
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
