import React, { useState } from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { Select } from "antd";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Portfolio(props) {
  const [modal, setModal] = useState(false);
  const [icon, setIcon] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div className="container PortfolioBox">
      <div className="row justify-content-between">
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add portfolio project</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter className="modal-footer">
            <div className="all-btn-d-flex">
              <button onClick={toggle} className="btn mx-2 btn-next-to-bac">
                Cancel
              </button>
              <button onClick={toggle} className="btn btn-next-to-bac">
                Save
              </button>
            </div>
          </ModalFooter>
        </Modal>
        <div onClick={toggle} className="col-6 portfoliyalar">
          <img src="/images/prtfolioImg.svg" alt="" />
          <div className="content">
            <div className="title">Mobile app My Career</div>
            <div className="text">6 days ago</div>
            <UncontrolledDropdown>
              <button className="dootsbtn">
                <DropdownToggle>
                  <img src="/image/3nuqta.svg" alt="" />
                </DropdownToggle>
              </button>

              <DropdownMenu>
                <DropdownItem>
                  <span className="icon iconEdit" />
                  Edit
                </DropdownItem>
                <DropdownItem>
                  <span className="icon iconDelete" />
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
        <div className="col-6 portfoliyalar">
          <img src="/images/prtfolioImg(1).svg" alt="" />
          <div className="content">
            <div className="title">Mobile app My Career</div>
            <div className="text">6 days ago</div>
            <UncontrolledDropdown>
              <button className="dootsbtn">
                <DropdownToggle>
                  <img src="/image/3nuqta.svg" alt="" />
                </DropdownToggle>
              </button>

              <DropdownMenu>
                <DropdownItem>
                  <span className="icon iconEdit" />
                  Edit
                </DropdownItem>
                <DropdownItem>
                  <span className="icon iconDelete" />
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
        <div className="col-6 portfoliyalar">
          <img src="/images/prtfolioImg(1).svg" alt="" />
          <div className="content">
            <div className="title">Mobile app My Career</div>
            <div className="text">6 days ago</div>
            <UncontrolledDropdown>
              <button className="dootsbtn">
                <DropdownToggle>
                  <img src="/image/3nuqta.svg" alt="" />
                </DropdownToggle>
              </button>

              <DropdownMenu>
                <DropdownItem>
                  <span className="icon iconEdit" />
                  Edit
                </DropdownItem>
                <DropdownItem>
                  <span className="icon iconDelete" />
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
        <div className="col-6 portfoliyalar">
          <img src="/images/prtfolioImg.svg" alt="" />
          <div className="content">
            <div className="title">Mobile app My Career</div>
            <div className="text">6 days ago</div>
            <UncontrolledDropdown>
              <button className="dootsbtn">
                <DropdownToggle>
                  <img src="/image/3nuqta.svg" alt="" />
                </DropdownToggle>
              </button>

              <DropdownMenu>
                <DropdownItem>
                  <span className="icon iconEdit" />
                  Edit
                </DropdownItem>
                <DropdownItem>
                  <span className="icon iconDelete" />
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
        <div className="col-6 portfoliyalar">
          <img src="/images/prtfolioImg(1).svg" alt="" />
          <div className="content">
            <div className="title">Mobile app My Career</div>
            <div className="text">6 days ago</div>
            <UncontrolledDropdown>
              <button className="dootsbtn">
                <DropdownToggle>
                  <img src="/image/3nuqta.svg" alt="" />
                </DropdownToggle>
              </button>

              <DropdownMenu>
                <DropdownItem>
                  <span className="icon iconEdit" />
                  Edit
                </DropdownItem>
                <DropdownItem>
                  <span className="icon iconDelete" />
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
        <div className="col-6 portfoliyalar">
          <img src="/images/prtfolioImg.svg" alt="" />
          <div className="content">
            <div className="title">Mobile app My Career</div>
            <div className="text">6 days ago</div>
            <UncontrolledDropdown>
              <button className="dootsbtn">
                <DropdownToggle>
                  <img src="/image/3nuqta.svg" alt="" />
                </DropdownToggle>
              </button>

              <DropdownMenu>
                <DropdownItem>
                  <span className="icon iconEdit" />
                  Edit
                </DropdownItem>
                <DropdownItem>
                  <span className="icon iconDelete" />
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
