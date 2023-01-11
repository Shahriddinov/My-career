import React, { useEffect, useState, useRef } from "react";
import POST, { BaseUrl, token } from "../../API/POST";
import GET from "../../API/GET";
import axios from "axios";

import logo from "../../img/logo.svg";
import "./company-post-job.scss";
import {
  frontend,
  backend,
  webDeisger,
  devops,
  technicalWriting,
  mobileDeveloper,
  QADeveloper,
} from "./mock";

const CompanyPostJob = () => {
  function progressfirst() {
    var firstCard = document.getElementById("first-card");
    var secondCard = document.getElementById("second-card");
    var one1 = document.getElementById("one1");
    var two1 = document.getElementById("two1");
    var text = document.getElementById("progress-text11");
    var text22 = document.getElementById("progress-text22");
    text.style.opacity = "0";
    text22.style.opacity = "1";
    one1.style.top = "34%";
    one1.style.backgroundColor = "#1D71B8";
    one1.style.border = "3px solid #FFFFFF";
    firstCard.style.bottom = "110%";
    secondCard.style.bottom = "20%";
    two1.style.top = "68%";
    two1.style.backgroundColor = "#FFFFFF";
    two1.style.border = "7px solid #1D71B8";
  }
  function progresssecond() {
    var secondCard = document.getElementById("second-card");
    var thirdCard = document.getElementById("third-card");
    var two1 = document.getElementById("two1");
    var three1 = document.getElementById("three1");
    var text2 = document.getElementById("progress-text22");
    var text3 = document.getElementById("progress-text33");
    text2.style.opacity = "0";
    text3.style.opacity = "1";
    two1.style.top = "37%";
    two1.style.backgroundColor = "#1D71B8";
    two1.style.border = "3px solid #FFFFFF";
    secondCard.style.bottom = "110%";
    thirdCard.style.bottom = "10%";
    three1.style.top = "68%";
    three1.style.backgroundColor = "#FFFFFF";
    three1.style.border = "7px solid #1D71B8";
  }
  function progressthird() {
    var fourthCard = document.getElementById("fourth-card");
    var thirdCard = document.getElementById("third-card");
    var four = document.getElementById("four1");
    var three = document.getElementById("three1");
    var text4 = document.getElementById("progress-text44");
    var text3 = document.getElementById("progress-text33");
    var secondline = document.getElementById("secondline");
    text3.style.opacity = "0";
    text4.style.opacity = "1";
    three.style.top = "40%";
    three.style.backgroundColor = "#1D71B8";
    three.style.border = "3px solid #FFFFFF";
    thirdCard.style.bottom = "130%";
    fourthCard.style.bottom = "20%";
    four.style.top = "68%";
    four.style.backgroundColor = "#FFFFFF";
    four.style.border = "7px solid #1D71B8";
    secondline.style.opacity = "1";
  }
  function progresssecondback() {
    var firstCard = document.getElementById("first-card");
    var secondCard = document.getElementById("second-card");
    var one = document.getElementById("one1");
    var two = document.getElementById("two1");
    var text = document.getElementById("progress-text11");
    var text2 = document.getElementById("progress-text22");
    text.style.opacity = "1";
    text2.style.opacity = "0";
    one.style.top = "68%";
    one.style.backgroundColor = "#FFFFFF";
    one.style.border = "7px solid #1D71B8";
    firstCard.style.bottom = "17%";
    secondCard.style.bottom = "-75%";
    two.style.top = "106%";
    two.style.backgroundColor = "#1D71B8";
    two.style.border = "3px solid #FFFFFF";
  }
  function progressthirdback() {
    var secondCard = document.getElementById("second-card");
    var thirdCard = document.getElementById("third-card");
    var two = document.getElementById("two1");
    var three = document.getElementById("three1");
    var text2 = document.getElementById("progress-text22");
    var text3 = document.getElementById("progress-text33");
    text2.style.opacity = "1";
    text3.style.opacity = "0";
    two.style.top = "68%";
    two.style.backgroundColor = "#FFFFFF";
    two.style.border = "7px solid #1D71B8";
    secondCard.style.bottom = "20%";
    thirdCard.style.bottom = "-90%";
    three.style.top = "109%";
    three.style.backgroundColor = "#1D71B8";
    three.style.border = "3px solid #FFFFFF";
  }
  function progressfourthback() {
    var fourthCard = document.getElementById("fourth-card");
    var thirdCard = document.getElementById("third-card");
    var four = document.getElementById("four1");
    var three = document.getElementById("three1");
    var text4 = document.getElementById("progress-text44");
    var text3 = document.getElementById("progress-text33");
    var secondline = document.getElementById("secondline");
    text4.style.opacity = "0";
    text3.style.opacity = "1";
    three.style.top = "68%";
    three.style.backgroundColor = "#FFFFFF";
    three.style.border = "7px solid #1D71B8";
    thirdCard.style.bottom = "10%";
    fourthCard.style.bottom = "-75%";
    four.style.top = "112%";
    four.style.backgroundColor = "#1D71B8";
    four.style.border = "3px solid #FFFFFF";
    secondline.style.opacity = "1";
  }
  function progressfourth() {
    var fourthCard = document.getElementById("fourth-card");
    var fifthCard = document.getElementById("fifth-card");
    var four = document.getElementById("four1");
    var five = document.getElementById("five1");
    var text4 = document.getElementById("progress-text44");
    var text5 = document.getElementById("progress-text55");
    var secondline = document.getElementById("secondline");
    text4.style.opacity = "0";
    text5.style.opacity = "1";
    five.style.top = "68%";
    five.style.backgroundColor = "#FFFFFF";
    five.style.border = "7px solid #1D71B8";
    fifthCard.style.bottom = "20%";
    fourthCard.style.bottom = "110%";
    four.style.top = "43%";
    four.style.backgroundColor = "#1D71B8";
    four.style.border = "3px solid #FFFFFF";
    secondline.style.opacity = "0";
  }
  function progressfifthback() {
    var fourthCard = document.getElementById("fourth-card");
    var fifthCard = document.getElementById("fifth-card");
    var four = document.getElementById("four1");
    var five = document.getElementById("five1");
    var text4 = document.getElementById("progress-text44");
    var text5 = document.getElementById("progress-text55");
    var secondline = document.getElementById("secondline");
    text4.style.opacity = "1";
    text5.style.opacity = "0";
    four.style.top = "68%";
    four.style.backgroundColor = "#FFFFFF";
    four.style.border = "7px solid #4169E1";
    fourthCard.style.bottom = "20%";
    fifthCard.style.bottom = "-75%";
    five.style.top = "115%";
    five.style.backgroundColor = "#1D71B8";
    five.style.border = "3px solid #FFFFFF";
    secondline.style.opacity = "1";
  }

  const [jobName, setJobName] = useState("");
  const [jobCategory, setJobCategory] = useState(1);
  const [jobId, setJobId] = useState();
  const [jobDescr, setJobDescr] = useState("");
  const [jobFile, setJobFile] = useState();
  const [website, setWebsite] = useState("");

  const [freelancerLvl, setFreelancerLvl] = useState();
  const [frlSkills, setFrlSkills] = useState([]);
  const [frlSkillIds, setFrlSkillIds] = useState([]);
  const [frlLang, setFrlLang] = useState([]);
  const [frlLangIds, setFrlLangIds] = useState([]);

  const [jobMoney, setJobMoney] = useState();
  const [currency, setCurrency] = useState([]);
  const [currencyId, setCurrencyId] = useState(1);
  const [jobTime, setJobTime] = useState();
  const [jobDay, setJobDay] = useState();
  const [jobDeadline, setJobDeadline] = useState([]);
  const [jobDeadlineId, setJobDeadlineId] = useState(1);
  const [recSkills, setRecSkills] = useState([]);
  const [recLang, setRecLang] = useState([]);
  const [deadlineRate, setDeadlineRate] = useState(0);
  const [byHourly, setByHourly] = useState(true);
  const [byProject, setByProject] = useState(false);

  const [categoryItems, setCategoryItems] = useState(null);

  const junior = useRef();
  const middle = useRef();
  const senior = useRef();
  const recSkillStyle = useRef();
  const recLangStyle = useRef();
  const fileLbl = useRef();
  const fileInp = useRef();

  const removeSkills = (indexToRemove) => {
    setFrlSkills(frlSkills.filter((item) => item[0].id !== indexToRemove));
    setFrlSkillIds(frlSkillIds.filter((item) => item !== indexToRemove));

    const addSkill = frlSkills.filter((item) => item[0].id === indexToRemove);
    recSkills.data.push(addSkill[0][0]);
  };

  const showRecSkills = () => {
    recSkillStyle.current.style.display = "flex";
  };

  const addingRecSkills = (idv) => {
    const delItem = recSkills.data.filter((v) => v.id === idv);
    setFrlSkills([...frlSkills, delItem]);
    setFrlSkillIds([...frlSkillIds, delItem[0].id]);

    const delRecSkill = recSkills.data.filter((v) => v.id !== idv);
    recSkills.data = delRecSkill;

    recSkillStyle.current.style.display = "none";
  };

  const showRecLang = () => {
    recLangStyle.current.style.display = "flex";
  };

  const addRecLang = (idl) => {
    const addLang = recLang.data.filter((lan) => lan.id === idl);
    setFrlLang([...frlLang, addLang]);
    setFrlLangIds([...frlLangIds, addLang[0].id]);

    const delRecLang = recLang.data.filter((lan) => lan.id !== idl);
    recLang.data = delRecLang;

    recLangStyle.current.style.display = "none";
  };

  const removeLngs = (indexToRemove) => {
    setFrlLang(frlLang.filter((item) => item[0].id !== indexToRemove));
    setFrlLangIds(frlLangIds.filter((item) => item !== indexToRemove));

    const addLang = frlLang.filter((item) => item[0].id === indexToRemove);
    recLang.data.push(addLang[0][0]);
  };

  function handleFileChange(event) {
    let files = event.target.files;
    let reader = new FileReader();

    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      setJobFile(e.target.result);
    };
  }

  const juniorLvl = () => {
    setFreelancerLvl(1);

    junior.current.style.backgroundColor = "#1D71B8";
    junior.current.style.color = "#ffffff";

    middle.current.style.backgroundColor = "#ffffff";
    middle.current.style.color = "black";

    senior.current.style.backgroundColor = "#ffffff";
    senior.current.style.color = "black";
  };

  const middleLvl = () => {
    setFreelancerLvl(2);

    junior.current.style.backgroundColor = "#ffffff";
    junior.current.style.color = "black";

    middle.current.style.backgroundColor = "#1D71B8";
    middle.current.style.color = "#ffffff";

    senior.current.style.backgroundColor = "#ffffff";
    senior.current.style.color = "black";
  };

  const seniorLvl = () => {
    setFreelancerLvl(3);

    junior.current.style.backgroundColor = "#ffffff";
    junior.current.style.color = "black";

    middle.current.style.backgroundColor = "#ffffff";
    middle.current.style.color = "black";

    senior.current.style.backgroundColor = "#1D71B8";
    senior.current.style.color = "#ffffff";
  };

  const byHourlyFunc = () => {
    setDeadlineRate(0);
    setByHourly(true);
    setByProject(false);
  };

  const byProjectFunc = () => {
    setDeadlineRate(1);
    setByHourly(false);
    setByProject(true);
  };

  const getCategory = async () => {
    try {
      const infPos = await GET.InfPosition();
      setCategoryItems(infPos.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const getSkills = async () => {
    try {
      const infSkill = await GET.InfSkills();
      setRecSkills(infSkill.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getSkills();
  }, []);

  const getLanguage = async () => {
    try {
      const infLang = await GET.Langs();
      setRecLang(infLang.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getLanguage();
  }, []);

  const getCurrency = async () => {
    try {
      const curren = await GET.InfCurrency();
      setCurrency(curren.data.result.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getCurrency();
  }, []);

  const getDeadlineRate = async () => {
    try {
      const get = await GET.InfDeadlineRate();
      setJobDeadline(get.data.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getDeadlineRate();
  }, []);

  let deadline = [];
  for (const item in jobDeadline) {
    deadline.push(item);
  }

  const titleCategory = async () => {
    try {
      const post = await POST.companyPostTitle({
        title: jobName,
        positionId: jobCategory,
      });
      if (post.status === 200) {
        progressfirst();
      } else {
        alert(post.statusText);
      }
    } catch (err) {
      alert(err);
    }
  };

  const describeJob = async () => {
    const formData = new FormData();
    formData.append("jobId", jobCategory);
    formData.append("description", jobDescr);
    formData.append("file", jobFile);

    try {
      const post = await POST.companyPostDesc(formData);
      if (post.status === 200) {
        setJobId(post.data.jobId);
        progresssecond();
      } else {
        alert(post.statusText);
      }
    } catch (err) {
      alert(err);
    }
  };

  const postTalant = async () => {
    try {
      const post = await POST.companyPostTalant({
        jobId: jobCategory,
        requiredCandidateLevel: freelancerLvl,
        requiredSkillIds: frlSkillIds,
        requiredLanguageIds: frlLangIds,
      });
      if (post.status === 200) {
        progressthird();
      } else {
        alert(post.statusText);
      }
    } catch (err) {
      alert(err);
    }
  };

  console.log(jobId, jobMoney, currencyId, deadlineRate, jobDay, jobDeadlineId);

  const postContrat = async () => {
    try {
      const post = await POST.companyPostContract({
        jobId: jobId,
        price: jobMoney,
        currencyId: currencyId,
        priceRate: deadlineRate,
        deadline: jobDay,
        deadlineRate: jobDeadlineId,
      });
      if (post.status === 200) {
        progressfourth();
      } else {
        alert(post.statusText);
      }
    } catch (err) {
      alert(err);
      console.log(err.response);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="position-absolute"></div>
        <div className="main-content">
          <div className="first-card1 card1" id="first-card">
            <p className="name-top-input">Title</p>

            <div className="all-r-l-input">
              <div className="company-inputs">
                <div>
                  <label className="mt-4 label-style" htmlFor="">
                    Name your job posting
                  </label>
                  <input
                    className="form-control inputs-all"
                    type="text"
                    placeholder="Enter name"
                    onChange={(e) => setJobName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="mt-4 label-style" htmlFor="">
                    Category
                  </label>
                  <select
                    className="form-control inputs-all"
                    onChange={(e) => {
                      setJobCategory(parseInt(e.target.value));
                    }}
                  >
                    {categoryItems?.map((item) => (
                      <option value={item?.id} key={item?.id}>
                        {item?.name}
                      </option>
                    ))}
                  </select>

                  <button
                    className="btn btn-next-to1 mt-3"
                    onClick={titleCategory}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="second-card1 card1" id="second-card">
            <p className="name-top-input">Describe the job</p>

            <div>
              <label className="mt-4 label-style" htmlFor="">
                Describe the job
              </label>
              <textarea
                placeholder="Describe"
                className="form-control company-textarea"
                onChange={(e) => setJobDescr(e.target.value)}
              />
              <label>http//</label>
              <input
                type={"text"}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="www.website.com"
                className="company-website"
              />
            </div>
            <div>
              <label className="mt-4 label-style">
                Upload the picture if necessary
              </label>

              <label
                className="mt-4 company-choose-img form-control"
                htmlFor="post-img"
                ref={fileLbl}
              >
                Drag and drop or <b>Browse</b>
              </label>
              <input
                type="file"
                className="job-file-input form-control"
                id="post-img"
                ref={fileInp}
                value={jobFile}
              />
            </div>
            <div className="all-btn-d-flex">
              <button
                className="btn btn-next-to-bac"
                onClick={progresssecondback}
              >
                Back
              </button>
              <button className="btn btn-next-to" onClick={describeJob}>
                Next
              </button>
            </div>
          </div>

          <div className="third-card card1" id="third-card">
            <p className="write-about">About the talant</p>
            <p className="label-style">
              What level of experience should your freelancer have?
            </p>
            <div className="company-choosing-freelancer-cl">
              <div
                onClick={juniorLvl}
                ref={junior}
                className="company-choosing-freelancer"
              >
                junior
              </div>

              <div
                onClick={middleLvl}
                ref={middle}
                className="company-choosing-freelancer"
              >
                middle
              </div>

              <div
                onClick={seniorLvl}
                ref={senior}
                className="company-choosing-freelancer"
              >
                senior
              </div>
            </div>
            <div>
              <label className="label-style mt-4">
                Enter skills needed (optional)
              </label>
              <div
                className="post-job-comp-add-skills"
                title="Press enter to add skills"
                htmlFor="skill"
              >
                <div className="post-job-comp-add-skills-fc">
                  <ul className="post-job-skills">
                    {frlSkills.map((item) => {
                      return (
                        <li key={item[0].id}>
                          <span>{item[0].name}</span>
                          <i onClick={() => removeSkills(item[0].id)}>x</i>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <input
                    type="text"
                    id="skill"
                    className="post-job-comp-input form-control"
                    placeholder="Figma, Html, Adobe PhotoShop"
                    title="Press enter to add skills"
                    onClick={showRecSkills}
                  />
                </div>
                <ul className="addRecSkills" ref={recSkillStyle}>
                  {recSkills?.data?.map((item) => {
                    return (
                      <li
                        key={item?.id}
                        onClick={() => addingRecSkills(item?.id)}
                      >
                        <span>{item?.name}</span>
                        <i>+</i>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <label className="label-style mt-4">
                The language a freelancer should know (optional)
              </label>

              <div
                className="post-job-comp-add-skills"
                title="Press enter to add languages"
                htmlFor="lngs"
              >
                <div className="post-job-comp-add-skills-fc">
                  <ul className="post-job-skills">
                    {frlLang.map((item) => {
                      return (
                        <li key={item[0].id}>
                          <span>{item[0].name}</span>
                          <i onClick={() => removeLngs(item[0].id)}>x</i>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <input
                    type="text"
                    id="lngs"
                    className="post-job-comp-input form-control"
                    placeholder="Uzbek, English, Russian"
                    title="Press enter to add languages"
                    onClick={showRecLang}
                  />
                </div>
                <ul className="addRecSkills" ref={recLangStyle}>
                  {recLang?.data?.map((item) => {
                    return (
                      <li key={item?.id} onClick={() => addRecLang(item?.id)}>
                        <span>{item?.name}</span>
                        <i>+</i>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="all-btn-d-flex">
              <button
                className="btn btn-next-to-bac"
                onClick={progressthirdback}
              >
                Back
              </button>
              <button className="btn btn-next-to" onClick={postTalant}>
                Next
              </button>
            </div>
          </div>
          <div className="fourth-card card1" id="fourth-card">
            <p className="name-top-input">Terms</p>
            <p className="label-style">How much do you want to pay?</p>

            <div className="company-tems-input">
              <input
                className="company-tems-input-num inputs-all1"
                type="number"
                placeholder="10"
                onChange={(e) => setJobMoney(parseInt(e.target.value))}
              />
              <select
                className="company-tems-input-slc inputs-all1"
                onChange={(e) => setCurrencyId(parseInt(e.target.value))}
              >
                {currency.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="company-tems-radio mt-4">
              <input
                id="hourly"
                type={"radio"}
                onChange={byHourlyFunc}
                checked={byHourly}
                className="company-tems-radio-item"
              />
              <label htmlFor="hourly" className="company-tems-radio-label">
                Hourly
              </label>
              <input
                id="by-project"
                type={"radio"}
                onChange={byProjectFunc}
                checked={byProject}
                className="company-tems-radio-item"
              />
              <label htmlFor="by-project" className="company-tems-radio-label">
                By project
              </label>
            </div>

            <p className="label-style mt-3">Your deadline for job</p>
            <div className="company-tems-input">
              <input
                type="number"
                className="company-tems-input-num inputs-all1"
                placeholder="10"
                onChange={(e) => setJobDay(parseInt(e.target.value))}
              />
              <select
                className="company-tems-input-slc inputs-all1"
                defaultValue={"Day"}
                onChange={(e) => setJobDeadlineId(parseInt(e.target.value))}
              >
                {deadline.map((item) => (
                  <option value={item} key={item}>
                    {jobDeadline[item]}
                  </option>
                ))}
              </select>
            </div>

            <div className="all-btn-d-flex">
              <button
                className="btn btn-next-to-bac"
                onClick={progressfourthback}
              >
                Back
              </button>
              <button className="btn btn-next-to" onClick={postContrat}>
                Next
              </button>
            </div>
          </div>

          <div className="fifth-card card1" id="fifth-card">
            <p className="name-top-input">Review and post</p>
            <p className="name-top-input">Title</p>
            <p className="label-style">Name your job posting</p>
            <p className="complete-your">{jobName}</p>

            <p className="label-style">Category</p>
            <p className="complete-your">{jobCategory}</p>

            <hr />

            <p className="name-top-input">Describe the job</p>
            <p className="label-style">{jobDescr}</p>
            <a href="https://{website}/">{website}</a>

            <div>
              <label className="label-style">Additional project files</label>
              <input
                type={"file"}
                value={jobFile}
                className="form-control mt-2"
              />
            </div>

            <hr />

            <div>
              <div className="name-top-input">About the talant</div>
              <p className="label-style">Required level</p>
              <p className="complete-your">{freelancerLvl}</p>
            </div>

            <div style={{ paddingTop: "10px" }}>
              <p className="label-style">Skills needed</p>
              <ul className="post-job-skills">
                {frlSkills?.data?.map((item) => {
                  return (
                    <li key={item?.id}>
                      <span>{item?.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div style={{ paddingTop: "10px" }}>
              <p className="label-style">
                The language a freelancer should know
              </p>
              <ul className="post-job-skills">
                {/* {frlLang.map((item, index) => {
                  return (
                    <li key={index}>
                      <span>{item}</span>
                    </li>
                  );
                })} */}
              </ul>
            </div>

            <hr />

            <div>
              <div className="name-top-input">Terms</div>
              <ul className="ul-css">
                <li style={{ marginRight: "15px" }}>
                  <p className="label-style">Price</p>
                  <span className="complete-your">
                    {/* {jobMoney} {currency} */}
                  </span>
                </li>

                <li style={{ marginRight: "15px" }}>
                  <p className="label-style">Deadline</p>
                  <span className="complete-your">
                    {/* {jobDay} {jobDeadline} */}
                  </span>
                </li>
              </ul>
            </div>

            <div className="all-btn-d-flex">
              <button
                className="btn btn-next-to-bac"
                onClick={progressfifthback}
              >
                Edit
              </button>
              <button className="btn btn-next-to">Save</button>
            </div>
          </div>
        </div>
        <div className="container-circle-all">
          <div className="container">
            <div className="career">
              <img src={logo} alt="logo" />
            </div>
            <div className="one1 dot1" id="one1"></div>
            <div className="two1 dot1" id="two1"></div>
            <div className="three1 dot1" id="three1"></div>
            <div className="four1 dot1" id="four1"></div>
            <div className="five1 dot1" id="five1"></div>

            <p id="progress-text11" className="progress-text11 progress-text">
              Title
            </p>
            <p id="progress-text22" className="progress-text22 progress-text">
              Describe the job
            </p>
            <p id="progress-text33" className="progress-text33 progress-text">
              About
            </p>
            <p id="progress-text44" className="progress-text44 progress-text">
              Contacts
            </p>
            <p id="progress-text55" className="progress-text55 progress-text">
              Review and post
            </p>

            <div className="firstline"></div>
            <div className="secondline" id="secondline"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPostJob;
