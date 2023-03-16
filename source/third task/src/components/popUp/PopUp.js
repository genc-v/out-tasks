import classes from "./PopUp.module.css";
import MyRow from "./MyRow";

function PupUp(props) {
  return (
    <div>
      <div className={classes.BACKGROUND1}>
        <div className={classes.ColorPickerWrapper}>
          <div className={classes.Title}>
            <h3>Theme Color</h3>
            <h3 className={classes.TitleB}>Change Theme</h3>
          </div>
          <MyRow title="First Color"></MyRow>
          <MyRow title="Background Color"></MyRow>
          <MyRow title="Button Color"></MyRow>
          <MyRow title="Button Border Color"></MyRow>
          <MyRow title="Button MouseOver Color"></MyRow>
          <div className={classes.Button}>
            <button onClick={props.onClick} className={classes.Button1}>
              {" "}
              Cancel
            </button>
            <button onClick={props.onClick} className={classes.Button2}>
              {" "}
              Save
            </button>
          </div>
        </div>

        <div className={classes.BACKGROUND} onClick={props.onClick}></div>
      </div>
    </div>
  );
}

export default PupUp;
