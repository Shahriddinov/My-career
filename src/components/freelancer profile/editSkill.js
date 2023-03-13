import React, { useState, useEffect, useRef } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import useStore from "../../StoreZustand/StoreZustand";
import GET from "../../API/GET";

const EditSkill = ({ toggle7, editSkill }) => {
  const [position, setPosition] = useState([]);
  const [datasSkills, setDatasSkills] = useState([]);
  const [datasSkills1, setDatasSkills1] = useState([]);
  const dSkills = useRef();

  const { TagsHendler, tags, FreelancPositionsHendler } = useStore();

  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    TagsHendler([...tags, value]);
    e.target.value = "";
    dSkills.current.style.display = "none";
  }

  function removeTag(item, id) {
    TagsHendler(tags.filter((e, i) => i !== id));

    const addToRec = datasSkills1[0]?.skills?.filter(
      (tag) => tag.name == "Figma"
    );
    // console.log("Add to rec: ", addToRec);
    setDatasSkills([...datasSkills.skills, addToRec]);
  }

  // console.log("Data skills: ", datasSkills);

  const showSkills = () => {
    dSkills.current.style.display = "block";
  };

  const addingRecSkills = (id) => {
    const delItem = datasSkills[0]?.skills?.filter((item) => item.id === id);
    // console.log("Del item: ", delItem[0]);
    TagsHendler([...tags, delItem[0].name]);

    const delFromRec = datasSkills[0]?.skills?.filter((item) => item.id !== id);
    datasSkills[0].skills = delFromRec;

    dSkills.current.style.display = "none";
  };

  const getPositions = async () => {
    try {
      const position = await GET.Positions();
      if (position.status === 200) {
        setPosition(position.data.data);
      } else {
        alert(position.statusText);
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getPositions();
  }, []);

  // console.log("Tags: ", tags);

  return (
    <Modal isOpen={editSkill} toggle={toggle7} className="editSkillModal">
      <ModalBody>
        <div className="edit-skill">
          <p className="write-about">Edit skills</p>
          <div className="right-input">
            <label className="label-style">Select your Positions</label>
            <select
              onChange={(e) => {
                FreelancPositionsHendler(e.target.value);
                let dataSkills = position.filter((v) => {
                  if (v.id == e.target.value) return v.skills;
                });
                setDatasSkills(dataSkills);
                setDatasSkills1(dataSkills);
              }}
              className="form-select form-control inputs-all"
            >
              {position.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label className="label-style mt-4">Write down your skills</label>
            <div>
              <div className="tag-input-box form-control">
                {tags.map((item, index) => (
                  <div className="tag-item" key={index}>
                    <span className="text">{item}</span>
                    <span
                      onClick={() => removeTag(item, index)}
                      className="close"
                    >
                      x
                    </span>
                  </div>
                ))}
                <input
                  onKeyDown={handleKeyDown}
                  onClick={showSkills}
                  className="tag-input"
                  type="text"
                  placeholder="Type something"
                />
                <div className="showSkills" ref={dSkills}>
                  {datasSkills?.[0]?.skills?.map((item) => {
                    return (
                      <button
                        key={item.id}
                        className={"skillBtn"}
                        onClick={() => addingRecSkills(item.id)}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter className="mt-3">
        <Button onClick={toggle7}>Cancel</Button>
        <Button>Save</Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditSkill;
