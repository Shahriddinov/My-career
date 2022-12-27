import React, {useEffect, useState} from 'react'
import image from "../completeForm/image/image.png"
import ModalCom from "../completeForm/completeModal/ModalCom";
import ComEducat from "../completeForm/completeEducation/ComEducat";
import VebsiteCom from "../completeForm/completeWeb/VebsiteCom";
import VebsiteCompany from "../completeForm/completeWebCompany/VebsiteCom";
import CompRezume from "../completeForm/RezueComple/CompRezume";
import logo from '../../img/logo.svg'
import POST, { BaseUrl, token } from '../../API/POST';
import GET from '../../API/GET';
import useStore from '../../StoreZustand/StoreZustand';
import axios from 'axios';


function CompleteCompany(props) {

const progressfirst=()=>{
    var firstCard = document.getElementById("first-card");
    var secondCard = document.getElementById("second-card");
    var one1 = document.getElementById("one1");
    var two1 = document.getElementById("two1");
    var text = document.getElementById("progress-text11");
    var text22 = document.getElementById("progress-text22");
    text.style.opacity = "0";
    text22.style.opacity = "1";
    one1.style.top = "34%";
    one1.style.backgroundColor = "#1D71B8";
    one1.style.border = "3px solid #FFFFFF";
    firstCard.style.bottom = "110%";
    secondCard.style.bottom = "20%";
    two1.style.top = "68%";
    two1.style.backgroundColor = "#FFFFFF";
    two1.style.border = "7px solid #1D71B8"

    
}
const progresssecond=()=>{
  var secondCard = document.getElementById("second-card");
    var thirdCard = document.getElementById("third-card");
    var two1 = document.getElementById("two1");
    var three1 = document.getElementById("three1");
    var text2 = document.getElementById("progress-text22");
    var text3 = document.getElementById("progress-text33");
    text2.style.opacity = "0";
    text3.style.opacity = "1";
    two1.style.top = "37%";
    two1.style.backgroundColor = "#1D71B8"
    two1.style.border = "3px solid #FFFFFF"
    secondCard.style.bottom = "110%"
    thirdCard.style.bottom = "10%"
    three1.style.top = "68%"
    three1.style.backgroundColor = "#FFFFFF"
    three1.style.border = "7px solid #1D71B8"

}
const progressthird=()=>{
    var fourthCard = document.getElementById("fourth-card");
    var thirdCard = document.getElementById("third-card");
    var four = document.getElementById("four1");
    var three = document.getElementById("three1");
    var text4 = document.getElementById("progress-text44");
    var text3 = document.getElementById("progress-text33");
    var secondline = document.getElementById("secondline");
    text3.style.opacity = "0";
    text4.style.opacity = "1";
    three.style.top = "40%"
    three.style.backgroundColor = "#1D71B8"
    three.style.border = "3px solid #FFFFFF"
    thirdCard.style.bottom = "130%";
    fourthCard.style.bottom = "20%";
    four.style.top = "68%"
    four.style.backgroundColor = "#FFFFFF"
    four.style.border = "7px solid #1D71B8"
    secondline.style.opacity = "0";

}
const progresssecondback=()=>{
    var firstCard = document.getElementById("first-card");
    var secondCard = document.getElementById("second-card");
    var one = document.getElementById("one1");
    var two = document.getElementById("two1");
    var text = document.getElementById("progress-text11");
    var text2 = document.getElementById("progress-text22");
    text.style.opacity = "1";
    text2.style.opacity = "0";
    one.style.top = "68%";
    one.style.backgroundColor = "#FFFFFF";
    one.style.border = "7px solid #1D71B8";
    firstCard.style.bottom = "17%";
    secondCard.style.bottom = "-75%";
    two.style.top = "109%";
    two.style.backgroundColor = "#1D71B8";
    two.style.border = "3px solid #FFFFFF"
}
const progressthirdback=()=>{
    var secondCard = document.getElementById("second-card");
    var thirdCard = document.getElementById("third-card");
    var two = document.getElementById("two1");
    var three = document.getElementById("three1");
    var text2 = document.getElementById("progress-text22");
    var text3 = document.getElementById("progress-text33");
    text2.style.opacity = "1";
    text3.style.opacity = "0";
    two.style.top = "68%";
    two.style.backgroundColor = "#FFFFFF"
    two.style.border = "7px solid #1D71B8"
    secondCard.style.bottom = "20%"
    thirdCard.style.bottom = "-90%"
    three.style.top = "112%"
    three.style.backgroundColor = "#1D71B8"
    three.style.border = "3px solid #FFFFFF"
}
const progressfourthback=()=>{
    var fourthCard = document.getElementById("fourth-card");
    var thirdCard = document.getElementById("third-card");
    var four = document.getElementById("four1");
    var three = document.getElementById("three1");
    var text4 = document.getElementById("progress-text44");
    var text3 = document.getElementById("progress-text33");
    var secondline = document.getElementById("secondline");
    text4.style.opacity = "0";
    text3.style.opacity = "1";
    three.style.top = "68%";
    three.style.backgroundColor = "#FFFFFF"
    three.style.border = "7px solid #1D71B8"
    thirdCard.style.bottom = "10%";
    fourthCard.style.bottom = "-75%"
    four.style.top = "115%"
    four.style.backgroundColor = "#1D71B8"
    four.style.border = "3px solid #FFFFFF"
    secondline.style.opacity = "1";
}

    const {CompanyHendler,Company,CompanyFirstName,CompanyLastName,CompanyEmail,CompanyNumber,CompanyCompany,CompanyCompanyNum,CompanyImage,CompanyLocation,CompanyDescription,CompanyWebsite,CompanyWhatsapp,CompanyFacebook,CompanyInstagram,CompanyTelegram,CompanyGithub,CompanyTwitter,CompanyFirstNameHendler,CompanyLastNameHendler,CompanyEmailHendler,CompanyNumberHendler,CompanyImageHendler,CompanyCompanyHendler,CompanyCompanyNumHendler,CompanyLocationHendler,CompanyDescriptionHendler,CompanyWebsiteHendler,CompanyWhatsappHendler,CompanyFacebookHendler,CompanyInstagramHendler,CompanyTelegramHendler,CompanyGithubHendler,CompanyTwitterHendler} = useStore()

    const [icon, setIcon] = useState(false);

    function baseImage (event) {
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            setUser({
                ...user,
                image: e.target.result,
            });
            CompanyImageHendler(e.target.result)
        }
        setIcon(true)
    }

    const [user, setUser] = useState({image:"",});


    const postUserCompany = async () => {
        try {
          const poth =await POST.companyUser({
            firstName: CompanyFirstName,
            lastName: CompanyLastName,
            copmanyEmail: CompanyEmail,
            phoneNumber: CompanyNumber,
        })  
        if(poth.status===200){
            progressfirst()
        } else{
            alert(poth.statusText)
        } 
       } catch (error) {
            alert(error)
       }
    };

    const postCompany = async () => {

        const formData = new FormData()
        formData.append("Name", CompanyCompany)
        formData.append("PhoneNumber", CompanyCompanyNum)
        formData.append("File", CompanyImage)

        try {
          const post= await axios({
            method:'post',
            url: `${BaseUrl}api/Company/Create`,
            data: formData,
            headers:{
                "Content-Type": "multipart/form-data",
                "Authorization" : `Bearer ${token}`
            }

        })  
        if(post.status===200){
            progresssecond()
        } else{
            alert(post.statusText)
        }
       } catch (error) {
           alert(error)
       }
    };

    const postLocation = async () => {
        try {
          const poth = await POST.companyLoc({
            locations: [{location:CompanyLocation}],
            description: CompanyDescription,
        }) 
        if(poth.status===200){
            progressthird()
        } else{
            alert(poth.statusText)
        }  
       } catch (error) {
           alert(error)
       }
    };

    const postContact = async () => {
        try {
         const poth = await POST.companyContact({
            watsApp: CompanyWhatsapp,
            facebook: CompanyFacebook,
            telegram: CompanyTelegram,
            gitHub: CompanyGithub,
            twitter: CompanyTwitter,
            instagram: CompanyInstagram,
            webSite: CompanyWebsite
        })  
        if(poth.status===200){
            alert('Success!')
        } else{
            alert(poth.statusText)
        } 
       } catch (error) {
           console.log(error)
       }
    };

    return (
        <>
            <div className="animations-image-all">
                <div className= "pattern11">
                    <img src="./images/white-ell1.svg" alt="pattern"/>
                    <img src="./images/white-ell2.svg" alt="pattern"/>
                    <img src="./images/white-ell3.svg" alt="pattern"/>
                    <img src="./images/white-ell4.svg" alt="pattern"/>
                    <img src="./images/white-ell5.svg" alt="pattern"/>
                </div>
            </div>
            <div className="wrapper">
                <div className="position-absolute">
                </div>
                <div className="main-content">
                    <div className="first-card1 card1" id="first-card">
                        <p className="name-top-input">
                            Welcome
                        </p>
                        <p className="complete-your">
                            Complete your profile to join our global community of freelancers and start selling your services to our growing network of businesses.
                        </p>
                        <div className="all-r-l-input">
                            <div className="right-input">
                                <div>
                                    <label className="mt-4 label-style" htmlFor="">Firstname</label>
                                    <input onChange={(e)=>CompanyFirstNameHendler(e.target.value)} className="form-control inputs-all" type="text" placeholder="Firstname"/>
                                </div>
                                <div>
                                    <label className="mt-4 label-style" htmlFor="">E-mail</label>

                                    <input onChange={(e)=>CompanyEmailHendler(e.target.value)} className="form-control inputs-all" type="e-mail" placeholder="E-mail"/>
                                </div>
                            </div>
                            <div className="left-input">
                                <div>
                                    <label className="mt-4 label-style" htmlFor="">Lastname</label>

                                    <input  onChange={(e)=>CompanyLastNameHendler(e.target.value)} className="form-control inputs-all" type="text" placeholder="Lastname"/>
                                </div>
                                <div>
                                    <label className="mt-4 label-style" htmlFor="">Phone number</label>

                                    <input onChange={(e)=>CompanyNumberHendler(e.target.value)} className="form-control inputs-all" type="number" placeholder="+xxx (xx) xxx- xx-xx"/>
                                    <button className="btn btn-next-to1 mt-3" onClick={postUserCompany}>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="second-card1 card1" id="second-card">
                        <p className="name-top-input">
                            Your company!
                        </p>
                        <div onChange={baseImage} className="upload-image">
                            {
                                icon ? <><img className="img-in-upload" src={user.image} alt=""/></> : <><img className="img-in-upload1" src={image} alt=""/></>
                            }
                            <input  className="img-file-up" type="file"/>
                        </div>
                        <p className="add-your-prifile">Add your company photo</p>

                        <div>
                            <label className="mt-4 label-style" htmlFor="">Company name</label>

                            <input onChange={(e)=>CompanyCompanyHendler(e.target.value)} placeholder="Company name" className="form-control inputs-all" type="text"/>
                        </div>
                        <div>
                            <label className="mt-4 label-style" htmlFor="">number</label>

                            <input onChange={(e)=>CompanyCompanyNumHendler(e.target.value)} placeholder="number" className="form-control inputs-all" type="text"/>
                        </div>
                        <div className="all-btn-d-flex">
                            <button className="btn btn-next-to-bac" onClick={progresssecondback}>Back</button>
                            <button className="btn btn-next-to" onClick={postCompany}>Next</button>
                        </div>
                    </div>
                    <div className="third-card card1" id="third-card">
                        <p className="write-about">
                            About your company
                        </p>
                        <p className="complete-your">
                            Write down some more information about your company
                        </p>
                        <div>
                            <label className="label-style mt-4" htmlFor="">Location</label>
                            <input onChange={(e) => CompanyLocationHendler(e.target.value)} type="text" className="form-control inputs-all"/>
                        </div>
                        <div>
                            <label className="label-style mt-4" htmlFor="">Descriptions</label>

                            <textarea onChange={(e)=>CompanyDescriptionHendler(e.target.value)} className="form-control " placeholder="Describe yourself to buyers" name="" id="" cols="30" rows="6"></textarea>
                        </div>
                        <div className="all-btn-d-flex">
                            <button className="btn btn-next-to-bac" onClick={progressthirdback}>Back</button>
                            <button className="btn btn-next-to" onClick={postLocation}>Next</button>
                        </div>
                    </div>
                    <div className="fourth-card card1" id="fourth-card">

                        <VebsiteCompany/>
                        <div className="all-btn-d-flex">
                            <button className="btn btn-next-to-bac" onClick={progressfourthback}>Back</button>
                            <button className="btn btn-next-to" onClick={postContact}>Next</button>
                        </div>

                    </div>
                </div>
                <div className="container-circle-all">
                    <div className="container">
                        <div className="career">

                            <img src={logo} alt="logo" />
                        </div>
                        <div className="one1 dot1" id="one1"></div>
                        <div className="two1 dot1" id="two1"></div>
                        <div className="three1 dot1" id="three1"></div>
                        <div className="four1 dot1" id="four1"></div>

                        <p id="progress-text11" className="progress-text11 progress-text">Personal Information</p>
                        <p id="progress-text22" className="progress-text22 progress-text">Company</p>
                        <p id="progress-text33" className="progress-text33 progress-text">About</p>
                        <p id="progress-text44" className="progress-text44 progress-text">Contacts</p>

                        <div className="firstline"></div>
                        <div className="secondline" id="secondline"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompleteCompany;