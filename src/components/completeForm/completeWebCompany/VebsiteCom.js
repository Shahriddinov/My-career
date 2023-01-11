import React, { useEffect, useState } from "react";
import useStore from "../../../StoreZustand/StoreZustand";
import "./vebsite.scss";
import VebsiteComponent from "./VebsiteComponent";

function VebsiteCompany(props) {
  const {
    CompanyWebsiteHendler,
    CompanyWhatsappHendler,
    CompanyFacebookHendler,
    CompanyInstagramHendler,
    CompanyTelegramHendler,
    CompanyGithubHendler,
    CompanyTwitterHendler,
  } = useStore();

  const [website, setWebsite] = useState("");
  const [watsapp, setWatsapp] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [telegram, setTelegram] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");

  const ContactArr = [
    {
      id: 1,
      icon: "image/Frame 42126.png",
      img: "image/watsApp.png",
      isActive: true,
      value: "",
    },
    {
      id: 2,
      icon: "image/Frame 42127.png",
      img: "image/facebook.png",
      isActive: true,
      value: "",
    },
    {
      id: 3,
      icon: "image/Frame 42128.png",
      img: "image/instagram.png",
      isActive: true,
      value: "",
    },
    {
      id: 4,
      icon: "image/Frame 42129.png",
      img: "image/telegram.png",
      isActive: true,
      value: "",
    },
    {
      id: 5,
      icon: "image/Frame 42130.png",
      img: "image/gitHub.png",
      isActive: true,
      value: "",
    },
    {
      id: 6,
      icon: "image/Frame 42131.png",
      img: "image/twitter.png",
      isActive: true,
      value: "",
    },
  ];
  const [arr, setarr] = useState([...ContactArr]);
  const [arrisActive, setArrisActive] = useState([]);

  let contactHendler = (item) => {
    item.isActive = false;
    setarr([
      ...arr.map((el) => {
        if (el.id === item.id) {
          el.isActive = false;
          return el;
        }
        return el;
      }),
    ]);
  };

  let contactHendler1 = (item) => {
    item.isActive = true;
    setarr([
      ...arr.map((el) => {
        if (el.id === item.id) {
          el.isActive = true;
          return el;
        }
        return el;
      }),
    ]);
  };

  useEffect(() => {
    setArrisActive(arr.filter((el) => el.isActive != true));
  }, [arr]);

  const ValueHendler = (e) => {
    if (e.target.id == 0) {
      CompanyWhatsappHendler(e.target.value);
    }
    if (e.target.id == 1) {
      CompanyFacebookHendler(e.target.value);
    }
    if (e.target.id == 2) {
      CompanyInstagramHendler(e.target.value);
    }
    if (e.target.id == 3) {
      CompanyTelegramHendler(e.target.value);
    }
    if (e.target.id == 4) {
      CompanyGithubHendler(e.target.value);
    }
    if (e.target.id == 5) {
      CompanyTwitterHendler(e.target.value);
    }
  };

  return (
    <>
      <p className="write-about">Contacts</p>
      <div>
        <label className="img-label" htmlFor="">
          <img src="image/Group.png" alt="" />
        </label>
        <input
          onChange={(e) => CompanyWebsiteHendler(e.target.value)}
          type="text"
          className="form-control inputs-all1 websiteInput mt-4"
          placeholder="Provide a link to your website "
        />
      </div>
      {arr.map((item, i) => {
        return item.isActive === false ? (
          <VebsiteComponent
            key={i}
            i={i}
            ValueHendler={ValueHendler}
            contactHendler1={contactHendler1}
            item={item}
          />
        ) : (
          ""
        );
      })}
      <p className="complete-your mt-3">
        Choose in which of these social networks you have an account
      </p>
      <div className="firstLine-img mt-4">
        {arr.map((item, i) => {
          return item.isActive == true ? (
            <img
              src={item.icon}
              key={i}
              alt=""
              onClick={() => contactHendler(item)}
            />
          ) : (
            ""
          );
        })}
      </div>
    </>
  );
}

export default VebsiteCompany;
