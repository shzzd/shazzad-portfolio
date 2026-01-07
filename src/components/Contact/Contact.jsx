import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import classes from "./Contact.module.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div id="Contact" className={classes.wrapper}>
      <div className={classes.title}>
        <p>Contacts</p>
        <p>Get in Touch at Your Convenience</p>
        <p></p>
      </div>
      <div>
        <div className={classes.social}>
          <div>
            <Link to={"https://www.linkedin.com/in/shazzadur-rahman-36b087207/"}>
            <FaLinkedinIn className={classes.icon} /></Link>
            in/shazzadur-rahman-36b087207/
          </div>
          <div>
            <Link to={"https://www.github.com/shzzd/"}>
            <FaGithubAlt className={classes.icon} /></Link>
            /shzzd
          </div>
          <div>
            <Link to={"https://www.facebook.com/shazzadur.rahman.359/"}>
            <FaFacebookF className={classes.icon} /></Link>
            shazzadur.rahman.359/
          </div>
          <div>
            <Link to={"https://www.instagram.com/shazzadbinnoor/"}>
            <FaInstagram className={classes.icon} /></Link>
            shazzadbinnoor/
          </div>
        </div>
        <div className={classes.contact}>
          <p>Start a project?</p>
          <p>
            <MdOutlineMailOutline className={classes.iconMail} />
            shazzadurrahman787@gmail.com
          </p>
          <p>
            <IoMdCall className={classes.iconCantact} />
            +966-500459278 (🇸🇦)
          </p>
          <p>
            <FaWhatsapp className={classes.iconCantact} />
            +966-575821404 (🇸🇦)
          </p>
          <p>
            <FaWhatsapp className={classes.iconCantact} />
            +880-1876218597 (🇧🇩)
          </p>
        </div>
      </div>
    </div>
  );
}
