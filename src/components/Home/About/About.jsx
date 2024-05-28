import React from "react";
import classes from "./About.module.css";
import image from "../../../assets/images/b.jpeg";

export default function About() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.left}>
        <img src={image} alt="" />
      </div>
      <div className={classes.right}>
        <div>
          About Me<span></span>
        </div>
        <div>
          A meticulous and erudite catalyst with a strong passion for software
          and AI. Acquired skills ranging from analytics and development to
          delivering solutions beyond technology. A smooth absorber of
          developing knowledge and information, seeking an opportunity to work
          in this software domain.
        </div>
      </div>
    </div>
  );
}
