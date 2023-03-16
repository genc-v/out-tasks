import CardList from "./CardList";

// the data used for the cards
const InfoCard = [
  {
    version: "3.3.0",
    dateVersion: "14/05/2018",
    infoButton: "New",
    name: "Kevin Joe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi harum veritatis qui assumenda. Optio, ipsa",
  },
  {
    version: "3.3.0",
    dateVersion: "14/05/2018",
    infoButton: "Fix",
    name: "Kevin Joe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi harum veritatis qui assumenda. Optio, ipsa",
  },
  {
    version: "3.3.0",
    dateVersion: "14/05/2018",
    infoButton: "Improvment",
    name: "Kevin Joe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi harum veritatis qui assumenda. Optio, ipsa",
  },
  {
    version: "3.3.0",
    dateVersion: "14/05/2018",
    infoButton: "Fix",
    name: "Kevin Joe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi harum veritatis qui assumenda. Optio, ipsa",
  },
  {
    version: "3.3.0",
    dateVersion: "14/05/2018",
    infoButton: "New",
    name: "Kevin Joe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi harum veritatis qui assumenda. Optio, ipsa",
  },

  {
    version: "3.3.0",
    dateVersion: "14/05/2018",
    infoButton: "Improvment",
    name: "Kevin Joe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi harum veritatis qui assumenda. Optio, ipsa",
  },
];

function CardData() {
  // giving the data to the cards
  return <CardList data={InfoCard} />;
}

export default CardData;
