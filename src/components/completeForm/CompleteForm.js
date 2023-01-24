import React, {useEffect, useState, useRef} from 'react'
import image from "./image/image.png"
import "./ffff.scss"
import ModalCom from "./completeModal/ModalCom";
import ComEducat from "./completeEducation/ComEducat";
import VebsiteCom from "./completeWeb/VebsiteCom";
import useStore from '../../StoreZustand/StoreZustand'
import resumePrev from '../../img/resumePrev.svg'
import resumeNext from '../../img/resumeNext.svg'
import letter from '../../img/letter.svg'
import location from '../../img/location.svg'
import phone from '../../img/phone.svg'
import whiteletter from '../../img/white-letter.svg'
import whitelocation from '../../img/white-location.svg'
import whitephone from '../../img/white-phone.svg'
import resumedot from '../../img/resumedot.png'
import { Routes, Route, NavLink } from "react-router-dom";
import RoutesPath from "../../routes/routes";
import { AiOutlineUser , AiFillCaretRight} from 'react-icons/ai';
import { ImHome } from 'react-icons/im';
import resumeLang from '../../img/resumeLang.png'
import logo from '../../img/logo.svg'
import GET, { baseUrl } from '../../API/GET';
import POST, { BaseUrl, token } from '../../API/POST';
import axios from 'axios';


function CompleteForm({setUser, user, resumeActive, setResumeActive,inputList,setInputList}) {

    
function progressfirst(){
    var firstCard = document.getElementById("first-card");
    var secondCard = document.getElementById("second-card");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var text = document.getElementById("progress-text1");
    var text2 = document.getElementById("progress-text2");
    text.style.opacity = "0";
    text2.style.opacity = "1";
    one.style.top = "34%";
    one.style.backgroundColor = "#1D71B8";
    one.style.border = "3px solid #FFFFFF";
    firstCard.style.bottom = "110%";
    secondCard.style.bottom = "20%";
    two.style.top = "68%";
    two.style.backgroundColor = "#FFFFFF";
    two.style.border = "7px solid #1D71B8"

}
function progresssecond(){
    var secondCard = document.getElementById("second-card");
    var thirdCard = document.getElementById("third-card");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var text2 = document.getElementById("progress-text2");
    var text3 = document.getElementById("progress-text3");
    text2.style.opacity = "0";
    text3.style.opacity = "1";
    two.style.top = "37%";
    two.style.backgroundColor = "#1D71B8"
    two.style.border = "3px solid #FFFFFF"
    secondCard.style.bottom = "110%"
    thirdCard.style.bottom = "10%"
    three.style.top = "68%"
    three.style.backgroundColor = "#FFFFFF"
    three.style.border = "7px solid #1D71B8"

}
function progressthird(){
    var fourthCard = document.getElementById("fourth-card");
    var thirdCard = document.getElementById("third-card");
    var four = document.getElementById("four");
    var three = document.getElementById("three");
    var text4 = document.getElementById("progress-text4");
    var text3 = document.getElementById("progress-text3");
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

}
function progressfourth(){
    var fourthCard = document.getElementById("fourth-card");
    var fifthCard = document.getElementById("fifth-card");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var text4 = document.getElementById("progress-text4");
    var text5 = document.getElementById("progress-text5");
    text5.style.opacity = "1";
    text4.style.opacity = "0";
    four.style.top = "43%"
    four.style.backgroundColor = "#1D71B8"
    four.style.border = "3px solid #FFFFFF"
    fourthCard.style.bottom = "110%";
    fifthCard.style.bottom = "25%";
    five.style.top = "68%"
    five.style.backgroundColor = "#FFFFFF"
    five.style.border = "7px solid #1D71B8"

}
function progressfifth(){
    var sixthCard = document.getElementById("sixth-card");
    var fifthCard = document.getElementById("fifth-card");
    var six = document.getElementById("six");
    var five = document.getElementById("five");
    var text6 = document.getElementById("progress-text6");
    var text5 = document.getElementById("progress-text5");
    text5.style.opacity = "0";
    text6.style.opacity = "1";
    five.style.top = "46%"
    five.style.backgroundColor = "#1D71B8"
    five.style.border = "3px solid #FFFFFF"
    fifthCard.style.bottom = "110%";
    sixthCard.style.bottom = "25%";
    six.style.top = "68%"
    six.style.backgroundColor = "#FFFFFF"
    six.style.border = "7px solid #1D71B8"
}
function progresssixth(){
    var sixthCard = document.getElementById("sixth-card");
    var seventhCard = document.getElementById("seventh-card");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var text6 = document.getElementById("progress-text6");
    var text7 = document.getElementById("progress-text7");
    text7.style.opacity = "1";
    text6.style.opacity = "0";
    six.style.top = "49%"
    six.style.backgroundColor = "#1D71B8"
    six.style.border = "3px solid #FFFFFF"
    seventhCard.style.bottom = "10%";
    sixthCard.style.bottom = "110%";
    seven.style.top = "68%"
    seven.style.backgroundColor = "#FFFFFF"
    seven.style.border = "7px solid #1D71B8"
}
function progressseventh(){
    var eighthCard = document.getElementById("eighth-card");
    var seventhCard = document.getElementById("seventh-card");
    var eight = document.getElementById("eight");
    var seven = document.getElementById("seven");
    var text8 = document.getElementById("progress-text8");
    var text7 = document.getElementById("progress-text7");
    var secondline = document.getElementById("secondline");
    secondline.style.opacity = "0";
    text7.style.opacity = "0";
    text8.style.opacity = "1";
    seven.style.top = "52%"
    seven.style.backgroundColor = "#1D71B8"
    seven.style.border = "3px solid #FFFFFF"
    eighthCard.style.bottom = "4%";
    seventhCard.style.bottom = "110%";
    eight.style.top = "68%"
    eight.style.backgroundColor = "#FFFFFF"
    eight.style.border = "7px solid #1D71B8"
}
function progresssecondback(){
    var firstCard = document.getElementById("first-card");
    var secondCard = document.getElementById("second-card");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var text = document.getElementById("progress-text1");
    var text2 = document.getElementById("progress-text2");
    text.style.opacity = "1";
    text2.style.opacity = "0";
    one.style.top = "60%";
    one.style.backgroundColor = "#FFFFFF";
    one.style.border = "7px solid #1D71B8";
    firstCard.style.bottom = "17%";
    secondCard.style.bottom = "-75%";
    two.style.top = "97%";
    two.style.backgroundColor = "#1D71B8";
    two.style.border = "3px solid #FFFFFF"
}
function progressthirdback(){
    var secondCard = document.getElementById("second-card");
    var thirdCard = document.getElementById("third-card");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var text2 = document.getElementById("progress-text2");
    var text3 = document.getElementById("progress-text3");
    text2.style.opacity = "1";
    text3.style.opacity = "0";
    two.style.top = "68%";
    two.style.backgroundColor = "#FFFFFF"
    two.style.border = "7px solid #1D71B8"
    secondCard.style.bottom = "20%"
    thirdCard.style.bottom = "-90%"
    three.style.top = "100%"
    three.style.backgroundColor = "#1D71B8"
    three.style.border = "3px solid #FFFFFF"
}
function progressfourthback(){
    var fourthCard = document.getElementById("fourth-card");
    var thirdCard = document.getElementById("third-card");
    var four = document.getElementById("four");
    var three = document.getElementById("three");
    var text4 = document.getElementById("progress-text4");
    var text3 = document.getElementById("progress-text3");
    text4.style.opacity = "0";
    text3.style.opacity = "1";
    three.style.top = "68%";
    three.style.backgroundColor = "#FFFFFF"
    three.style.border = "7px solid #1D71B8"
    thirdCard.style.bottom = "10%";
    fourthCard.style.bottom = "-75%"
    four.style.top = "103%"
    four.style.backgroundColor = "#1D71B8"
    four.style.border = "3px solid #FFFFFF"
}
function progressfifthback(){
    var fourthCard = document.getElementById("fourth-card");
    var fifthCard = document.getElementById("fifth-card");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var text4 = document.getElementById("progress-text4");
    var text5 = document.getElementById("progress-text5");
    text4.style.opacity = "1";
    text5.style.opacity = "0";
    four.style.top = "68%";
    four.style.backgroundColor = "#FFFFFF"
    four.style.border = "7px solid #1D71B8"
    fourthCard.style.bottom = "20%"
    fifthCard.style.bottom = "-75%"
    five.style.top = "106%"
    five.style.backgroundColor = "#1D71B8"
    five.style.border = "3px solid #FFFFFF"
}
function progresssixthback(){
    var sixthCard = document.getElementById("sixth-card");
    var fifthCard = document.getElementById("fifth-card");
    var six = document.getElementById("six");
    var five = document.getElementById("five");
    var text6 = document.getElementById("progress-text6");
    var text5 = document.getElementById("progress-text5");
    text6.style.opacity = "0";
    text5.style.opacity = "1";
    five.style.top = "68%";
    five.style.backgroundColor = "#FFFFFF"
    five.style.border = "7px solid #1D71B8"
    fifthCard.style.bottom = "20%"
    sixthCard.style.bottom = "-75%"
    six.style.top = "109%"
    six.style.backgroundColor = "#1D71B8"
    six.style.border = "3px solid #FFFFFF"
}
function progressseventhback(){
    var sixthCard = document.getElementById("sixth-card");
    var seventhCard = document.getElementById("seventh-card");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var text6 = document.getElementById("progress-text6");
    var text7 = document.getElementById("progress-text7");
    text6.style.opacity = "1";
    text7.style.opacity = "0";
    six.style.top = "68%";
    six.style.backgroundColor = "#FFFFFF";
    six.style.border = "7px solid #1D71B8"
    sixthCard.style.bottom = "20%"
    seventhCard.style.bottom = "-90%"
    seven.style.top = "112%"
    seven.style.backgroundColor = "#1D71B8"
    seven.style.border = "3px solid #FFFFFF"
}
function progresseighthback(){
    var eighthCard = document.getElementById("eighth-card");
    var seventhCard = document.getElementById("seventh-card");
    var eight = document.getElementById("eight");
    var seven = document.getElementById("seven");
    var text8 = document.getElementById("progress-text8");
    var text7 = document.getElementById("progress-text7");
    var secondline = document.getElementById("secondline");
    secondline.style.opacity = "1";
    text8.style.opacity = "0";
    text7.style.opacity = "1";
    seven.style.top = "68%";
    seven.style.backgroundColor = "#FFFFFF"
    seven.style.border = "7px solid #1D71B8"
    seventhCard.style.bottom = "10%"
    eighthCard.style.bottom = "-95%"
    eight.style.top = "115%"
    eight.style.backgroundColor = "#1D71B8"
    eight.style.border = "3px solid #FFFFFF"
}

    const {TagsHendler,tags,HobsHenedler,hobs,FreelancDataList,FreelancDataListJob, FreelancFirstNameHendler, FreelancFirstName, FreelancLastNameHendler, FreelancLastName, FreelancEmailHendler, FreelancEmail,FreelancPhoneHendler, FreelancPhone, FreelancLivingAddressHendler, FreelancLivingAddress,FreelancRegionHendler, FreelancRegion,FreelancStreetHendler, FreelancStreet,FreelancPositionsHendler, FreelancPositions,FreelancDateOfBirthHendler, FreelancDateOfBirth ,FreelancDescrobeHendler, FreelancDescrobe, FreelancWebsite, FrlExperienceCompName, FrlExperienceCompNameHandler, FrlExperienceCompJobHandler, FrlExperienceCompJob, FrlCurrentWorkHandler, FrlCurrentWork, FrlExpStartHandler, FrlExpStart, FrlExpEndHandler, FrlExpEnd, FrlExpDescrHandler,FrlExpDescr,
    FrlEduSchoolName,FrlEduSchoolNameHandler,FrlEduDegree,FrlEduDegreeHandler,FrlEduStudyType,FrlEduStudyTypeHandler,FrlEduLocation,FrlEduLocationHandler,FrlEduCurrStudy,FrlEduCurrStudyHandler} = useStore()

    function handleClikMore() {
        setInputList([...inputList, {language:"", level:""}])
    }

    const handleRemove = (index) =>{
        const list=[...inputList];
        list.splice(index,1);
        setInputList(list)
    };
    const [icon, setIcon] = useState(false);
 

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

    function handleKeyDown(e) {
        if (e.key !== 'Enter')return;
        const value = e.target.value;
        if (!value.trim())return;
        TagsHendler([...tags, value]);
        e.target.value = ""
        dSkills.current.style.display = 'none'
    }

    function handleKeyHop(e) {
        if (e.key !== 'Enter')return;
        const value = e.target.value;
        if (!value.trim())return;
        HobsHenedler([...hobs, value]);
        e.target.value = ""
    }

    function removeTag(index) {

        TagsHendler(tags.filter((el, i) => i !== index))
    }
    function removeHop(index) {
        HobsHenedler(hobs.filter((el, i) => i !== index))
    }

    const [resumes, setResumes] = useState([1,2,3,4,5,6])

    let [x ,setIks] = useState(0)
    let [resumecontrol ,setresumecontrol] = useState(0)
    let [countresume, setCountResume] = useState(0)
    let [btnPrev ,setBtnPrev] = useState(true)
    let [btnNext ,setBtnNext] = useState(false)

    const styles = { 
        transition: 'all 0.4s', 
        transform: `translateX(${x}px` 
      };
    const stylesCenter = { 
        transition: 'all 0.4s', 
        transform: `translateX(${resumecontrol}px` 
      };
    const ResumeCaruselNext = () => {
        setIks(x += -340)
        setresumecontrol(resumecontrol += 25)
        setCountResume(countresume += 1)
        if (countresume == resumes.length - 2) {
            setBtnNext(true)
        }
        else if (countresume != resumes.length) {
          setBtnNext(false)
        }
        if(x == 0) {
          setBtnPrev(true)
        }
        else if (x != 0){
          setBtnPrev(false)
        }
    }
    const ResumeCaruselPrev = () => {
        setIks(x += 340)
        setresumecontrol(resumecontrol += -25)
        setCountResume(countresume -= 1)
        if (countresume === resumes.length) {
            setBtnNext(true)
        }
        else if (countresume != resumes.length) {
          setBtnNext(false)
        }
        if(x == 0) {
          setBtnPrev(true)
        }
        else if (x != 0){
          setBtnPrev(false)
        }
    }

    const ResumeActiveHendler = (event) => {
        if (event === 1) {
            setResumeActive(1)
        }
        else if (event === 2) {
            setResumeActive(2)
        }
        else if (event === 3) {
            setResumeActive(3)
        }
        else if (event === 4) {
            setResumeActive(4)
        }
        else if (event === 5) {
            setResumeActive(5)
        }
        else if (event === 6) {
            setResumeActive(6)
        }
    }

    const [dataList1, setDataList1] = useState([]);
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    
    const [countries, setCountries] = useState([])
    const [position, setPosition] = useState([])
    const [langs, setLangs] = useState([])
    const [datasRigions, setdatasRigions] = useState([]);
    const [datasSkills, setDatasSkills] = useState([]);
    const [frlLangLevel, setFrlLangLevel] = useState();
    const [frlLang, setFrlLang] = useState();
    const [frlLangs, setFrlLangs] = useState();

    const dSkills = useRef()


    const showSkills=()=>{
        dSkills.current.style.display = 'block'
    }

    const addingRecSkills = item =>{

        const its = datasSkills.filter((e)=> {if(e.id == item.id) return e.name} )
        TagsHendler([...tags, its]); 

        dSkills.current.style.display = 'none'
    }

    const getDatas = async ()=>{
        await GET.Countries().then((res)=>{
            setCountries(res.data.data);              
        })

        await GET.Positions().then((res)=>{
            setPosition(res.data.data)
        })

        await GET.Langs().then((res)=>{
            setLangs(res.data.data)
        })

        await GET.FrLng().then((res)=>{
            setFrlLangs(res.data.data)
        })
    }

    const postFrlImfo= async ()=>{

        const formData = new FormData()

        formData.append('FirstName', FreelancFirstName)
        formData.append('LastName', FreelancLastName)
        formData.append('Email', FreelancEmail)
        formData.append('Phone', FreelancPhone)
        formData.append('Image', user['image'])

        try {
           const post =  await axios({
                method: 'post',
                url: `${BaseUrl}api/Freelancer`,
                data: formData,
                headers:{
                    "Content-Type" : "multipart/form-data",
                    "Authorization" : `Bearer ${token}`
                }
            })
            
            if (post.status === 200) {
                progressfirst()
            }else{
                alert(post.statusText)
            }
           
        } catch (error) {
            alert(error);
        }
    }

    const postFrlAddress= async ()=>{

        const formData = new FormData()

        formData.append('CountryId', FreelancLivingAddress)
        formData.append('RegionId', FreelancRegion)
        formData.append('Home', FreelancStreet)

        try {
            const post = await axios({
                method: 'post',
                url: `${BaseUrl}api/Freelancer/Adress`,
                data: formData,
                headers:{
                    "Content-Type" : "multipart/form-data",
                    "Authorization" : `Bearer ${token}`
                }
            })
            if (post.status === 200) {
                progresssecond()
            }else{
                alert(post.statusText)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const postPositions = async () =>{
        try {
           const poth= await POST.frPosition({
                positionId : FreelancPositions,
                freelancerHobbies : [1,2,3],
                freelancerSkills : [1,2,3],
                description : FreelancDescrobe
            })

            if(poth.status===200){
                progressthird()
            }else{
                alert(poth.statusText)
            }
        } catch (error) {
            alert(error);
        }
    }

    const postFrlLangs= async ()=>{

        const formData = new FormData()

        formData.append('LanguageId', frlLang)
        formData.append('Level', frlLangLevel)

        try {
           const post= await axios({
                method : 'post',
                url: `${baseUrl}api/FreelancerLanguage`,
                data: formData,
                headers:{
                    "Content-Type" : "multipart/form-data",
                    "Authorization" : `Bearer ${token}`
                }

            })
            if(post.status===200){
                progressfourth()
            }else(
                alert(post.statusText)
            )
        } catch (error) {
            alert(error);
        }
    }  



    useEffect(()=>{
        getDatas()
    },[])

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
                    <div className="first-card card1" id="first-card">
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
                                    <button className="btn btn-next-to1 mt-3" onClick={postFrlImfo}>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="second-card card1" id="second-card">
                        <p className="name-top-input">
                            Welcome  {FreelancFirstName}
                        </p>
                        <p className="complete-your">
                            Complete your profile to join our global community of freelancers and start selling your services to our growing network of businesses.
                        </p>
                        <div className="all-r-l-input">
                            <div className="right-input">
                                <label className="mt-4 label-style">Living address</label>

                                <select onChange={(e)=>{
                                    FreelancLivingAddressHendler(e.target.value) 
                                    let dataRigions = countries.filter((v)=> { if(v.id == e.target.value) return v.regions })
                                    setdatasRigions(dataRigions)
                                    }} className="form-select  form-control inputs-all">
                                    <option>Country</option>
                                    {countries.map((item)=>{
                                        return(
                                            <option key={item.id} value={item.id}>{item.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="left-input">
                                <div>
                                    <label className="mt-4 label-style">Region</label>
        
                                     <select onChange={(e)=> {FreelancRegionHendler(e.target.value)}} className="form-select form-control inputs-all">
                                        <option>City</option>
                                        {datasRigions?.[0]?.regions?.map((item)=>{
                                            return(
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="mt-4 label-style" >Street, apartment</label>

                            <input onChange={(e)=>FreelancStreetHendler(e.target.value)} placeholder="Street, apartment" className="form-control inputs-all1" type="text"/>
                        </div>
                        <div className="all-btn-d-flex">
                            <button className="btn btn-next-to-bac" onClick={progresssecondback}>Back</button>
                            <button className="btn btn-next-to" onClick={postFrlAddress}>Next</button>
                        </div>
                    </div>
                    <div className="third-card card1" id="third-card">
                        <p className="write-about">
                            Write a little about yourself
                        </p>
                        <div className="all-r-l-input">
                            <div className="right-input">
                                <label className="mt-4 label-style" >Select your Positions</label>

                                <select onChange={(e)=>{FreelancPositionsHendler(e.target.value)
                                let dataSkills = position.filter((v)=> { if(v.id == e.target.value) return v.skills })
                                setDatasSkills(dataSkills)
                                }} className="form-select form-control inputs-all">
                                    {position.map((item)=>{
                                        return(
                                            <option key={item.id} value={item.id}>{item.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="left-input">
                                <div>
                                    <label className="mt-4 label-style" >Date of birth</label>

                                    <input onChange={(e)=>FreelancDateOfBirthHendler(e.target.value)} type="date" className="form-control inputs-all"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="label-style mt-4">Write down your skills</label>
                            <div>
                                <div  className="tag-input-box form-control">
                                    {
                                        tags && tags.map((item, index)=>(
                                            <div className="tag-item" key={index}>
                                                <span className="text">{item}</span>
                                                <span onClick={()=>removeTag(index)} className="close">x</span>
                                            </div>
                                        ))
                                    }
                                    <input onKeyDown={handleKeyDown} onClick={showSkills} className="tag-input" type="text" placeholder="Type something"/>
                                    <div className='showSkills' ref={dSkills}>{datasSkills?.[0]?.skills?.map((item)=>{
                                        return(
                                            <button key={item.id} className={'skillBtn'} 
                                            onClick={()=>addingRecSkills(item.id)}>
                                                {item.name} 
                                            </button>
                                        )
                                    })}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="label-style mt-4" >Hobbies</label>
                            <div>
                                <div className="hob-input-box  form-control">
                                    {
                                        hobs.map((hobs, index)=>(
                                            <div className="hob-item" key={index}>
                                                <span className="textH">{hobs}</span>
                                                <span onClick={()=>removeHop(index)} className="closeH">x</span>
                                            </div>
                                        ))
                                    }
                                    <input onKeyDown={handleKeyHop} type="text" className="hobbies-input" placeholder="Type hobbies"/>
                                </div>

                            </div>
                        </div>
                        <div>

                            <textarea onChange={(e)=>FreelancDescrobeHendler(e.target.value)} className="form-control mt-4 " placeholder="Describe yourself to buyers" cols="30" rows="6"></textarea>
                        </div>
                        <div className="all-btn-d-flex">
                            <button className="btn btn-next-to-bac" onClick={progressthirdback}>Back</button>
                            <button className="btn btn-next-to" onClick={postPositions}>Next</button>
                        </div>
                    </div>
                    <div className="fourth-card card1" id="fourth-card">
                        <p className="write-about">Write what languages you speak</p>
                        <p className="complete-your">
                            The more languages ​​you know, <br/>
                            the more  foreign employers will contact you.
                        </p>
                        <label className="mt-4 label-style" htmlFor="">Language</label>
                        {
                            inputList.map((x, i)=> {
                                return(
                                <div className="all-r-l-input mt-3">
                                    <div className="right-input">

                                        <select onChange={(e) => setFrlLang(e.target.value)} className="form-select form-control inputs-all"
                                                name="language" >
                                                    {langs.map((item)=>{
                                                        return(
                                                            <option key={item.id} value={item.id}>{item.name}</option>
                                                        )
                                                    })}
                                        </select>
                                    </div>
                                    {
                                    inputList.length!==1 &&
                                    <button onClick={()=>handleRemove(i)} className="remove-btn">-</button>
                                    }
                                    
                                    <div className="left-input">
                                        <div>
                                            <select onClick={(e) => setFrlLangLevel(e.target.value)}
                                                    className="form-select form-control inputs-all " name="level">
                                                <option value="A-1 Beginner">A-1 Beginner</option>
                                                <option value="A-2 Elementary">A-2 Elementary</option>
                                                <option value="B-1 Intermediate">B-1 Intermediate</option>
                                                <option value="B-2 Upper-Intermediate">B-2 Upper-Intermediate</option>
                                                <option value="C-1 Expert">C-1 Expert</option>
                                                <option value="C-2 Mastery">C-2 Mastery</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )})}

                        <button value="add" onClick={handleClikMore} className="bnt mt-4 btn-success1 inputs-all1">
                            +Add new
                        </button>
                        <div className="all-btn-d-flex">
                            <button className="btn btn-next-to-bac" onClick={progressfourthback}>Back</button>
                            <button className="btn btn-next-to" onClick={postFrlLangs}>Next</button>
                        </div>

                    </div>
                    <div className="fifth-card card1" id="fifth-card">
                        <div>
                            <div>
                                <ModalCom FrlExperienceCompNameHandler={FrlExperienceCompNameHandler}
                                FrlExperienceCompName={FrlExperienceCompName}
                                FrlExperienceCompJobHandler={FrlExperienceCompJobHandler}
                                FrlExperienceCompJob={FrlExperienceCompJob}
                                FrlCurrentWorkHandler={FrlCurrentWorkHandler}
                                FrlCurrentWork={FrlCurrentWork}
                                FrlExpStartHandler={FrlExpStartHandler}
                                FrlExpStart={FrlExpStart}
                                FrlExpEndHandler={FrlExpEndHandler}
                                FrlExpEnd={FrlExpEnd}
                                FrlExpDescrHandler={FrlExpDescrHandler}
                                FrlExpDescr={FrlExpDescr}
                                />
                            </div>
                        </div>
                        <div className="all-btn-d-flex">
                            <button className="btn btn-next-to-bac" onClick={progressfifthback}>Back</button>
                            <button className="btn btn-next-to" onClick={progressfifth}>Next</button>
                        </div>
                    </div>
                    <div className="sixth-card card1" id="sixth-card">
                        <ComEducat FrlEduSchoolName={FrlEduSchoolName} FrlEduSchoolNameHandler={FrlEduSchoolNameHandler} FrlEduDegree={FrlEduDegree} FrlEduDegreeHandler={FrlEduDegreeHandler} FrlEduCurrStudy={FrlEduCurrStudy} FrlEduCurrStudyHandler={FrlEduCurrStudyHandler} FrlEduStudyType={FrlEduStudyType} FrlEduStudyTypeHandler={FrlEduStudyTypeHandler} FrlEduLocation={FrlEduLocation} FrlEduLocationHandler={FrlEduLocationHandler} start={start} setStart={setStart} end={end} setEnd={setEnd}/>
                        <div className="all-btn-d-flex">
                            <button className="btn btn-next-to-bac" onClick={progresssixthback}>Back</button>
                            <button className="btn btn-next-to" onClick={progresssixth}>Next</button>
                        </div>
                    </div>
                    <div className="seventh-card card1" id="seventh-card">
                        <VebsiteCom/>
                        <div className="all-btn-d-flex">
                            <button className="btn btn-next-to-bac" onClick={progressseventhback}>Back</button>
                            <button className="btn btn-next-to" onClick={progressseventh}>Next</button>
                        </div>
                    </div>
                    <div className="eighth-card card1 eight-card-resume" id="eighth-card">
                        <p className="write-about">Select your rezume design</p>
                        <p className="complete-your">
                            Your resume is ready! You need to choose one of this templates and all your info will be filled in it already.
                        </p>

                        <div className='resume-content'>
                           <div className='resume-content__carusel' style={styles}>
                             <div className={resumeActive === 1 ? 'resume-card resume-card-1 resume-card--active' : "resume-card resume-card-1"} onClick={() => ResumeActiveHendler(1)}>
                                 <div className='resume-card-1__info'>
                                    <h2 className='resume-card-1__title'>{FreelancFirstName} {FreelancLastName}</h2>
                                    <p className='resume-card-1__info-jobtitle'>{FreelancPositions}</p>
                                    <div className='resume-card-1__personal-info'>
                                        <div className='resume-card-1__personal-header'>
                                            <AiOutlineUser className='resume-card-1__personal-user-icon' />
                                            <span>Personal Info</span>
                                        </div>
                                        <div className='resume-card-1__info-column'>
                                            <p className='resume-card-1__info-text'>Phone</p>
                                            <p className='resume-card-1__info-subtext'>{FreelancPhone}</p>
                                        </div>
                                        <div className='resume-card-1__info-column'>
                                            <p className='resume-card-1__info-text'>E-mail</p>
                                            <p className='resume-card-1__info-subtext'>{FreelancEmail}</p>
                                        </div>
                                        <div className='resume-card-1__info-column'>
                                            <p className='resume-card-1__info-text'>Skills</p>
                                            {
                                                tags.map((item,i) => {
                                                    return <p className='resume-card-1__info-subtext' key={i}>{item}</p>
                                                })
                                            }
                                        </div>
                                        <div className='resume-card-1__info-column'>
                                            <p className='resume-card-1__info-text'>Hobbies</p>
                                              {
                                                hobs.map((item,i) => {
                                                    return <p className='resume-card-1__info-subtext' key={i}>{item}</p>
                                                })
                                            }
                                        </div>
                                        <div className='resume-card-1__info-column'>
                                            <p className='resume-card-1__info-text'>Languages</p>
                                            {
                                                inputList.map((item,i) => {
                                                    return <p className='resume-card-1__info-subtext' key={i}>{item.language}</p>
                                                }) 
                                            }
                                        </div>
                                        <div className='resume-card-1__info-column'>
                                            <p className='resume-card-1__info-text'>Work experience</p>
                                            {
                                                FreelancDataListJob.map((item,i) => {
                                                    return <p className='resume-card-1__info-subtext' key={i+1}><span className='resume-card-1__info-subtext-company'>{item.company}</span> <span>{item.start.substring(0, 4)}-{item.end.substring(0, 4)}</span></p>
                                                })
                                            }
                                        </div>
                                        <div className='resume-card-1__info-column'>
                                            <p className='resume-card-1__info-text'>Education</p>
                                            {
                                                FreelancDataList.map((item,i) => {
                                                    return <p className='resume-card-1__info-subtext' key={i}><span className='resume-card-1__info-subtext-company'>{item.school}</span> <span>{item.start.substring(0, 4)}-{item.end.substring(0, 4)}</span></p>
                                                })
                                            }
                                        </div>
                                    </div>
                                 </div>
                                 <div className='resume-card-1__about'>
                                    <span className='resume-card-1__about-date'>{FreelancDateOfBirth}</span>
                                    <div className='resume-card-1__about-user'>
                                        <p className='resume-card-1__about-user-title'>{FreelancFirstName} {FreelancLastName}</p>
                                        <p className='resume-card-1__about-user-job'>{FreelancPositions}</p>
                                    </div>
                                    <div className='resume-card-1__about-company'>
                                        <p>{FreelancStreet}</p>
                                    </div>
                                    <p className='resume-card-1__about-text'>{FreelancDescrobe}</p>
                                 </div>
                             </div>
                             <div className={resumeActive === 2 ? 'resume-card resume-card-2 resume-card--active' : "resume-card resume-card-2"}  onClick={() => ResumeActiveHendler(2)} >
                                <div className='resume-card-2__top'>
                                    <img className='resume-card-2__top-user' src={user.image} alt="user" />
                                    <div className='resume-card-2__top-info'>
                                        <h2>{FreelancFirstName} {FreelancLastName}</h2>
                                        <p>{FreelancPositions}</p>
                                        <div className='resume-card-2__top-infouser'>
                                            <div className='resume-card-2__top-infouserdf'>
                                                <div>
                                                    <span className='resume-card-2__top-infouser-title'>Phone:</span>
                                                    <span>{FreelancPhone}</span>
                                                </div>
                                                <div>
                                                    <span className='resume-card-2__top-infouser-title'>E-mail:</span>
                                                    <span>{FreelancEmail}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span className='resume-card-2__top-infouser-title'>Address:</span>
                                                <span>{FreelancLivingAddress} {FreelancRegion} {FreelancStreet}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className='resume-card-2__main'>
                                    <div className='resume-card-2__main-about'>
                                    <div className='resume-card-2__main-aboutitem'>
                                            <p>Education</p>
                                            <div>
                                            {
                                            FreelancDataList.map((item,i) => {
                                                    return <div className='resume-card-2__main-aboutitem-edu'>
                                                        <p>{item.start.substring(0, 4)} - {item.end.substring(0, 4)}</p>
                                                        <p>{item.degree}</p>
                                                        <p>{item.school}</p>
                                                    </div>
                                                })
                                            }
                                            </div>
                                        </div>
                                        <div className='resume-card-2__main-aboutitem'>
                                            <p>Languages</p>
                                            <div>
                                                {
                                                    inputList.map((item,i) => {
                                                        return  <span key={i}>{item.language} - {item.level}</span>
                                                    }) 
                                                }
                                            </div>
                                        </div>
                                        <div className='resume-card-2__main-aboutitem'>
                                            <p>Hobbies</p>
                                            <div>
                                            {
                                                hobs.map((item,i) => {
                                                    return  <span key={i}>{item}</span>
                                                })
                                            }
                                            </div>
                                        </div>
                                    </div>
                                    <div className='resume-card-2__main-info'>
                                        <div className='resume-card-2__main-infoitem'>
                                            <p>About me</p>
                                            <span>{FreelancDescrobe}</span>
                                        </div>
                                        <div className='resume-card-2__main-infoitem'>
                                            <p>Experience</p>
                                            {
                                                FreelancDataListJob.map((item,i) => {
                                                    return  <div  className='resume-card-2__main-infoitem-content' key={i+1}>
                                                    <div className='resume-card-2__main-infoitem-contentleft'>
                                                        <div>
                                                            <span>{item.start.substring(0, 4)} - {item.end.substring(0, 4)}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className='resume-card-2__subtext'>{item.job}</span>
                                                        <span>{item.tagName}</span>
                                                    </div>
                                                </div>
                                                })
                                            }
                                        </div>
                                        <div className='resume-card-2__main-infoitem'>
                                            <p>Skills</p>
                                            <div className='resume-card-2__main-infoitem-skills'>
                                                {
                                                    tags.map((item,i) => {
                                                        return <div key={i} className="resume-card-2__main-infoitem-skill">
                                                            <p>{item}</p>
                                                            <div className='resume-card-2__main-infoitem-skill-dots'>
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                            </div>
                                                         </div>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>        
                             </div>
                             <div className={resumeActive === 3 ? 'resume-card resume-card-3 resume-card--active' : "resume-card resume-card-3"} onClick={() => ResumeActiveHendler(3)}>
                                <div className='resume-card-3__about'>
                                    <img className='resume-card-3__about-user' src={user.image} alt="user" />
                                    
                                    <div className='resume-card-3__about-item resume-card-3__about-subitem'>
                                        <p>skills</p>
                                        <div>
                                           {
                                                tags.map((item,i) => {
                                                    return <span key={i}>{item}</span>
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='resume-card-3__about-item resume-card-3__about-subitem'>
                                        <p>education</p>
                                        {
                                            FreelancDataList.map((item,i) => {
                                                return <div key={i+1}>
                                                <span>{item.degree}</span>
                                                <span>{item.school}</span>
                                                <span>{item.start.substring(0, 4)}-{item.end.substring(0, 4)}</span>
                                            </div>
                                                })
                                            }
                                    </div>
                                    <div className='resume-card-3__about-item'>
                                        <div className='resume-card-3__about-iteminfo'>
                                            <img src={phone} alt="phone" />
                                            <p>Phone</p>
                                        </div>
                                        <span className='resume-card-3__about-item-span'>{FreelancPhone}</span>
                                    </div>
                                    <div className='resume-card-3__about-item'>
                                        <div className='resume-card-3__about-iteminfo'>
                                            <img src={letter} alt="letter" />
                                            <p>E-mail</p>
                                        </div>
                                        <span className='resume-card-3__about-item-span'>{FreelancEmail}</span>
                                    </div>
                                    <div className='resume-card-3__about-item'>
                                        <div className='resume-card-3__about-iteminfo'>
                                            <img src={phone} alt="phone" />
                                            <p>Website</p>
                                        </div>
                                        <span className='resume-card-3__about-item-span'>{FreelancWebsite}</span>
                                    </div>
                                    <div className='resume-card-3__about-item'>
                                        <div className='resume-card-3__about-iteminfo'>
                                            <img src={location} alt="location" />
                                            <p>Address</p>
                                        </div>
                                        <span className='resume-card-3__about-item-span'>{FreelancLivingAddress} {FreelancRegion} {FreelancStreet}</span>
                                    </div>
                                </div>
                                <div className='resume-card-3__main'>
                                    <div className='resume-card-3__main-top'>
                                        <h2>{FreelancFirstName} {FreelancLastName}</h2>
                                        <p>{FreelancPositions}</p>
                                    </div>
                                    <div className='resume-card-3__main-item'>
                                        <p>about me</p>
                                        <p className='resume-card-3__main-text'>{FreelancDescrobe}</p>
                                    </div>
                                    <div className='resume-card-3__main-item'>
                                        <p>work experience</p>
                                        <div className='resume-card-3__main-item-center'>
                                          {
                                                FreelancDataListJob.map((item,i) => {
                                                    return  <div className='resume-card-3__main-itemdf' key={i+1}>
                                                    <span className='resume-card-3__main-itemyears'>{item.start.substring(0, 4)} - {item.end.substring(0, 4)}</span>
                                                    <div className='resume-card-3__main-itemcolumn'>
                                                        <p>{item.company}</p>
                                                        <span>{item.job}</span>
                                                    </div>
                                                </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>        
                             </div>
                             <div className={resumeActive === 4 ? 'resume-card resume-card-4 resume-card--active' : "resume-card resume-card-4"}   onClick={() => ResumeActiveHendler(4)}>
                                  <div className='resume-card-4__about'>
                                    <div className='resume-card-4__about-top'>
                                        <img className='resume-card-4__about-user' src={user.image} alt="user" />
                                        <svg className='resume-card-4__about-topsvg1' width="262" height="271" viewBox="0 0 262 271" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_1537_5625)">
                                            <path d="M97.5601 -29.5158C104.656 -33.538 113.344 -33.538 120.44 -29.5159L167.725 -2.71468L214.578 24.8348C221.609 28.9693 225.953 36.4927 226.018 44.6493L226.45 99L226.018 153.351C225.953 161.507 221.609 169.031 214.578 173.165L167.725 200.715L120.44 227.516C113.344 231.538 104.656 231.538 97.5601 227.516L50.275 200.715L3.42196 173.165C-3.6095 169.031 -7.95312 161.507 -8.01796 153.351L-8.45 99L-8.01796 44.6493C-7.95312 36.4927 -3.6095 28.9693 3.42197 24.8348L50.275 -2.71468L97.5601 -29.5158Z" fill="white"/>
                                            </g>
                                            <defs>
                                            <filter id="filter0_d_1537_5625" x="-43.45" y="-62.5325" width="304.9" height="333.065" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dy="5"/>
                                            <feGaussianBlur stdDeviation="17.5"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1537_5625"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1537_5625" result="shape"/>
                                            </filter>
                                            </defs>
                                         </svg>
                                         <svg className='resume-card-4__about-topsvg2' width="305" height="318" viewBox="0 0 305 318" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_1537_5624)">
                                            <path d="M91.7415 -81.2179C102.447 -87.2858 115.553 -87.2858 126.258 -81.2179L191.65 -44.154L256.444 -6.05526C267.052 0.182121 273.605 11.532 273.703 23.8374L274.3 99L273.703 174.163C273.605 186.468 267.052 197.818 256.444 204.055L191.65 242.154L126.259 279.218C115.553 285.286 102.447 285.286 91.7415 279.218L26.35 242.154L-38.444 204.055C-49.0518 197.818 -55.6047 186.468 -55.7025 174.163L-56.3 99L-55.7025 23.8374C-55.6047 11.5321 -49.0518 0.182129 -38.444 -6.05524L26.35 -44.154L91.7415 -81.2179Z" fill="#776CE2"/>
                                            </g>
                                            <defs>
                                            <filter id="filter0_d_1537_5624" x="-86.3" y="-111.769" width="390.6" height="429.538" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dy="4"/>
                                            <feGaussianBlur stdDeviation="15"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1537_5624"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1537_5624" result="shape"/>
                                            </filter>
                                            </defs>
                                         </svg>
                                    </div>
                                    <div className='resume-card-4__about-item'>
                                        <div className='resume-card-4__about-itemdf'>
                                            <img src={whitephone} alt="phone" />
                                            <span>{FreelancPhone}</span>
                                        </div>
                                        <div className='resume-card-4__about-itemdf'>
                                            <img src={whiteletter} alt="letter" />
                                            <span>{FreelancEmail}</span>
                                        </div>
                                        <div className='resume-card-4__about-itemdf'>
                                            <img src={whitelocation} alt="location" />
                                            <span>{FreelancLivingAddress} {FreelancRegion} {FreelancStreet}</span>
                                        </div>
                                    </div>
                                    <div className='resume-card-4__about-item'>
                                        <div className='resume-card-4__about-item-title'>
                                             <svg width="210" height="30" viewBox="0 0 210 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                 <path d="M0 0H182C197.464 0 210 12.536 210 28V30H0V0Z" fill="white"/>
                                             </svg>
                                             <p>education</p>
                                        </div>
                                         {
                                            FreelancDataList.map((item,i) => {
                                                return <>
                                                      <p className='resume-card-4__about-item-subtitle'>{item.school}</p>
                                                      <p className='resume-card-4__about-item-subtext'>{item.start.substring(0, 4)}-{item.end.substring(0, 4)}</p>
                                                </>
                                                })
                                            }
                                    </div>
                                    <div className='resume-card-4__about-item'>
                                        <div className='resume-card-4__about-item-title'>
                                             <svg width="210" height="30" viewBox="0 0 210 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                 <path d="M0 0H182C197.464 0 210 12.536 210 28V30H0V0Z" fill="white"/>
                                             </svg>
                                             <p>skills</p>
                                        </div>
                                        {
                                            tags.map((item,i) => {
                                                return <p className='resume-card-4__about-item-subtext' key={i}>{item}</p>
                                            })
                                        }
                                    </div>
                                  </div>
                                  <div className='resume-card-4__info'>
                                        <div className='resume-card-4__info-top'>
                                            <h2 className='resume-card-4__info-top-title'>{FreelancFirstName} <span>{FreelancLastName}</span></h2>                                            
                                            <p className='resume-card-4__info-top-jobtitle'>{FreelancPositions}</p>
                                            <svg className='resume-card-4__info-topbg1' width="156" height="86" viewBox="0 0 156 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_1537_5627)">
                                                <path d="M79.1027 -57.2242C82.1405 -58.9461 85.8595 -58.9461 88.8973 -57.2242L110.1 -45.2065L131.109 -32.8533C134.119 -31.0834 135.979 -27.8627 136.006 -24.3709L136.2 0L136.006 24.3709C135.979 27.8627 134.119 31.0834 131.109 32.8533L110.1 45.2065L88.8973 57.2242C85.8595 58.9461 82.1405 58.9461 79.1027 57.2242L57.9 45.2065L36.8911 32.8533C33.8809 31.0834 32.0215 27.8627 31.9937 24.3709L31.8 0L31.9937 -24.3709C32.0215 -27.8627 33.8809 -31.0834 36.8911 -32.8533L57.9 -45.2065L79.1027 -57.2242Z" fill="#F6B399"/>
                                                </g>
                                                <defs>
                                                <filter id="filter0_d_1537_5627" x="0.800049" y="-81.5156" width="154.4" height="167.031" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                <feOffset dx="-6" dy="2"/>
                                                <feGaussianBlur stdDeviation="12.5"/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1537_5627"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1537_5627" result="shape"/>
                                                </filter>
                                                </defs>
                                            </svg>
                                            <svg className='resume-card-4__info-topbg2' width="85" height="10" viewBox="0 0 85 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 0H75C80.5229 0 85 4.47715 85 10H10C4.47715 10 0 5.52285 0 0Z" fill="#776CE2"/>
                                            </svg>
                                            <svg className='resume-card-4__info-topbg3' width="91" height="95" viewBox="0 0 91 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_1537_5628)">
                                                <path d="M49.7192 24.0094C50.8238 23.3833 52.1762 23.3833 53.2808 24.0094L61.2875 28.5476L69.221 33.2124C70.3156 33.856 70.9918 35.0272 71.0018 36.297L71.075 45.5L71.0018 54.703C70.9918 55.9728 70.3156 57.144 69.221 57.7876L61.2875 62.4524L53.2808 66.9906C52.1762 67.6167 50.8238 67.6167 49.7192 66.9906L41.7125 62.4524L33.779 57.7876C32.6844 57.144 32.0083 55.9728 31.9982 54.703L31.925 45.5L31.9982 36.2969C32.0083 35.0272 32.6844 33.856 33.779 33.2124L41.7125 28.5476L49.7192 24.0094Z" fill="#F6B399"/>
                                                </g>
                                                <defs>
                                                <filter id="filter0_d_1537_5628" x="0.925049" y="0.539795" width="89.1499" height="93.9204" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                <feOffset dx="-6" dy="2"/>
                                                <feGaussianBlur stdDeviation="12.5"/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1537_5628"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1537_5628" result="shape"/>
                                                </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className='resume-card-4__info-item'>
                                            <p className='resume-card-4__info-item-title'>About me</p>
                                            <p className='resume-card-4__info-item-text'>{FreelancDescrobe}</p>
                                        </div>
                                        <div className='resume-card-4__info-item'>
                                            <div className='resume-card-4__info-item-subtitle'>
                                                <svg width="255" height="30" viewBox="0 0 255 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M0 0H227C242.464 0 255 12.536 255 28V30H0V0Z" fill="#776CE2"/>
                                                </svg>
                                                <p>work</p>
                                            </div>
                                            {
                                                FreelancDataListJob.map((item,i) => {
                                                    return  <div className='resume-card-4__info-item-body'>
                                                    <div className='resume-card-4__info-item-bodycontent'>
                                                        <div className='resume-card-4__info-item-bodyl'>
                                                            <svg className='resume-card-4__info-item-body-svg1' width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5.9896 0.302937C6.30424 0.116188 6.69576 0.116188 7.0104 0.302938L9.725 1.91414L12.4776 3.45945C12.7967 3.63856 12.9924 3.97762 12.988 4.34349L12.95 7.5L12.988 10.6565C12.9924 11.0224 12.7967 11.3614 12.4776 11.5406L9.725 13.0859L7.0104 14.6971C6.69576 14.8838 6.30424 14.8838 5.9896 14.6971L3.275 13.0859L0.522361 11.5406C0.203309 11.3614 0.0075525 11.0224 0.0119615 10.6565L0.0500002 7.5L0.0119615 4.34349C0.0075525 3.97762 0.203309 3.63856 0.522361 3.45945L3.275 1.91414L5.9896 0.302937Z" fill="#776CE2"/>
                                                            </svg>
                                                            <svg className='resume-card-4__info-item-body-svg2' width="1" height="55" viewBox="0 0 1 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.5 1L0.499998 54" stroke="#776CE2" stroke-linecap="round"/>
                                                            </svg>
                                                        </div>
                                                        <div className='resume-card-4__info-item-bodyr'>
                                                            <div className='resume-card-4__info-item-bodyr-between'>
                                                                <p className='resume-card-4__info-item-bodyr-text1'>{item.job}</p>
                                                                <p className='resume-card-4__info-item-bodyr-text2'>{item.start.substring(0, 4)}-{item.end.substring(0, 4)}</p>
                                                            </div>
                                                            <h4 className='resume-card-4__info-item-bodyr-title'>{item.company}</h4>
                                                            <p className='resume-card-4__info-item-bodyr-subtext'>{item.tagName}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                })
                                            }
                                        </div>
                                  </div>
                             </div>
                             <div className={resumeActive === 5 ? 'resume-card resume-card-5 resume-card--active' : "resume-card resume-card-5"} onClick={() => ResumeActiveHendler(5)}>
                                <div className='resume-card-5__top'>
                                    <div className='resume-card-5__top-info'>
                                        <h2><span className='resume-card-5__top-infoname'>{FreelancFirstName}</span> {FreelancLastName}</h2>
                                        <p>{FreelancPositions}</p>
                                    </div>
                                    <div className='resume-card-5__top-img'>
                                        <div>
                                             <img src={user.image} alt="user" />
                                             <span className='resume-card-5__top-imgposition1'></span>
                                             <span className='resume-card-5__top-imgposition2'></span>
                                             <span className='resume-card-5__top-imgposition3'></span>
                                        </div>
                                    </div>
                                </div>    
                                <div className='resume-card-5__main'>
                                    <div className='resume-card-5__main-info'>
                                        <div className='resume-card-5__main-item'>
                                            <p className='resume-card-5__main-item-text'>EDUCATION</p>
                                             {
                                                FreelancDataList.map((item,i) => {
                                                return  <div className='resume-card-5__main-itemcenter' key={i}>
                                                <p className='resume-card-5__main-item-subtext'>{item.start.substring(0, 4)}-{item.end.substring(0, 4)}</p>
                                                <p className='resume-card-5__main-item-subtext'>{item.degree}</p>
                                                <p className='resume-card-5__main-item-subtext'>{item.school}</p>
                                            </div>
                                                })
                                            }
                                        </div>
                                        <div className='resume-card-5__main-item'>
                                            <p className='resume-card-5__main-item-text'>experience</p>
                                            {
                                                FreelancDataListJob.map((item,i) => {
                                                    return <div className='resume-card-5__main-itemcenter' key={i+1}>
                                                    <p className='resume-card-5__main-item-subtext'>{item.start.substring(0, 4)}</p>
                                                    <p className='resume-card-5__main-item-subtext'>{item.job}</p>
                                                    <p className='resume-card-5__main-item-subtext'>{item.company}</p>
                                                    <p className='resume-card-5__main-item-subtext'>{item.tagName}</p>
                                                </div>
                                                })
                                            }
                                        </div>
                                        <div className='resume-card-5__main-item'>
                                            <p className='resume-card-5__main-item-text'>expertise</p>
                                            <div className='resume-card-5__main-itemcenter'>
                                                <div className='resume-card-5__main-item-lang'>
                                                    {
                                                        tags.map((item,i) => {
                                                            return <div className='resume-card-5__main-item-langcontent' key={i+1}>
                                                            <img src={resumeLang} alt="" />
                                                            <p>{item}</p>
                                                        </div>
                                                        }) 
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='resume-card-5__main-about'>
                                        <div className='resume-card-5__main-item'>
                                            <p className='resume-card-5__main-item-text'>About me</p>
                                            <p className='resume-card-5__main-item-abouttext'>{FreelancDescrobe}</p>
                                        </div>
                                        <div className='resume-card-5__main-item'>
                                            <p className='resume-card-5__main-item-text'>contact info</p>
                                            <div className='resume-card-5__main-item-contactinfo'>
                                                <p>phone</p>
                                                <span>{FreelancPhone}</span>
                                            </div>
                                            <div className='resume-card-5__main-item-contactinfo'>
                                                <p>email</p>
                                                <span>{FreelancEmail}</span>
                                            </div>
                                            <div className='resume-card-5__main-item-contactinfo'>
                                                <p>area</p>
                                                <span>{FreelancLivingAddress} {FreelancStreet}</span>
                                            </div>
                                        </div>
                                        <div className='resume-card-5__main-item'>
                                            <p className='resume-card-5__main-item-text'>hobbies</p>
                                            <div className='resume-card-5__main-item-contactinfo'>
                                               {
                                                   hobs.map((item,i) => {
                                                       return <span key={i}>{item}</span>
                                                   })
                                               }
                                            </div>
                                        </div>
                                    </div>
                                </div>     
                             </div>
                             <div className={resumeActive === 6 ? 'resume-card resume-card-6 resume-card--active' : "resume-card resume-card-6"} onClick={() => ResumeActiveHendler(6)}>
                                <div className='resume-card-6__top'>
                                      <svg className='resume-card-6__l-dotimg' width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="1.5" cy="1.5" r="1.5" fill="#323232"/>
                                            <circle cx="14.5" cy="1.5" r="1.5" fill="#323232"/>
                                            <circle cx="27.5" cy="1.5" r="1.5" fill="#323232"/>
                                            <circle cx="40.5" cy="1.5" r="1.5" fill="#323232"/>
                                            <circle cx="1.5" cy="14.5" r="1.5" fill="#323232"/>
                                            <circle cx="1.5" cy="27.5" r="1.5" fill="#323232"/>
                                            <circle cx="1.5" cy="40.5" r="1.5" fill="#323232"/>
                                            <circle cx="14.5" cy="14.5" r="1.5" fill="#323232"/>
                                            <circle cx="14.5" cy="27.5" r="1.5" fill="#323232"/>
                                            <circle cx="27.5" cy="14.5" r="1.5" fill="#323232"/>
                                       </svg>
                                       <svg className='resume-card-6__r-dotimg' width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle r="1.5" transform="matrix(-1 0 0 1 40.5 1.5)" fill="#323232"/>
                                            <circle r="1.5" transform="matrix(-1 0 0 1 27.5 1.5)" fill="#323232"/>
                                            <circle r="1.5" transform="matrix(-1 0 0 1 14.5 1.5)" fill="#323232"/>
                                            <circle r="1.5" transform="matrix(-1 0 0 1 1.5 1.5)" fill="#323232"/>
                                            <circle r="1.5" transform="matrix(-1 0 0 1 40.5 14.5)" fill="#323232"/>
                                            <circle r="1.5" transform="matrix(-1 0 0 1 40.5 27.5)" fill="#323232"/>
                                            <circle r="1.5" transform="matrix(-1 0 0 1 40.5 40.5)" fill="#323232"/>
                                            <circle r="1.5" transform="matrix(-1 0 0 1 27.5 14.5)" fill="#323232"/>
                                            <circle r="1.5" transform="matrix(-1 0 0 1 27.5 27.5)" fill="#323232"/>
                                            <circle r="1.5" transform="matrix(-1 0 0 1 14.5 14.5)" fill="#323232"/>
                                       </svg>
                                       <svg className='resume-card-6__bg1' width="194" height="134" viewBox="0 0 194 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M133.923 -75L164.336 -23.277L193.923 28.923L164.336 81.123L133.923 132.846L73.923 133.323L13.923 132.846L-16.49 81.123L-46.077 28.923L-16.49 -23.277L13.923 -75L73.9231 -75.477L133.923 -75Z" fill="#C6D9DF"/>
                                        </svg>
                                        <svg className='resume-card-6__bg2' width="141" height="123" viewBox="0 0 141 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M105.622 1L123.363 31.1718L140.622 61.6218L123.363 92.0718L105.622 122.244L70.6218 122.522L35.6218 122.244L17.8808 92.0718L0.62178 61.6218L17.8808 31.1718L35.6218 1L70.6218 0.721777L105.622 1Z" fill="#E3EBEE"/>
                                        </svg>
                                        <svg className='resume-card-6__bg3' width="214" height="222" viewBox="0 0 214 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M262.554 -82.5L306.907 -7.07056L350.054 69.0544L306.907 145.179L262.554 220.609L175.054 221.304L87.5544 220.609L43.2021 145.179L0.0544473 69.0544L43.2021 -7.07056L87.5544 -82.5L175.054 -83.1956L262.554 -82.5Z" fill="#C6D9DF"/>
                                        </svg>
                                    <div className='resume-card-6__top-column'>
                                        <div className='resume-card-6__heading'>
                                            <h2>{FreelancFirstName} {FreelancLastName}</h2>
                                            <p>{FreelancPositions}</p>
                                        </div>
                                        <div className='resume-card-6__top-contacts'>
                                            <div className='resume-card-6__top-contact'>
                                                <img className='resume-card-6__top-contact-icon' src={phone} alt="phone" />
                                                <p>{FreelancPhone}</p>
                                            </div>
                                            <div className='resume-card-6__top-contact'>
                                                <img className='resume-card-6__top-contact-icon' src={letter} alt="location" />
                                                <p>{FreelancEmail}</p>
                                            </div>
                                            <div className='resume-card-6__top-contact'>
                                                <img className='resume-card-6__top-contact-icon' src={location} alt="location" />

                                                <p>{FreelancLivingAddress} {FreelancRegion} {FreelancStreet}</p>
                                            </div>
                                            <div className='resume-card-6__top-contact'>
                                                <ImHome className='resume-card-6__top-contact-icon' />
                                                <p>{FreelancWebsite}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <img className='resume-card-6__user-img' src={user.image} alt="user" />
                                </div>  
                                <div className='resume-card-6__main'>
                                    <div className='resume-card-6__main-info'>
                                        <div className='resume-card-6__main-item'>
                                            <p className='resume-card-6__main-item-title'>profile</p>
                                            <p className='resume-card-6__main-item-subtext'>{FreelancDescrobe}</p>
                                        </div>
                                        <div className='resume-card-6__main-item'>
                                            <p className='resume-card-6__main-item-title'>education</p>
                                            {
                                                FreelancDataList.map((item,i) => {
                                                    return  <div key={i}>
                                                    <div className='resume-card-6__main-item-top'>
                                                        <div className='resume-card-6__main-item-content'>
                                                            <AiFillCaretRight className='resume-card-6__main-item-icon'/>
                                                            <p>{item.school}</p>
                                                        </div>
                                                        <p>{item.start.substring(0, 4)}-{item.end.substring(0, 4)}</p>
                                                    </div>
                                                    <p className='resume-card-6__main-item-subtext'>{item.studyType}</p>
                                                </div> 
                                                })
                                            }
                                        </div>
                                        <div className='resume-card-6__main-item'>
                                            <p className='resume-card-6__main-item-title'>language</p>
                                            {
                                                inputList.map((item,i) => {
                                                    return <div className='resume-card-6__main-item-subtext resume-card-6__main-item-dots' key={i}>
                                                    <p className='resume-card-6__main-item-lang'>{item.language}</p>
                                                    <div className='resume-card-6__main-item-contentdot'>
                                                        <img className='resume-card-6__main-item-dot' src={resumedot} alt="" />
                                                        <img className='resume-card-6__main-item-dot' src={resumedot} alt="" />
                                                        <img className='resume-card-6__main-item-dot' src={resumedot} alt="" />
                                                        <img className='resume-card-6__main-item-dot' src={resumedot} alt="" />
                                                        <img className='resume-card-6__main-item-dot' src={resumedot} alt="" />
                                                    </div>
                                                </div>
                                                }) 
                                            }
                                        </div>
                                        <div className='resume-card-6__main-item'>
                                            <p className='resume-card-6__main-item-title'>interest</p>
                                            {
                                                hobs.map((item,i) => {
                                                    return  <p className='resume-card-6__main-item-subtext'>{item}</p>
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div>
                                    <div className='resume-card-6__main-item'>
                                            <p className='resume-card-6__main-item-title'>work experience</p>
                                            {
                                                FreelancDataListJob.map((item,i) => {
                                                    return <div key={i+1}>
                                                    <div className='resume-card-6__main-item-top resume-card-6__main-item-top-jobcontent'>
                                                        <div className='resume-card-6__main-item-content'>
                                                            <AiFillCaretRight className='resume-card-6__main-item-icon'/>
                                                            <p>{item.job} ({item.start.substring(0, 4)}-{item.end.substring(0, 4)})</p>
                                                        </div>
                                                    </div>
                                                    <p className='resume-card-6__main-item-job-text'>{item.company}</p>
                                                    <p className='resume-card-6__main-item-subtext'>{item.tagName}</p>
                                                </div>
                                                })
                                            }
                                            
                                        </div>
                                        <div className='resume-card-6__main-item'>
                                            <p className='resume-card-6__main-item-title'>skills</p>
                                            {
                                                tags.map((item,i) => {
                                                    return <div className='resume-card-6__main-item-subtext resume-card-6__main-item-dots' key={i}>
                                                    <p className='resume-card-6__main-item-lang'>{item}</p>
                                                    <div className='resume-card-6__main-item-contentdot'>
                                                        <img className='resume-card-6__main-item-dot' src={resumedot} alt="" />
                                                        <img className='resume-card-6__main-item-dot' src={resumedot} alt="" />
                                                        <img className='resume-card-6__main-item-dot' src={resumedot} alt="" />
                                                        <img className='resume-card-6__main-item-dot' src={resumedot} alt="" />
                                                        <img className='resume-card-6__main-item-dot' src={resumedot} alt="" />
                                                    </div>
                                                </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>  
                             </div>
                           </div>
                        </div>



                        <div>

                        </div>

                        <div className='resume-card__bottom'>
                            <div className='resume-controll'>
                                <button disabled={btnPrev} onClick={ResumeCaruselPrev}><img src={resumePrev} alt="prev" /></button>
                                <div className='resume-controll__center'><span style={stylesCenter} className='resume-controll__center--active'></span></div>
                                <button disabled={btnNext} onClick={ResumeCaruselNext}><img src={resumeNext} alt="next" /></button>
                            </div>
                            <div className="d-flex">
                                <button className="btn btn-next-to-bac" onClick={progresseighthback}>Back</button>

                                <button disabled={resumeActive === 0 ? true : false}  className="btn btn-next-to" ><NavLink to={`/${RoutesPath.completeResume}`} >Next</NavLink></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-circle-all">
                    <div className="container">
                        <div className="career">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="one dot" id="one"></div>
                        <div className="two dot" id="two"></div>
                        <div className="three dot" id="three"></div>
                        <div className="four dot" id="four"></div>
                        <div className="five dot" id="five"></div>
                        <div className="six dot" id="six"></div>
                        <div className="seven dot" id="seven"></div>
                        <div className="eight dot" id="eight"></div>
                        <p id="progress-text1" className="progress-text1 progress-text">Personal Information</p>
                        <p id="progress-text2" className="progress-text2 progress-text">Address</p>
                        <p id="progress-text3" className="progress-text3 progress-text">About Yourself and Skills</p>
                        <p id="progress-text4" className="progress-text4 progress-text">Language</p>
                        <p id="progress-text5" className="progress-text5 progress-text">Experience</p>
                        <p id="progress-text6" className="progress-text6 progress-text">Educations</p>
                        <p id="progress-text7" className="progress-text7 progress-text">Contacts</p>
                        <p id="progress-text8" className="progress-text8 progress-text">Resume</p>

                        <div className="firstline"></div>
                        <div className="secondline" id="secondline"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompleteForm;