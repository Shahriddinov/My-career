import React, {useState, useEffect} from 'react';
import "./education.scss"
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import useStore from '../../../StoreZustand/StoreZustand';
import GET from '../../../API/GET';
import { BaseUrl, token } from '../../../API/POST';
import axios from 'axios';


function ComEducat({FrlEduSchoolName,FrlEduSchoolNameHandler, FrlEduDegree,FrlEduDegreeHandler,FrlEduCurrStudy,FrlEduCurrStudyHandler,FrlEduStudyType,FrlEduStudyTypeHandler,FrlEduLocation,FrlEduLocationHandler, start, setStart, end, setEnd}) {

    const [edu, setEdu] = useState([]);

    const getEdu= async ()=>{
        await GET.Edu().then((res)=>{
            setEdu(res.data.data)

        })
    }
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)
    };

    const { FreelancDataListHendler } = useStore()


    const addTask = async() =>{
       
        const formData = new FormData()
        formData.append('SchoolName', FrlEduSchoolName)
        formData.append('EducationDegree', FrlEduDegree)
        formData.append('TypeStudy', FrlEduStudyType )
        formData.append('Location', FrlEduLocation)
        formData.append('CurrentStudy', FrlEduCurrStudy)
        try {
                await axios({
                method:'post',
                url: `${BaseUrl}api/FreelancerExperience`,
                data:formData,
                headers:{
                    "Content-Type" : "multipart/form-data",
                    "Authorization" : `Bearer ${token}`
                }

            })

        } catch (error) {
            console.log(error);
        }
        setModal(!modal)
    };


    const deleteTask = async(id)=>{
        try {
            await axios.delete(`${BaseUrl}api/FreelancerEducation/${id}`)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        getEdu()
    },[],[edu])
    return (
        <>
            <p className="write-about">Educations</p>
            <p className="complete-your">
                Freelancers who add their experience are twice as likely to win work.
                But if you’re just starting out, you can still create a great profile.
                Just head on to the next page.
            </p>
            {
                edu.map((item)=>(
                    <div className="map-modal mt-2" key={item.id}>
                        <div className="w-75">
                            <p className="comName">{item.schoolName}</p>
                            <div className="d-flex">
                                <p className="tagName">{item.educationDegree}</p>
                                <p className="tagName1">{item.typeStudy}</p>
                            </div>
                        </div>
                        <div className="modal-image-e-d">
                            <img src="image/edit (1).png" alt=""/>

                            <img onClick={()=>deleteTask(item.id)} src="image/trash-2.png" alt=""/>
                        </div>
                    </div>
                ))
            }
            <button onClick={toggle} className="form-control inputs-all1 add-bnt- mt-3">
                + Add new
            </button>

            <Modal isOpen={modal} toggle={toggle}>

                <ModalHeader toggle={toggle}>Add Education History</ModalHeader>
                <ModalBody>
                    <input onChange={(e) => FrlEduSchoolNameHandler(e.target.value)} placeholder="School name"
                           type="text" className="form-control inputs-all1 "/>
                    <select onClick={(e) => FrlEduDegreeHandler( e.target.value)} className="form-select inputs-all1 mt-3" >
                        <option value="Bachelor">Bachelor</option>
                        <option value="magister">magister</option>
                        <option value="magister">magister</option>
                    </select>
                    <input onChange={(e) => FrlEduStudyTypeHandler(e.target.value)} placeholder="Type of study"
                    type="text" className="form-control inputs-all1 mt-4"/>
                    <input onChange={(e) => FrlEduLocationHandler(e.target.value)} placeholder="Location of school"
                           type="text" className="form-control inputs-all1 mt-4"/>
                    <div className="all-r-l-input">
                        <div className="right-input">
                            <label className="mt-4 select-curr" htmlFor="">Date from</label>
                            <input onChange={(e)=>setStart(e.target.value)} type="date" className="form-control inputs-all"/>
                        </div>
                        <div className="left-input">
                            <div>
                                <label className="mt-4 select-curr" htmlFor="">to</label>
                                <input onChange={(e)=>setEnd(e.target.value)} type="date" className="form-control inputs-all"/>
                            </div>
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter >
                    <div className="modal-footer1">
                        <div className="checkbox-in-m1">
                            <input onChange={(e) => FrlEduCurrStudy(e.target.value)} className="checkbox-in-m mt-4"
                                type="checkbox"/>
                            <span className="select-curr1">I am currently working in this role</span>
                        </div>
                        <div className="all-btn-d-flex">
                            <button className="btn btn-next-to-bac" onClick={toggle}>Cancel</button>
                            <button className="btn btn-next-to" onClick={addTask}>Save</button>
                        </div>
                    </div>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default ComEducat;