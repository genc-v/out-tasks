import Cards from "./Cards";
import classes from "./CardList.module.css";

function CardList(props) {
  return (
    // getting the data and loading them into the template Card.js
    <div className={classes.page2}>
      <div className={classes.flexWrap}>
        {props.data.map((card) => (
          <Cards
            version={card.version}
            text={card.text}
            dateVersion={card.dateVersion}
            infoButton={card.infoButton}
            name={card.name}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;
