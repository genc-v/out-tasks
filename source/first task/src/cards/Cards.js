import classes from "./Cards.module.css";

// making the template for the Cards
function Cards(props) {
  return (
    <div className={classes.cardWrapper}>
      <div className={classes.cardVersion}>
        <p>
          {props.version} ({props.dateVersion})
        </p>
      </div>

      <div className={classes.cardName}>
        <div className={props.infoButton}>{props.infoButton}</div>
        {/* <img /> */}
        <p>{props.name}</p>
      </div>

      <div className={classes.cardText}>
        <p>{props.text}</p>
      </div>

      <div className={classes.cardBtn}>
        <button>Download</button>
      </div>
    </div>
  );
}

export default Cards;
