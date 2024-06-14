import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Nav.module.css";

export default function Nav() {
  const [page, setPage] = useState(0);
  const [slider, setSlider] = useState(false);

  // const handleClick = (pageNo) => {
  //   setPage(pageNo)

  // }

  return (
    <>
      <div className={classes.wrapper}>
        <div>Folio.</div>
        <div className={classes.options}>
          {/* <div> */}
          <a
            href="#Home"
            className={page === 0 && classes.border}
            onClick={() => page !== 0 && setPage(0)}
          >
            Home
          </a>
          {/* </div> */}
          <a
            href="#About"
            className={page === 1 && classes.border}
            onClick={() => page !== 1 && setPage(1)}
          >
            About
          </a>
          <a
            href="#Service"
            className={page === 2 && classes.border}
            onClick={() => page !== 2 && setPage(2)}
          >
            Service
          </a>
          <a
            href="#Project"
            className={page === 3 && classes.border}
            onClick={() => page !== 3 && setPage(3)}
          >
            Project
          </a>
          <a
            href="#Contact"
            className={page === 4 && classes.border}
            onClick={() => page !== 4 && setPage(4)}
          >
            Contact
          </a>
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
        <a
          href="#Home"
          className={page === 0 && classes.borderMob}
          onClick={() => page !== 0 && setPage(0)}
        >
          Home
        </a>
        <a
          href="#About"
          className={page === 1 && classes.borderMob}
          onClick={() => page !== 1 && setPage(1)}
        >
          About
        </a>
        <a
          href="#Service"
          className={page === 2 && classes.borderMob}
          onClick={() => page !== 2 && setPage(2)}
        >
          Service
        </a>
        <a
          href="#Project"
          className={page === 3 && classes.borderMob}
          onClick={() => page !== 3 && setPage(3)}
        >
          Project
        </a>
        <a
          href="#Contact"
          className={page === 4 && classes.borderMob}
          onClick={() => page !== 4 && setPage(4)}
        >
          Contact
        </a>
        <AiOutlineClose
          className={classes.close}
          onClick={() => (!slider ? setSlider(true) : setSlider(false))}
        />
      </div>
    </>
  );
}
