//---------IMPORTS------------\

import classes from "./_Entrypage.module.scss";
import { useState, useEffect } from "react";
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
        console.log("Enabled trigger!");
        return;
      }

      if (e.animationName.includes("fadeOut")) {
        console.log("outFade animation has ended!");
        setSwitch(true);
        return;
      }
    },
    initiateSwitchRequest() {
      if (switchRequest) {
        console.log("i will iniate the switch sequence");
        setClassList(classes.anchor + " " + classes.offLoad);
      }
    },
    closeSwitchRequest() {
      if (allowSwitch)
        console.log("switch allowed, i will navigate to ./login!");
      navigate("./login");
    },
  };
  //__c-invocation___
  useEffect(() => {
    Logic.initiateSwitchRequest();
    console.log("iniateSwitch ran!");
    console.log(switchRequest);
  }, [switchRequest, Logic]);
  useEffect(() => {
    Logic.closeSwitchRequest();
    console.log("SwitchREquest ran!");
    console.log(allowSwitch);
  }, [allowSwitch, Logic]);

  return (
    <div className={classes.main} onAnimationStart={Logic.enableTrigger}>
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
