import React from "react";
import classes from "./Service.module.css";
import { MdDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { SiThirdweb } from "react-icons/si";
import { MdWeb } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { VscGraphScatter } from "react-icons/vsc";
import { PiGraph } from "react-icons/pi";

export default function Service() {
  return (
    <div className={classes.wrapper}>
      <div>
        <p>Services</p>
        <p>What I'm Great at</p>
        <p></p>
      </div>
      <div className={classes.services}>
        <div className={classes.service}>
          <div>
            <p>
              <MdDesignServices className={classes.icon} />
            </p>
            <p>Web Design</p>
            <p>Creative and responsive design</p>
          </div>
        </div>
        <div className={classes.service}>
          <div>
            <p>
              <FaCode className={classes.icon} />
            </p>
            <p>Web Developemnt</p>
            <p>Develope fast, secure and smooth application</p>
          </div>
        </div>
        <div className={classes.service}>
          <div>
            <p>
              <MdWeb className={classes.icon} />
            </p>
            <p>Web Testing</p>
            <p>Sraping and testing web application</p>
          </div>
        </div>
        <div className={classes.service}>
          <div>
            <p>
              <VscGraph className={classes.icon} />
            </p>
            <p>Data Mining</p>
            <p>Analysis on data and visualization</p>
          </div>
        </div>
        <div className={classes.service}>
          <div>
            <p>
              <VscGraphScatter className={classes.icon} />
            </p>
            <p>Machine Learning</p>
            <p>
              Data wrangling, feature engineering and applying different ML algo
            </p>
          </div>
        </div>
        <div className={classes.service}>
          <div>
            <p>
              <PiGraph className={classes.icon} />
            </p>
            <p>Deep Learning</p>
            <p>
              Apply and train with different algo and build model with minimum
              loss
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
