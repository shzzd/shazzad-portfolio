import React from "react";
import classes from "./Project.module.css";

export default function Project() {
  return (
    <div className={classes.wrapper}>
      <div>
        <p>Projects</p>
        <p>Some of My Distinguish Work</p>
        <p></p>
      </div>
      <div className={classes.officials}>
        <div>Official work</div>
        <div></div>
      </div>
    </div>
  );
}
