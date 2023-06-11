//---------IMPORTS------------\
//__i-libraries______
import {
  useState,
  FC,
  Dispatch,
  SetStateAction,
  MouseEvent,
  useEffect,
} from "react";
import { AuthContext } from "../../../../../../context/AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../../firebase";
//__i-style__________
import classes from "./_ConfigPop.module.scss";
import uncheckedIcon from "./unchecked.svg";
import checkIcon from "./check.svg";
import arrowIcon from "./arrow.svg";
//__i-context________
import { ConfigContext } from "../../../../../../context/ConfigContext";
//__i-helper_________
import useClickOutside from "../../../../../../hooks/useClickOutside";

//---------COMPONENT----------\
const ConfigPop: FC<{ setConfigPopState: Dispatch<SetStateAction<boolean>> }> =
  function ({ setConfigPopState }) {
    //__c-hooks________

    const { autoDeleteOnDone } = ConfigContext();
    const uid = AuthContext()?.userObject?.uid;
    const [uiSelectionState, setUISelectionState] = useState(autoDeleteOnDone);

    //__c-logic________

    const Logic = {
      Update: {
        save(event: MouseEvent<HTMLDivElement>) {
          event.stopPropagation();
          if (!(uiSelectionState === autoDeleteOnDone)) {
            const ref = doc(db, `MainUserDataPool_${uid}`, "UserConfig");
            const updatedData = { autoDeleteOnDone: uiSelectionState };
            updateDoc(ref, updatedData).catch();
          }
          setConfigPopState(false);
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

    useEffect(() => {
      setUISelectionState(autoDeleteOnDone);
    }, [autoDeleteOnDone]);

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
            onClick={Logic.Update.save.bind(Logic)}
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
