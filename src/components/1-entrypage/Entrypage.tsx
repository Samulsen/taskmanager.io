//---------IMPORTS------------\

import classes from "./_Entrypage.module.scss";
import { useState, useEffect, useMemo } from "react";
//__i-components_____
import NavTrigger from "./navigation-trigger/NavTrigger";
import TopArea from "./top-area/TopArea";
import MiddleArea from "./middle-area/MiddleArea";
import LowerArea from "./lower-area/LowerArea";
import { useNavigate } from "react-router-dom";

//---------COMPONENT----------\

const Entrypage = function () {
  //__c-hooks________
  const [canTrigger, setTrigger] = useState(false);
  const [switchRequest, setRequest] = useState(false);
  const [allowSwitch, setSwitch] = useState(false);
  const [anchorClassList, setClassList] = useState(classes.anchor);
  const navigate = useNavigate();
  //__c-logic________

  const Logic = {
    evaluateTrigger() {
      if (canTrigger) {
        return <NavTrigger sendClickRequest={setRequest} />;
      }
    },
    enableTrigger(e: React.AnimationEvent) {
      if (e.animationName.includes("sublineOnLoad")) {
        setTrigger(true);

        return;
      }
    },
    evalutateSwitchEnd(e: React.AnimationEvent) {
      if (e.animationName.includes("fadeOut")) {
        setSwitch(true);
        return;
      }
    },

    initiateSwitchRequest() {
      if (switchRequest) {
        setClassList(classes.anchor + " " + classes.offLoad);
      }
    },
    closeSwitchRequest() {
      if (allowSwitch) {
        navigate("../login");
      }
    },
  };
  //__c-invocation___
  useEffect(() => {
    Logic.initiateSwitchRequest();
  }, [switchRequest]);
  useEffect(() => {
    Logic.closeSwitchRequest();
  }, [allowSwitch]);

  return (
    <div
      className={classes.main}
      onAnimationStart={Logic.enableTrigger}
      onAnimationEnd={Logic.evalutateSwitchEnd}
    >
      {Logic.evaluateTrigger()}
      <div className={anchorClassList}>
        <TopArea />
        <MiddleArea />
        <LowerArea />
      </div>
    </div>
  );
};

//---------EXPORTS------------\

export default Entrypage;
