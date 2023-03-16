import Box from "./Box";
import classes from "./BoxList.module.css";

function BoxList(props) {
  return (
    // getting the data and loading them into the template Box.js
    <div className={classes.page1}>
      <div className={classes.flexWrap}>
        {props.boxes.map((box) => (
          <Box title={box.title} text={box.text} />
        ))}
      </div>
    </div>
  );
}

export default BoxList;
