import React, {useEffect, useState} from 'react';
import RoutesPath from "../../routes/routes";
import {Route, Routes, useNavigate} from "react-router";
import Portfolio from "./portfolio";
import WorkCompleted from "./WorkCompleted";
import InProgress from "./InProgress";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { Select } from 'antd';
import Car from '../../img//videoForWork.mp4'
import "antd/dist/antd.css"

import "./profil.scss"
import image from "../completeForm/image/image.png";
import { Input} from 'antd';
import VideoPlayer from "react-video-js-player";
import logoBlue from "../images/logo-blue.svg";
import userPic from "../../img/user-picture.png";
import dropDown from "../../img/drop-down.svg";


const { Option } = Select;
const allTicher=[
        {
            TICHERNAME: "Jahongir",
        },
        {
            TICHERNAME: "Kamron",
        },
        {
            TICHERNAME: "Sarvar",
        },
    ]
;

const videoSrc = Car;

const handleChange = (value) => {

};

function ProfilPage(props) {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);
    const [icon, setIcon] = useState(false);
    const [icon1, setIcon1] = useState(false);
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        numbers:"",
        image:"",
        name:"",
        countrySelect:"",
        regionSelect:"",
        StreetApp:"",
        dagreeLavel:"",
        dateBirth:"",
        descrobe:"",
    });
    const [portfolioImg, setPortfolioImg] = useState('');

    const [video, setVideo] = useState(false);

    function baseImage (event) {
        let files = event.target.files;

        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            setUser({
                ...user,
                image: e.target.result,
            }
            );

        }
        setIcon(true)
    }
    function baseImage1 (event) {
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            setPortfolioImg( e.target.result,);
        }
        setIcon1(true)
    }

    const toggle1 = () => {
        setModal1(!modal1)
    };
    const toggle = () => {
        setModal(!modal)
    };



    return (
        <div className="porfilFrilanser">
            <div className="navbar-home">
                <div className="logos-wrapper"><img src={logoBlue} alt="white logo" width="360" height="94" /></div>
                <div className="homeNavbar">
                    <div className=" navbar navbar-expand-md">
                        <button type="button" className="navbar-toggler knopka" data-bs-toggle="collapse"
                                data-bs-target="#myCollapse">
                            <label htmlFor="check">
                                <input type="checkbox" id="check" />
                                <span></span>
                                <span></span>
                            </label>
                        </button>

                        <div className="collapse navbar-collapse" id="myCollapse">
                            <ul className="nav">
                                <li className="nav-item">
                                    <div className="nav-link" data-bs-toggle="tab"
                                         onClick={() => { navigate(RoutesPath.talants) }}>Talants</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" data-bs-toggle="tab"
                                         onClick={() => { navigate(RoutesPath.postJop) }}>Jobs</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" data-bs-toggle="tab"
                                         onClick={() => { navigate(RoutesPath.aboutUs) }}>About us</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" data-bs-toggle="tab">Contact us</div>
                                </li>
                            </ul>
                            <div className="logged-talents__user-informations">
                                <div className="logged-talents__user">
                                    <img src={userPic} width="36" height="36" />
                                    <span className="logged-talents__user-name">Michel R</span>
                                    <img src={dropDown} width="13" height="7" />
                                </div>
                                <div className="logged-talents__language">
                                    <span className="logged-talents__language-text">En</span>
                                    <img src={dropDown} width="13" height="7" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="sectionProfil">
                <div className="left">
                    <div className="profilNameBox">
                        <img className="profilImg" src="/images/avatar.png" alt=""/>
                        <div className="profilName">
                            <h2>Michel Rodriges <img src="/images/verification.svg" alt=""/></h2>
                            <p>Web-design UI/UX <span>Middle</span></p>
                        </div>
                        <div className="JobSuccess">
                            <p>80%</p>
                            <div className="progress">
                                <div className="progress-bar" style={{width: "80%"}}/>
                            </div>
                            <p>Job Success</p>
                        </div>
                        <div className="JobHourly">
                            <p>$5</p>
                            <p>Hourly</p>
                        </div>
                        <button onClick={toggle1}/>
                        <Modal isOpen={modal1} toggle={toggle1}>
                            <ModalBody>
                                <div onChange={baseImage} className="upload-image">
                                    {
                                        icon ? <><img className="img-in-upload" src={user.image} alt=""/></>
                                            : <><img className="img-in-upload1" src={image} alt=""/></>
                                    }
                                    <input  className="img-file-up" type="file"/>
                                </div>
                                <p className="add-your-prifile">Add your profile photo</p>
                                <div className="allInput">
                                    <div className="rightInput">
                                        <div>
                                            <label className="mt-4 label-style" htmlFor="">Firstname</label>
                                            <input
                                                onChange={(e)=>setUser({...user, firstName: e.target.value})}
                                                className="form-control inputs-all" type="text"
                                                placeholder="Firstname"/>
                                        </div>
                                        <div>
                                            <label htmlFor="Position">Position</label>
                                            <Select
                                                className='form-control'
                                                mode="tags" id='Position'
                                                style={{width: '100%',}}
                                                onChange={handleChange}
                                                tokenSeparators={[',']}
                                            >
                                                {allTicher.map((item)=>{
                                                    return  <Option key={item.TICHERNAME}>{item.TICHERNAME}</Option>
                                                })}
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="rightInput">
                                        <div>
                                            <label className="mt-4 label-style" htmlFor="">Lastname</label>
                                            <input
                                                className="form-control inputs-all" type="text"
                                                placeholder="Lastname"/>
                                        </div>
                                        <div>
                                            <label className="mt-4 label-style" htmlFor="">Price ($/hour)r</label>
                                            <Input prefix="$" />
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter className="modal-footer">

                                <div className="all-btn-d-flex">
                                    <button onClick={toggle1} className="btn mx-2 btn-next-to-bac" >Cancel</button>
                                    <button onClick={toggle1} className="btn btn-next-to-bac">Save</button>
                                </div>
                            </ModalFooter>
                        </Modal>
                    </div>

                    <div>
                        <p className='description'>I have been in the IT business for more than 11 years.</p>
                        <br/>
                        <p className='description'>With over 5 years of experience in the ERP consultancy. I have deployed
                            and delivered 30+ Odoo
                            implementations in different types of businesses. I have implemented a mixture of Enterprise and
                            Community versions according to the cost-benefit analysis of the business and which suits best
                            for the business.
                        </p>
                        {
                            video ?  <VideoPlayer src={videoSrc}/> : ''
                        }

                    </div>

                    <button onClick={()=>setVideo(!video)} className="addVideo">Add description video...</button>
                    <br/>
                    <button className="SeePublic">See public view</button>
                    <hr/>
                    <div className='portfolioTitle'>Portfolio (
                        <span>14</span>)
                        <button onClick={toggle} type="button" />
                    </div>

                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Add portfolio project</ModalHeader>
                        <ModalBody>
                            <div onChange={baseImage1} className='inputFile'>
                                {
                                    icon1 ? <><img className="portImg" src={portfolioImg} alt=""/></>
                                        : <p>Drag and drop or <span>Browse</span></p>
                                }
                                <input  type="file"/>
                            </div>
                            <label htmlFor="title">Project Title</label><br/>
                            <input className='form-control' type="text" id='title'
                                   placeholder='Enter a brief but descriptive title'/>

                            <label htmlFor="discription">Description</label><br/>
                            <textarea className='form-control' name="message" rows="3" cols="60"
                            placeholder='Describe your project to a buyers'/>

                            <label htmlFor="Tools">Tools</label>
                            <Select
                                className='form-control'
                                mode="tags" id='Tools'
                                style={{width: '100%',}}
                                onChange={handleChange}
                                tokenSeparators={[',']}
                            >
                                {allTicher.map((item)=>{
                                return  <Option key={item.TICHERNAME}>{item.TICHERNAME}</Option>
                                })}
                            </Select>

                            <label htmlFor="Link">Link</label><br/>
                            <input className='form-control' type="text" id='Link'
                                   placeholder='Provide a link to your project'/>

                        </ModalBody>
                        <ModalFooter className="modal-footer">

                            <div className="all-btn-d-flex">
                                <button onClick={toggle} className="btn mx-2 btn-next-to-bac" >Cancel</button>
                                <button onClick={toggle} className="btn btn-next-to-bac">Save</button>
                            </div>
                        </ModalFooter>
                    </Modal>

                   <Portfolio/>

                    <hr/>
                    <div className='portfolioTitle'>Work history</div>

                    <Routes>
                        <Route path={"/InProgress"} element={<InProgress/>}/>
                        <Route path={"/"} element={<WorkCompleted/>}/>
                    </Routes>

                </div>
                <div className="rightee">
                    <div className="totalEarningsBox">
                        <div className="totalEarnings">
                            <h3>$5936</h3>
                            <p>Total earnings</p>
                        </div>
                        <div className="totalEarnings">
                            <h3>324</h3>
                            <p>Total jobs</p>
                        </div>
                        <div className="totalEarnings">
                            <h3>1042</h3>
                            <p>Total hours</p>
                        </div>
                    </div>
                    <div className="Available">
                        <div className="title">
                            <h3>Available</h3>
                            <button />
                        </div>
                        <p>More than 40 hrs/week</p>
                        <hr/>
                    </div>
                    <div className="Available">
                        <div className="title">
                            <h3>Languages</h3>
                            <button />
                        </div>
                        <p> <span className='bold'>English:</span>  <span className='gray'>C2</span>  - Native speaker</p>
                        <p> <span className='bold'>Russian:</span>  <span className='gray'>B2 </span> - Upper Intermediate</p>
                        <hr/>
                    </div>
                    <div className="Available">
                        <div className="title">
                            <h3>Verifications</h3>
                            <button />
                        </div>
                        <p> <span className='bold'>ID:</span> -Verified <img src="/images/verification.svg" alt=""/></p>
                        <hr/>
                    </div>
                    <div className="Available">
                        <div className="title">
                            <h3>Educations</h3>
                            <button />
                        </div>
                        <p>
                            <span className='bold'>
                                Skans School of Accountancy Other, ACCA (Association of
                                Chartered Certified Accountant)
                            </span>
                            <p className='gray'>2012-2018</p>
                        </p>
                        <br/>
                        <p>
                            <span className='bold'>
                                Aptech Computer Education Other, Software and Website Development (ASP.NET C#)
                            </span>
                            <p className='gray'>2010-2011</p>
                        </p>

                        <hr/>
                    </div>
                    <div className="Available">
                        <div className="title">
                            <h3>Experience</h3>
                            <button />
                        </div>
                        <p> <span className='bold'>NAPA Automotive: </span>
                            UX UI Designer
                            <br/>
                            <span className='gray'>March 2022 - Now</span></p>
                        <hr/>
                    </div>
                    <div className="Available">
                        <div className="title">
                            <h3>Skills</h3>
                            <button />
                        </div>
                        <div className="box">
                            <div className='skills'>Figma</div>
                            <div className='skills'>HTML</div>
                            <div className='skills'>Adobe PhotoShop</div>

                        </div>
                        <hr/>
                    </div>
                    <div className="Available">
                        <div className="title">
                            <h3>Contacts</h3>
                            <button />
                        </div>
                        <div className="box">
                            <img src="/image/telegram.png" alt=""/>
                            <span className='nikname'> Nickname</span>
                        </div>
                        <div className="box">
                            <img src="/image/watsApp.png" alt=""/>
                            <span className='nikname'> Nickname</span>
                        </div>
                        <div className="box">
                            <img src="/image/facebook.png" alt=""/>
                            <span className='nikname'> Nickname</span>
                        </div>
                        <div className="box">
                            <img src="/image/gitHub.png" alt=""/>
                            <span className='nikname'> Nickname</span>
                        </div>
                        <div className="box">
                            <img src="/image/instagram.png" alt=""/>
                            <span className='nikname'> Nickname</span>
                        </div>
                        <div className="box">
                            <img src="/image/twitter.png" alt=""/>
                            <span className='nikname'> Nickname</span>
                        </div>
                        <hr/>
                    </div>
                    <div className="Available">
                        <div className="title">
                            <h3>Living address</h3>
                            <button />
                        </div>
                        <p>
                            <img className='position' src="/images/location.png" alt=""/>
                            <span className='gray'>Tashkent, Uzbekistan</span>
                        </p>
                        <hr/>
                    </div>
                    <div className="Available">
                        <div className="title">
                            <h3>Member since</h3>
                            <button />
                        </div>
                        <p>June 9, 2022</p>

                    </div>
                    <button className='resume'>Resume</button>
                </div>
                <div className="patternn2">
                    <img src="/images/white-ell1.svg" alt="pattern"/>
                    <img src="/images/white-ell2.svg" alt="pattern"/>
                    <img src="/images/white-ell3.svg" alt="pattern"/>
                    <img src="/images/white-ell4.svg" alt="pattern"/>
                    <img src="/images/white-ell5.svg" alt="pattern"/>
                </div>
            </div>
        </div>
    );
}

export default ProfilPage;