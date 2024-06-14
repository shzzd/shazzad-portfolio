import React from "react";
import classes from "./PopUpTemplate2.module.css";

export default function PopUpTemplate2({ children }) {
  return (
    <div className={classes.model}>
      <div className={classes.overlay}></div>
      {children}
    </div>
  );
}
