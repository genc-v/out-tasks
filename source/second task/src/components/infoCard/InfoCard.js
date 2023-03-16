import { useState } from "react";
import classes from "./infoCard.module.css";

const DATA = [
  {
    quesion: "Why Park a domain name in Parkname ?",
    answer:
      "Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success. Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success",
  },
  {
    quesion: "Why Park a domain name in Parkname ?",
    answer:
      "Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success.",
  },
  {
    quesion: "Why Park a domain name in Parkname ?",
    answer:
      "Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success.",
  },
];

function InfoCard() {
  const [selected, setSelected] = useState();

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className={classes.boxWrap}>
      {DATA.map((item, i) => (
        <div className={classes.box}>
          <div
            className={classes.tease}
            onClick={() => {
              toggle(i);
            }}
          >
            <h2>{item.quesion}</h2>
            <span className={selected === i ? "collapsed" : "expand"}>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
              </svg>
            </span>
          </div>
          <div className={selected === i ? "show" : "content"}>
            <div className={selected === i ? "showLine" : "hideLine"}></div>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoCard;
