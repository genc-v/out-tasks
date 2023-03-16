import { useState } from "react";
import classes from "./SmallInfo.module.css";

export const A = [
  {
    insideQuesion: [
      "How does Parkname seperate itself from other domain name parking companies?",
    ],
    insideAnswer: [
      "Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable.Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.",
    ],
  },
  {
    insideQuesion: ["Is Parkname Parking actually free?"],
    insideAnswer: [
      "Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable.Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.",
    ],
  },
  {
    insideQuesion: ["What do you do?"],
    insideAnswer: [
      "Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable.Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.",
    ],
  },
  {
    insideQuesion: ["When was Parkname first founded?"],
    insideAnswer: [
      "Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable.Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.",
    ],
  },
];

function SmallInfo() {
  const [selected, setSelected] = useState();

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className={classes.boxWrap}>
      {A.map((item, i) => (
        <div className={classes.box}>
          <div
            className={classes.tease}
            onClick={() => {
              toggle(i);
            }}
          >
            <h2>{item.insideQuesion}</h2>
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
            {item.insideAnswer}
          </div>
        </div>
      ))}
    </div>
  );
}
export default SmallInfo;
