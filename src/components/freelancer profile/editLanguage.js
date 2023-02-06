import React, { useState, useEffect } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import GET from "../../API/GET";
import useStore from "../../StoreZustand/StoreZustand";

import { IoClose } from "react-icons/io5";

const EditLanguage = ({ toggle4, editLanguage }) => {
  const [frlLang, setFrlLang] = useState();
  const [frlLangLevel, setFrlLangLevel] = useState();
  const [inputList, setInputList] = useState([{ language: "", level: "" }]);

  const getLanguage = async () => {
    try {
      const lang = await GET.Langs();
      if (lang.status === 200) {
        setFrlLang(lang.data.data);
      } else {
        alert(lang.statusText);
      }
    } catch (err) {
      alert(err);
    }
  };

  function handleClickMore() {
    setInputList([...inputList, { language: "", level: "" }]);
  }

  const handleRemove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  useEffect(() => {
    getLanguage();
  }, []);

  return (
    <Modal isOpen={editLanguage} toggle={toggle4} className="editLanguageModal">
      <ModalBody>
        <div className="edit-language">
          <label className="mt-4 label-style" htmlFor="">
            Language
          </label>
          {inputList?.map((lan, i) => {
            return (
              <div className="all-r-l-input mt-3" key={i}>
                <div className="right-input">
                  <select
                    // onChange={(e) => setFrlLang(e.target.value)}
                    className="form-select form-control inputs-all"
                    name="language"
                  >
                    {frlLang?.map((item) => {
                      return (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="left-input">
                  <div>
                    <select
                      // onClick={(e) => setFrlLangLevel(e.target.value)}
                      className="form-select form-control inputs-all "
                      name="level"
                    >
                      <option value="A-1 Beginner">A-1 Beginner</option>
                      <option value="A-2 Elementary">A-2 Elementary</option>
                      <option value="B-1 Intermediate">B-1 Intermediate</option>
                      <option value="B-2 Upper-Intermediate">
                        B-2 Upper-Intermediate
                      </option>
                      <option value="C-1 Expert">C-1 Expert</option>
                      <option value="C-2 Mastery">C-2 Mastery</option>
                    </select>
                  </div>
                </div>
                {inputList.length !== 1 && (
                  <button
                    onClick={() => handleRemove(i)}
                    className="remove-btn"
                  >
                    <IoClose />
                  </button>
                )}
              </div>
            );
          })}

          <button
            value="add"
            onClick={handleClickMore}
            className="bnt mt-4 btn-success1 inputs-all1"
          >
            +Add new
          </button>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button onClick={toggle4}>Cancel</Button>
        <Button>Save</Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditLanguage;
