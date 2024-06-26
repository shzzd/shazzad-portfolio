import React from "react";
import About from "./About/About";
import Nav from "./Nav/Nav";
import Portfolio from "./Portfolio/Portfolio";
import classes from "./Home.module.css";
import Service from "./Service/Service";
import Project from "./Project/Project";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div className={classes.wrapper}>
      <Nav />
      <Portfolio />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
