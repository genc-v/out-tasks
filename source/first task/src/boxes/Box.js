import classes from "./box.module.css";

// making the template for the boxes
function Box(props) {
  return (
    // the left side
    <div className={classes.box}>
      <div className={classes.circle}>
        <img src={props.image} alt="" />
      </div>
      {/* the right side */}
      <div className={classes.boxText}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Box;
