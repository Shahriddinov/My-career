import React, {useState, useEffect} from 'react'
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap';
import { BaseUrl, token } from '../../API/POST';
import axios from "axios";
import useStore from '../../StoreZustand/StoreZustand';
import image from "../completeForm/image/image.png"

const EditPersonalInfo = ({toggle2, editInfo}) => {

    const {TagsHendler,tags,HobsHenedler,hobs,FreelancDataList,FreelancDataListJob, FreelancFirstNameHendler, FreelancFirstName, FreelancLastNameHendler, FreelancLastName, FreelancEmailHendler, FreelancEmail,FreelancPhoneHendler, FreelancPhone, FreelancLivingAddressHendler, FreelancLivingAddress,FreelancRegionHendler, FreelancRegion,FreelancStreetHendler, FreelancStreet,FreelancPositionsHendler, FreelancPositions,FreelancDateOfBirthHendler, FreelancDateOfBirth ,FreelancDescrobeHendler, FreelancDescrobe, FreelancWebsite, FrlExperienceCompName, FrlExperienceCompNameHandler, FrlExperienceCompJobHandler, FrlExperienceCompJob, FrlCurrentWorkHandler, FrlCurrentWork, FrlExpStartHandler, FrlExpStart, FrlExpEndHandler, FrlExpEnd, FrlExpDescrHandler,FrlExpDescr,
        FrlEduSchoolName,FrlEduSchoolNameHandler,FrlEduDegree,FrlEduDegreeHandler,FrlEduStudyType,FrlEduStudyTypeHandler,FrlEduLocation,FrlEduLocationHandler,FrlEduCurrStudy,FrlEduCurrStudyHandler} = useStore()

    const [icon, setIcon] = useState(false);

    const [user, setUser] = useState({
        image:"",
        name:"",
    });
 

    function baseImage (event) {
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            setUser({
                ...user, 
               image: e.target.result
            });
        }
        setIcon(true)
    }

  return (
    <Modal isOpen={editInfo} toggle={toggle2} className='editPersonalInfo'>
        <ModalBody>
        <div>
                        <div onChange={baseImage} className="upload-image">
                            {
                                icon ? <><img className="img-in-upload" src={user.image} alt=""/></> : <><img className="img-in-upload1" src={image} alt=""/></>
                            }
                            <input  className="img-file-up" type="file"/>
                        </div>
                        <p className="add-your-prifile">Add your profile photo</p>
                        <div className="all-r-l-input">
                            <div className="right-input">
                                <div>
                                    <label className="mt-4 label-style" htmlFor="">Firstname</label>

                                    <input onChange={(e)=>FreelancFirstNameHendler(e.target.value)} className="form-control inputs-all" type="text" placeholder="Firstname"/>
                                </div>
                                <div>
                                    <label className="mt-4 label-style" htmlFor="">E-mail</label>

                                    <input onChange={(e)=>FreelancEmailHendler(e.target.value)} className="form-control inputs-all" type="e-mail" placeholder="E-mail"/>
                                </div>
                            </div>
                            <div className="left-input">
                                <div>
                                    <label className="mt-4 label-style" htmlFor="">Lastname</label>

                                    <input  onChange={(e)=>FreelancLastNameHendler(e.target.value)} className="form-control inputs-all" type="text" placeholder="Lastname"/>
                                </div>
                                <div>
                                    <label className="mt-4 label-style" htmlFor="">Phone number</label>

                                    <input onChange={(e)=>FreelancPhoneHendler(e.target.value)} className="form-control inputs-all" type="text" placeholder="+xxx (xx) xxx- xx-xx"/>
                                </div>
                            </div>
                        </div>
                    </div>
        </ModalBody>
        <ModalFooter>
            <Button>Cancel</Button>
            <Button>Save</Button>
        </ModalFooter>
    </Modal>
  )
}

export default EditPersonalInfo;