import React from "react";
import image from "../../../assets/images/sss.jpeg";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import classes from "./Portfolio.module.css";
import { Link } from "react-router-dom";
import { usePDF } from "react-to-pdf";
import resumePdf from "../../../assets/pdf/resume_Shazzadur_Rahman.pdf";

export default function Portfolio() {
const { toPDF, targetRef } = usePDF({
    filename: resumePdf,
  });

  const onButtonClick = () => {
    const pdfUrl = resumePdf;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.intro}>
        <div>
          Hello I'm
          <p className={classes.line}></p>
        </div>
        <div>Shazzadur Rahman</div>
        <div>Software Engineer</div>
        {/* <div>
          A meticulous and erudite catalyst with a strong passion for software
          and AI. Acquired skills ranging from analytics and development to
          delivering solutions beyond technology. A smooth absorber of
          developing knowledge and information, seeking an opportunity to work
          in this software domain.
        </div> */}
        <button onClick={() => onButtonClick()}>Download Resume</button>
        <div className={classes.social}>
          <div>React JS</div>|<div>FastAPI</div>|<div>MongoDB</div>|
          <div>Scikit-Learn</div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.image}>
          <img src={image} alt="" loading="lazy" />
        </div>
        <div className={classes.socialBox}>
          <div>
            <Link
              to={"https://www.linkedin.com/in/shazzadur-rahman-36b087207/"}
            >
              <FaLinkedin />
            </Link>
          </div>
          <div>
            <Link to={"https://www.github.com/shzzd/"}>
              <FaGithub />
            </Link>
          </div>
          <div>
            <Link to={"https://www.facebook.com/shazzadur.rahman.359/"}>
              <FaSquareFacebook />
            </Link>
          </div>
          <div>
            <Link to={"https://www.instagram.com/shazzadbinnoor/"}>
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
