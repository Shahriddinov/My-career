import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import ModalCom from "../completeForm/completeModal/ModalCom";
import useStore from "../../StoreZustand/StoreZustand";

const EditExperience = ({ toggle6, editExperience }) => {
  const {
    FrlExperienceCompName,
    FrlExperienceCompNameHandler,
    FrlExperienceCompJobHandler,
    FrlExperienceCompJob,
    FrlCurrentWorkHandler,
    FrlCurrentWork,
    FrlExpStartHandler,
    FrlExpStart,
    FrlExpEndHandler,
    FrlExpEnd,
    FrlExpDescrHandler,
    FrlExpDescr,
  } = useStore();

  return (
    <Modal
      isOpen={editExperience}
      toggle={toggle6}
      className="editExperienceModal"
    >
      <ModalBody>
        <div className="edit-experience">
          <div>
            <ModalCom
              FrlExperienceCompNameHandler={FrlExperienceCompNameHandler}
              FrlExperienceCompName={FrlExperienceCompName}
              FrlExperienceCompJobHandler={FrlExperienceCompJobHandler}
              FrlExperienceCompJob={FrlExperienceCompJob}
              FrlCurrentWorkHandler={FrlCurrentWorkHandler}
              FrlCurrentWork={FrlCurrentWork}
              FrlExpStartHandler={FrlExpStartHandler}
              FrlExpStart={FrlExpStart}
              FrlExpEndHandler={FrlExpEndHandler}
              FrlExpEnd={FrlExpEnd}
              FrlExpDescrHandler={FrlExpDescrHandler}
              FrlExpDescr={FrlExpDescr}
            />
          </div>
        </div>
      </ModalBody>
      <ModalFooter className="mt-2">
        <Button onClick={toggle6}>Cancel</Button>
        <Button>Save</Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditExperience;
