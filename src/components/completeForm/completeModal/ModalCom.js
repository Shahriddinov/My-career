import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import GET from "../../../API/GET";
import { BaseUrl, token } from "../../../API/POST";
import useStore from "../../../StoreZustand/StoreZustand";
import "./modal.scss";

function ModalCom({
  FrlExpDescrHandler,
  FrlExpDescr,
  FrlExpStartHandler,
  FrlExpStart,
  FrlExpEndHandler,
  FrlExpEnd,
  FrlCurrentWorkHandler,
  FrlCurrentWork,
  FrlExperienceCompJobHandler,
  FrlExperienceCompJob,
  FrlExperienceCompNameHandler,
  FrlExperienceCompName,
}) {
  const [experience, setExperience] = useState([]);

  const getExp = async () => {
    await GET.Exp().then((res) => {
      setExperience(res.data.data);
    });
  };

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const addTask = async () => {
    const formData = new FormData();
    formData.append("CompanyName", FrlExperienceCompName);
    formData.append("Job", FrlExperienceCompJob);
    formData.append("CurrentWorking", FrlCurrentWork);
    formData.append("Descripeion", FrlExpDescr);
    try {
      await axios({
        method: "post",
        url: `${BaseUrl}api/FreelancerExperience`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
    setModal(!modal);

    // if (FrlExperienceCompName.trim().length > 0, FrlExperienceCompJob.trim().length > 0, FrlCurrentWork !== false, FrlExpStart !== "дд.мм.гггг", FrlExpEnd !== "дд.мм.гггг",
    // FrlExpDescr.trim().length > 0){
    //     setModal(false);
    //     const newTask = dataList;
    //     let id = Date.now();
    //     newTask.push({id:id, FrlExperienceCompName,FrlExperienceCompJob,FrlCurrentWork,FrlExpStart,FrlExpEnd,FrlExpDescr});
    //     setDataList(newTask);
    //     FreelancDataListJobHendler(newTask)
    //     FrlExperienceCompNameHandler(""); FrlExpDescrHandler(""); FrlExpEndHandler(""); FrlExpStartHandler(""); FrlExperienceCompJobHandler("")
    // }
    // else {
    //     alert("Fo'rmani to'ldiring !!!")
    // }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${BaseUrl}api/FreelancerExperience/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const editTask = async (id) => {
    // try {
    //     await axios.put(`${BaseUrl}api/FreelancerExperience/${id}`)
    // } catch (error) {
    //     console.log(error);
    // }
  };

  useEffect(
    () => {
      getExp();
    },
    [],
    [experience]
  );

  return (
    <>
      <div>
        <p className="write-about">Work Experience</p>
        <p className="complete-your">
          Freelancers who add their experience are twice as likely to win work.
          But if you’re just starting out, you can still create a great profile.
          Just head on to the next page.
        </p>
        {experience.map((item) => (
          <div key={item.id} className="map-modal mt-2">
            <div className="w-75">
              <p className="comName">{item.companyName}</p>
              <p className="tagName">{item.job}</p>
            </div>
            <div className="modal-image-e-d">
              <img
                src="image/edit (1).png"
                alt=""
                onClick={() => editTask(item.id)}
              />

              <img
                onClick={() => deleteTask(item.id)}
                src="image/trash-2.png"
                alt=""
              />
            </div>
          </div>
        ))}
        <button
          onClick={toggle}
          className="form-control inputs-all1 add-bnt- mt-3"
        >
          + Add new
        </button>
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Work Experience</ModalHeader>
        <ModalBody>
          <input
            onChange={(e) => FrlExperienceCompNameHandler(e.target.value)}
            placeholder="Company name"
            type="text"
            className="form-control mt-4 inputs-all1"
          />
          <input
            onChange={(e) => FrlExperienceCompJobHandler(e.target.value)}
            placeholder="Job"
            type="text"
            className="form-control mt-4 inputs-all1"
          />
          <div className="current-div">
            <input
              onChange={(e) => FrlCurrentWorkHandler(!FrlCurrentWork)}
              className="checkbox-in mt-4"
              type="checkbox"
              id="expInput"
            />
            <label
              className="select-curr-label"
              htmlFor="expInput"
              style={{ padding: 0, margin: 0 }}
            >
              I am currently working in this role
            </label>
          </div>
          <div className="all-r-l-input">
            <div className="right-input">
              <label className="mt-3 select-curr" htmlFor="">
                Date from
              </label>
              <input
                onChange={(e) => FrlExpStartHandler(e.target.value)}
                type="date"
                className="form-control inputs-all"
              />
            </div>
            <div className="left-input">
              <div>
                <label className="mt-3 select-curr" htmlFor="">
                  to
                </label>
                <input
                  onChange={(e) => FrlExpEndHandler(e.target.value)}
                  type="date"
                  className="form-control inputs-all"
                />
              </div>
            </div>
          </div>
          <textarea
            onChange={(e) => FrlExpDescrHandler(e.target.value)}
            className="form-control mt-3"
            name=""
            id=""
            cols="30"
            rows="3"
          ></textarea>
        </ModalBody>
        <ModalFooter className="mt-3">
          <button className="btn btn-next-to-bac" onClick={toggle}>
            Cancel
          </button>
          <button className="btn btn-next-to" onClick={addTask}>
            Save
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalCom;
