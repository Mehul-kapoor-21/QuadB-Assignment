import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Rating.css"
const Rating = ({rate}) => {
  return (
    <div >
    <CircularProgressbar
      value={rate?.show?.rating?.average}
      text={rate?.show?.rating?.average}
      maxValue={10}
      styles={buildStyles({
        pathColor:
          rate?.show?.rating?.average < 5
            ? "red"
            : rate?.show?.rating?.average < 7
            ? "orange"
            : "green",
        textSize: "24px",
      })}
    />
  </div>
  )
}

export default Rating