import React from "react";
import About from "./About/About";
import Nav from "./Nav/Nav";
import Portfolio from "./Portfolio/Portfolio";
import classes from "./Home.module.css";

export default function Home() {
  return (
    <div className={classes.wrapper}>
      <Nav />
      <Portfolio />
      <About />
    </div>
  );
}
