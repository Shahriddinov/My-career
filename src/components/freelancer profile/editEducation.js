import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import ComEducat from "../completeForm/completeEducation/ComEducat";
import useStore from "../../StoreZustand/StoreZustand";

const EditEducation = ({ toggle5, editEducation }) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const {
    FrlEduSchoolName,
    FrlEduSchoolNameHandler,
    FrlEduDegree,
    FrlEduDegreeHandler,
    FrlEduStudyType,
    FrlEduStudyTypeHandler,
    FrlEduLocation,
    FrlEduLocationHandler,
    FrlEduCurrStudy,
    FrlEduCurrStudyHandler,
  } = useStore();

  return (
    <Modal
      isOpen={editEducation}
      toggle={toggle5}
      className="editLanguageModal"
    >
      <ModalBody>
        <div className="edit-language">
          <div>
            <ComEducat
              FrlEduSchoolName={FrlEduSchoolName}
              FrlEduSchoolNameHandler={FrlEduSchoolNameHandler}
              FrlEduDegree={FrlEduDegree}
              FrlEduDegreeHandler={FrlEduDegreeHandler}
              FrlEduCurrStudy={FrlEduCurrStudy}
              FrlEduCurrStudyHandler={FrlEduCurrStudyHandler}
              FrlEduStudyType={FrlEduStudyType}
              FrlEduStudyTypeHandler={FrlEduStudyTypeHandler}
              FrlEduLocation={FrlEduLocation}
              FrlEduLocationHandler={FrlEduLocationHandler}
              start={start}
              setStart={setStart}
              end={end}
              setEnd={setEnd}
            />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button onClick={toggle5}>Cancel</Button>
        <Button>Save</Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditEducation;
