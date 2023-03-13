import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import VebsiteCom from "../completeForm/completeWeb/VebsiteCom";

const EditContacts = ({ toggle9, editContacts }) => {
  return (
    <Modal isOpen={editContacts} toggle={toggle9} className="editContactModal">
      <ModalBody>
        <div className="edit-contact">
          <VebsiteCom />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button onClick={toggle9}>Cancel</Button>
        <Button>Save</Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditContacts;
