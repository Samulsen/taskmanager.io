//---------IMPORTS------------\
//__i-libraries______
import classes from "./_Entrypage.module.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//__i-components_____
import Anchor from "../0-independent/anchor/Anchor";
import NavTrigger from "./navigation-trigger/NavTrigger";
import TopArea from "./top-area/TopArea";
import MiddleArea from "./middle-area/MiddleArea";
import LowerArea from "./lower-area/LowerArea";

//---------COMPONENT----------\

const Entrypage = function () {
  //__c-hooks________
  const [canTrigger, setTrigger] = useState(false);
  const [switchRequest, setRequest] = useState(false);
  const [allowSwitch, setSwitch] = useState(false);
  const [bodyClassList, setClassList] = useState(classes.body);
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
        setClassList(classes.body + " " + classes.offLoad);
      }
    },
    closeSwitchRequest() {
      if (allowSwitch) {
        navigate("../login");
      }
    },
  };
  //__c-invocation___
  useEffect(Logic.initiateSwitchRequest, [switchRequest]);
  useEffect(Logic.closeSwitchRequest, [allowSwitch]);

  return (
    <>
      {Logic.evaluateTrigger()}
      <div
        className={bodyClassList}
        onAnimationStart={Logic.enableTrigger}
        onAnimationEnd={Logic.evalutateSwitchEnd}
      >
        <TopArea />
        <MiddleArea />
        <LowerArea />
      </div>
    </>
  );
};

//---------EXPORTS------------\

export default Entrypage;
