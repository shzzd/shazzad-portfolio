import React, { useState } from "react";
import img1 from "../../../assets/images/project/data/dt.png";
import img2 from "../../../assets/images/project/data/dt2.png";
import img3 from "../../../assets/images/project/biztrade/bd.png";
import img4 from "../../../assets/images/project/biztrade/bdsub.png";
import img5 from "../../../assets/images/project/data/cd.png";
import img6 from "../../../assets/images/project/data/dtAdmin.png";
import img7 from "../../../assets/images/project/biztrade/bddoc.png";
import img8 from "../../../assets/images/project/biztrade/bdprodlist.png";
import img9 from "../../../assets/images/project/biztrade/mb.png";
import { IoClose } from "react-icons/io5";
import classes from "./Project.module.css";
import PopUpTemplate2 from "../Resources/PopUpTemplate2/PopUpTemplate2";

export default function Project() {
  const [popUp, setPopUp] = useState(false);
  const [imgNo, setImgNo] = useState(0);
  const img = [img1, img2, img3, img4, img5, img6, img7, img8];
  const link = [
    "www.data.bizdatainsights.com",
    "www.data.bizdatainsights.com/dashboard",
    "www.biztradebd.com",
    "www.biztradebd.com/sme-loan",
    "www.data.bizdatainsights.com/company-database",
    "www.admin.bizdatainsights.com",
    "www.seller.biztradebd.com",
    "www.seller.biztradebd.com/product-list",
  ];
  const handleImage = (img) => {
    setImgNo(img);
    setPopUp(true);
  };
  return (
    <>
      {popUp && (
        <PopUpTemplate2>
          <div className={classes.fullImage}>
            <div>
              <img src={img[imgNo]} alt="" />
            </div>
            <div>The website link: {link[imgNo]}</div>
            <IoClose
              onClick={() => setPopUp(false)}
              className={classes.close}
            />
          </div>
        </PopUpTemplate2>
      )}
      <div id="Project" className={classes.wrapper}>
        <div className={classes.title}>
          <p>Projects</p>
          <p>Some of My Distinguish Work</p>
          <p></p>
        </div>
        <div className={classes.officials}>
          <div className={classes.projects}>
            <div>
              <img
                onClick={() => handleImage(0)}
                src={img[0]}
                alt=""
                loading="lazy"
              />
              <img
                onClick={() => handleImage(1)}
                src={img[1]}
                alt=""
                loading="lazy"
              />
            </div>
            <div>
              <img
                onClick={() => handleImage(2)}
                src={img[2]}
                alt=""
                loading="lazy"
              />
              <img
                onClick={() => handleImage(3)}
                src={img[3]}
                alt=""
                loading="lazy"
              />
            </div>
            <div>
              <img
                onClick={() => handleImage(4)}
                src={img[4]}
                alt=""
                loading="lazy"
              />
              <img
                onClick={() => handleImage(5)}
                src={img[5]}
                alt=""
                loading="lazy"
              />
            </div>
            <div>
              <img
                onClick={() => handleImage(6)}
                src={img[6]}
                alt=""
                loading="lazy"
              />
              <img
                onClick={() => handleImage(7)}
                src={img[7]}
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          {/* <div className={classes.work}>
          <div className={classes.item1}>
            <img src={img1} alt="" />
          </div>
          <div className={classes.item2}>
            <img src={img9} alt="" />
          </div>
          <div className={classes.item3}>
            <img src={img1} alt="" />
          </div>
          <div className={classes.item4}>
            <img src={img1} alt="" />
          </div>
          <div className={classes.item5}>
            <img src={img1} alt="" />
          </div>
          <div className={classes.item6}>
            <img src={img1} alt="" />
          </div>
          <div className={classes.item7}>
            <img src={img1} alt="" />
          </div>
          <div className={classes.item8}>
            <img src={img1} alt="" />
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
}
