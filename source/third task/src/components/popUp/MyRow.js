import classes from "./MyRow.module.css";
import { useState } from "react";

function MyRow(props) {
  const [color, setColor] = useState("");
  return (
    <div className={classes.row}>
      <h2>{props.title}</h2>
      <div>
        <label for="color">{color.toUpperCase()}</label>
        <input
          type="color"
          id="head"
          name="head"
          onChange={(e) => setColor(e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default MyRow;
