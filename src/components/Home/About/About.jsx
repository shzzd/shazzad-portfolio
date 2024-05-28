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
        <div>
          I'm skilled in Javascript and Python and have good knowledge of React
          Js and FastAPI. Moreover I gained some experience with MySQL, MongoDB
          and performed CRUD operations and integrated it with the front-end.
        </div>
        <div>
          Currently, I am working as a Software Engineer (front end), where I
          have gained invaluable experience in software development and
          teamwork. I am a capable and consistent problem solver skilled at
          prioritizing and managing projects with proficiency. I am a very quick
          learner and have experience in learning and applying new technologies
          as appropriate.
        </div>
        <div>
          I have completed my BSc in Computer Science and Engineering from North
          South University, specializing in AI as my major elective. During my
          studies, I undertook numerous machine learning projects, including
          several in deep learning, where I developed a solid understanding of
          machine learning principles, pattern recognition, and backpropagation.
          Additionally, I acquired skills in data cleaning, engineering,
          analysis, and training.
        </div>
        {/* <div>
          I would like to share the live link to my official project, where I am
          mostly working on the front-end development. Here I am solely
          responsible for the frontend part and worked teamwise on the backend
          for these projects. Here is the link given below:
        </div> */}
      </div>
    </div>
  );
}
