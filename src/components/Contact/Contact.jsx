import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import classes from "./Contact.module.css";

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
            <FaLinkedinIn className={classes.icon} />
            in/shazzadur-rahman-36b087207/
          </div>
          <div>
            <FaGithubAlt className={classes.icon} />
            /shzzd
          </div>
          <div>
            <FaFacebookF className={classes.icon} />
            shazzadur.rahman.359/
          </div>
          <div>
            <FaInstagram className={classes.icon} />
            shazzadbinnoor/
          </div>
        </div>
        <div className={classes.contact}>
          <p>Start a project?</p>
          <p>
            <MdOutlineMailOutline className={classes.iconCantact} />
            shazzadurrahman787@gmail.com
          </p>
          <p>
            <IoMdCall className={classes.iconCantact} />
            +880-1876218597
          </p>
        </div>
      </div>
    </div>
  );
}
