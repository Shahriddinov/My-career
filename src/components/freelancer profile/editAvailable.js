import React, { useState, useEffect } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { BaseUrl, token } from "../../API/POST";
import axios from "axios";
import useStore from "../../StoreZustand/StoreZustand";

const EditAvailable = ({ toggle3, editAvailable }) => {
  return (
    <Modal
      isOpen={editAvailable}
      toggle={toggle3}
      className="editAvailableModal"
    >
      <ModalBody>
        <div className="edit-available">
          <h2>Available</h2>
          <span>
            Write down write down how many hours a week you devote to work
          </span>
          <p>I can currently work</p>
          <div>
            <input type="radio" name="available" id="radio1" />
            <label htmlFor="radio1">More than 20 hours</label>
          </div>
          <div>
            <input type="radio" name="available" id="radio2" />
            <label htmlFor="radio2">More than 30 hours</label>
          </div>
          <div>
            <input type="radio" name="available" id="radio3" />
            <label htmlFor="radio3">More than 40 hours</label>
          </div>
          <div>
            <input type="radio" name="available" id="radio4" />
            <label htmlFor="radio4">More than 50 hours</label>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button onClick={toggle3}>Cancel</Button>
        <Button>Save</Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditAvailable;
