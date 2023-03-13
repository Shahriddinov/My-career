import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { displayCircle } from "../actions/careerAction";
import Navbar from "./navbar/navbar";

const enhancer = connect(
  ({ auth: { initialValue, homeCircleVisible }, size: { size } }) => ({
    initialValue,
    size,
  })
);

const AboutUs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayCircle());
  }, []);

  return (
    <div className="about-page" id="">
      <div className="navbarHom">
        <Navbar />
      </div>

      <div className="about-page-box">
        <div className="left">
          <video id="video1" src="./images/videoForWork.mp4" controls />
        </div>
        <div className="right">
          <div className="box ">
            <h3>About us</h3>
            <div className="linkBox">
              <a href="#">
                <img src="./images/iconTelegram.svg" alt="" />
              </a>
              <a href="#">
                <img src="./images/iconFacebook.svg" alt="" />
              </a>
              <a href="#">
                <img src="./images/iconInstogram.svg" alt="" />
              </a>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            doloribus dolorum fugiat, iste iure iusto nihil non possimus rem
            saepe soluta vel voluptates.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            doloribus dolorum fugiat, iste iure iusto nihil non possimus rem
            saepe soluta vel voluptates.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            doloribus dolorum fugiat, iste iure iusto nihil non possimus rem
            saepe soluta vel voluptates.
          </p>
        </div>
      </div>
      <div className="patternn2">
        <img src="./images/white-ell1.svg" alt="pattern" />
        <img src="./images/white-ell2.svg" alt="pattern" />
        <img src="./images/white-ell3.svg" alt="pattern" />
        <img src="./images/white-ell4.svg" alt="pattern" />
        <img src="./images/white-ell5.svg" alt="pattern" />
      </div>
    </div>
  );
};

export default enhancer(AboutUs);
