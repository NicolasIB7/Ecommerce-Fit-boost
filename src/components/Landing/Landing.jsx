import React from "react";
import { NavLink } from "react-router-dom";
import "./landing.css";

function Landing() {
  return (
    <>
      <div className='fit-boost-container'>
        <h1 className='fit-boost'>Fit-boost</h1>
      </div>

      <div class='wrap'>
        <NavLink to='/home'>
          <button class='buttonn'>INGRESAR</button>
        </NavLink>
      </div>
    </>
  );
}

export default Landing;
