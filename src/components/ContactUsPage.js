import React from "react";
import "../assets/styles/ContactUsPage.scss";
import Navbar from "./navbar/navbar";

function ContactUsPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="ContactUsPage">
      <div className="navbarHom">
        <Navbar />
      </div>

      <div className="ContactUsPageBox">
        <div className="left">
          <a href="#" target="_blank">
            <button>
              <img src="./image/telegram.png" alt="" />
              Go to Telegram
            </button>
          </a>
          <br />
          <a href="#" target="_blank">
            <button>
              <img src="./images/whatsapp.png" alt="" />
              Go to Whats app
            </button>
          </a>
        </div>
        <div className="right">
          <h2>Contact us</h2>
          <p>Fill in the blank and we will contact you</p>

          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3 mt-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="name"
                name="email"
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3 mt-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="E-mail"
                name="email"
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating mt-3 mb-3">
              <input
                type="text"
                className="form-control"
                id="tel"
                placeholder="Enter password"
                name="tel"
              />
              <label htmlFor="tel">Phone number</label>
            </div>
            <div className=" mt-3 mb-3">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Text message"
                name="text"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
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
}

export default ContactUsPage;
