import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Nav.module.css";

export default function Nav() {
  const [page, setPage] = useState(0);
  const [slider, setSlider] = useState(false);
  return (
    <>
      <div className={classes.wrapper}>
        <div>Folio.</div>
        <div className={classes.options}>
          <div
            className={page === 0 && classes.border}
            onClick={() => page !== 0 && setPage(0)}
          >
            Home
          </div>
          <div
            className={page === 1 && classes.border}
            onClick={() => page !== 1 && setPage(1)}
          >
            About
          </div>
          <div
            className={page === 2 && classes.border}
            onClick={() => page !== 2 && setPage(2)}
          >
            Project
          </div>
          <div
            className={page === 3 && classes.border}
            onClick={() => page !== 3 && setPage(3)}
          >
            Contact
          </div>
        </div>
        <div
          onClick={() => (!slider ? setSlider(true) : setSlider(false))}
          className={!slider ? classes.optionsMob : classes.optionsMobClose}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={!slider ? classes.sliderClose : classes.slider}>
        <div
          className={page === 0 && classes.borderMob}
          onClick={() => page !== 0 && setPage(0)}
        >
          Home
        </div>
        <div
          className={page === 1 && classes.borderMob}
          onClick={() => page !== 1 && setPage(1)}
        >
          About
        </div>
        <div
          className={page === 2 && classes.borderMob}
          onClick={() => page !== 2 && setPage(2)}
        >
          Project
        </div>
        <div
          className={page === 3 && classes.borderMob}
          onClick={() => page !== 3 && setPage(3)}
        >
          Contact
        </div>
        <AiOutlineClose
          className={classes.close}
          onClick={() => (!slider ? setSlider(true) : setSlider(false))}
        />
      </div>
    </>
  );
}
