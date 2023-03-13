import React, { useEffect } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = (props) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="contact-us-wrapper">
      <Row>
        <Col
          md={6}
          className="right-column"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
        >
          <div className="contact-form-box">
            <img
              className="contact"
              src="./images/contact-us.svg"
              alt="person"
            />
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
        </Col>
        <Col
          md={6}
          className="left-column"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
        >
          <h1>THOUSANDS!!!</h1>
          <p>
            Thousands of <b>workers</b> and <b>employers </b>
            are already waiting for you!
          </p>
          <Button>Join our team right now</Button>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
