import { useState } from "react";
import classes from "./ButtonPopUp.module.css";
import PopUp from "./PopUp";

function ButtonPopUp() {
  const [selected, setSelected] = useState();

  function show() {
    setSelected(true);
  }
  function hide() {
    setSelected(false);
  }

  return (
    <div className={classes.boxWrap}>
      <div className={classes.box}>
        <h1 onClick={show}>Change Color</h1>
      </div>
      {selected && <PopUp onClick={hide} />}
    </div>
  );
}

export default ButtonPopUp;
