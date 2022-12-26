import React, {useEffect, useState, useRef} from 'react'
import logo from '../../img/logo.svg'
import "./company-post-job.scss"
import { frontend, backend, webDeisger, devops, technicalWriting, mobileDeveloper, QADeveloper } from './mock'

const CompanyPostJob = () => {

    function progressfirst(){
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
    function progresssecond(){
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
    function progressthird(){
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
        secondline.style.opacity = "1";
    }
    function progresssecondback(){
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
        two.style.top = "106%";
        two.style.backgroundColor = "#1D71B8";
        two.style.border = "3px solid #FFFFFF"
    }
    function progressthirdback(){
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
        three.style.top = "109%"
        three.style.backgroundColor = "#1D71B8"
        three.style.border = "3px solid #FFFFFF"
    }
    function progressfourthback(){
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
        four.style.top = "112%"
        four.style.backgroundColor = "#1D71B8"
        four.style.border = "3px solid #FFFFFF"
        secondline.style.opacity = "1";
    }
    function progressfourth(){
        var fourthCard = document.getElementById("fourth-card");
        var fifthCard = document.getElementById("fifth-card");
        var four = document.getElementById("four1");
        var five = document.getElementById("five1");
        var text4 = document.getElementById("progress-text44");
        var text5 = document.getElementById("progress-text55");
        var secondline = document.getElementById("secondline");
        text4.style.opacity = "0";
        text5.style.opacity = "1";
        five.style.top = "68%";
        five.style.backgroundColor = "#FFFFFF"
        five.style.border = "7px solid #1D71B8"
        fifthCard.style.bottom = "20%";
        fourthCard.style.bottom = "110%"
        four.style.top = "43%"
        four.style.backgroundColor = "#1D71B8"
        four.style.border = "3px solid #FFFFFF"
        secondline.style.opacity = "0";
    }
    
    
    function progressfifthback(){
        var fourthCard = document.getElementById("fourth-card");
        var fifthCard = document.getElementById("fifth-card");
        var four = document.getElementById("four1");
        var five = document.getElementById("five1");
        var text4 = document.getElementById("progress-text44");
        var text5 = document.getElementById("progress-text55");
        var secondline = document.getElementById("secondline");
        text4.style.opacity = "1";
        text5.style.opacity = "0";
        four.style.top = "68%";
        four.style.backgroundColor = "#FFFFFF"
        four.style.border = "7px solid #4169E1"
        fourthCard.style.bottom = "20%"
        fifthCard.style.bottom = "-75%"
        five.style.top = "115%"
        five.style.backgroundColor = "#1D71B8"
        five.style.border = "3px solid #FFFFFF"
        secondline.style.opacity = "1";
    }

    const [jobName, setJobName] = useState('')
    const [jobCategory, setJobCategory] = useState('Web Designer')
    const [jobDescr, setJobDescr] = useState('')
    const [jobFile, setJobFile] = useState()

    const [freelancerLvl, setFreelancerLvl] = useState('')
    const [frlSkills, setFrlSkills] = useState([])
    const [frlLang, setFrlLang] = useState([])

    const [jobMoney, setJobMoney] = useState()
    const [currency, setCurrency] = useState('UZB Sum')
    const [jobTime, setJobTime] = useState()
    const [jobDay, setJobDay] = useState()
    const [jobDeadline, setJobDeadline] = useState('Day')
    const [recSkills, setRecSkills] = useState([])
    const [hourly, setHourly] = useState(true)
    const [byProject, setByProject] = useState(false)


    const junior = useRef()
    const middle = useRef()
    const senior = useRef()
    const recSkillStyle = useRef()
    const fileLbl = useRef()
    const fileInp = useRef()
    
    useEffect(()=>{
        

        switch (jobCategory) {
            case 'Web Designer':
                setRecSkills(webDeisger)
                break;

            case 'Frontend developer':
                setRecSkills(frontend)
                break;

            case 'Backend developer':
                setRecSkills(backend)
                break;
                
            case 'DevOps':
                setRecSkills(devops)
                break;

            case 'Technical Writing':
                setRecSkills(technicalWriting)
                break;

            case 'Mobile Developer':
                setRecSkills(mobileDeveloper)
                break;

            case 'QA Developer':
                setRecSkills(QADeveloper)
                break;
        }


    },[jobName,jobCategory,jobDescr,jobFile, freelancerLvl,frlSkills,frlLang,jobMoney,currency,jobTime,jobDay,jobDeadline,recSkills])


    const addSkills =(event)=>{   

        if(event.key=='Enter' && event.target.value !== ""){ 
            setFrlSkills([...frlSkills, event.target.value])
            event.target.value = ""    
        }
    }
    
    const addLngs =(event)=>{
        if(event.key=='Enter' && event.target.value !== ""){ 
            setFrlLang([...frlLang, event.target.value])
            event.target.value = ""    
        }
    }

    const removeSkills = indexToRemove =>{
        setFrlSkills(frlSkills.filter((_, index)=> index !== indexToRemove))
    }

    const removeLngs = indexToRemove =>{
        setFrlLang(frlLang.filter((_, index)=> index !== indexToRemove))
    }


    const showRecSkills=()=>{
        recSkillStyle.current.style.display = 'flex'
    }


    const addingRecSkills = idv =>{

        const delItem = recSkills.filter((v)=> v == idv)
        setFrlSkills([...frlSkills, delItem]) 
        console.log(delItem);

        recSkillStyle.current.style.display = 'none'
    }


    function handleFileChange(event) {
        let files = event.target.files;
        let reader = new FileReader();
        
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            setJobFile(e.target.result);
        }
    }
    


    const juniorLvl=()=>{
        setFreelancerLvl('Junior')

        junior.current.style.backgroundColor = '#1D71B8'
        junior.current.style.color = '#ffffff'

        middle.current.style.backgroundColor = '#ffffff'
        middle.current.style.color = 'black'

        senior.current.style.backgroundColor = '#ffffff'
        senior.current.style.color = 'black'

    }

    const middleLvl=()=>{
        setFreelancerLvl('Middle')

        junior.current.style.backgroundColor = '#ffffff'
        junior.current.style.color = 'black'

        middle.current.style.backgroundColor = '#1D71B8'
        middle.current.style.color = '#ffffff'

        senior.current.style.backgroundColor = '#ffffff'
        senior.current.style.color = 'black'

    }

    const seniorLvl=()=>{
        setFreelancerLvl('Senior')

        junior.current.style.backgroundColor = '#ffffff'
        junior.current.style.color = 'black'

        middle.current.style.backgroundColor = '#ffffff'
        middle.current.style.color = 'black'

        senior.current.style.backgroundColor = '#1D71B8'
        senior.current.style.color = '#ffffff'

    }


    const hourlyFunc=()=>{
        setHourly(true)
        setJobTime('hourly')
        setByProject(false)
    }

    const byProjectFunc=()=>{
        setJobTime('by project')
        setByProject(true)
        setHourly(false)
    }


  return (
    <div>
            <div className="wrapper">
                <div className="position-absolute">
                </div>
                <div className="main-content">
                    <div className="first-card1 card1" id="first-card">
                        <p className="name-top-input">
                            Title
                        </p>

                        <div className="all-r-l-input">

                            <div className="company-inputs">

                                <div>
                                    <label className="mt-4 label-style" htmlFor="">Name your job posting</label>
                                    <input className="form-control inputs-all" type="text" placeholder="Enter name"
                                    onChange={(e)=>setJobName(e.target.value)}/>
                                </div>

                                <div>
                                    <label className="mt-4 label-style" htmlFor="">Category</label>
                                    <select className="form-control inputs-all" onChange={(e)=>{setJobCategory(e.target.value)}}>
                                            <option value='Web Designer'>web designer</option>
                                            <option value='Frontend developer'>frontend developer</option>
                                            <option value='Backend developer'>backend developer</option>
                                            <option value='DevOps'>devOps</option>
                                            <option value='Technical Writing'>technical writing</option>
                                            <option value='Mobile Developer'>mobile developer</option>
                                            <option value='QA Developer'>QA developer</option>
                                    </select>

                                    <button className="btn btn-next-to1 mt-3" onClick={progressfirst}>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>


                        <div className="second-card1 card1" id="second-card">
                            <p className="name-top-input">
                                Describe the job
                            </p>

                            <div>
                                <label className="mt-4 label-style" htmlFor="">Describe the job</label>
                                <textarea placeholder="Describe" className="form-control company-textarea"
                                onChange={(e)=>setJobDescr(e.target.value)}/>
                            </div>
                            <div>
                                <label className="mt-4 label-style">Upload the picture if necessary</label>

                            <label className="mt-4 company-choose-img form-control" htmlFor="post-img" ref={fileLbl}>Drag and drop or <b>Browse</b></label>           
                            <input type="file" className='job-file-input form-control' id='post-img' ref={fileInp} value={jobFile}/>  
                                
                        

                                
                            </div>
                            <div className="all-btn-d-flex">
                                <button className="btn btn-next-to-bac" onClick={progresssecondback}>Back</button>
                                <button className="btn btn-next-to" onClick={progresssecond}>Next</button>
                            </div>
                        </div>

                    <div className="third-card card1" id="third-card">
                        <p className="write-about">
                            About the talant
                        </p>
                        <p className="label-style">
                            What level of experience should your freelancer have?
                        </p>
                        <div className='company-choosing-freelancer-cl'>
                            <div onClick={juniorLvl} ref={junior} className='company-choosing-freelancer'>junior</div>

                            <div onClick={middleLvl} ref={middle} className='company-choosing-freelancer'>middle</div>

                            <div onClick={seniorLvl} ref={senior} className='company-choosing-freelancer'>senior</div>
                        </div>
                        <div>
                            <label className="label-style mt-4">Enter skills needed (optional)</label>
                           <div className='post-job-comp-add-skills' title='Press enter to add skills'
                           htmlFor="skill">
                            <div className='post-job-comp-add-skills-fc'>
                                <ul className='post-job-skills'>
                                    {frlSkills.map((item,index)=>{
                                        return(
                                                <li key={index} >
                                                    <span>{item}</span>
                                                    <i 
                                                    onClick={()=>removeSkills(index)}
                                                    >x</i>
                                                </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div>
                            <input type="text" 
                            id="skill"
                            className="post-job-comp-input form-control" placeholder='Figma, Html, Adobe PhotoShop'
                                title='Press enter to add skills'
                                onKeyUp={addSkills} 
                                onClick={showRecSkills}/>
                            </div>
                            <ul className='addRecSkills' ref={recSkillStyle}>
                                {recSkills.map((item,index)=>{
                                    return(
                                        <li key={index} onClick={()=>addingRecSkills(item)}>
                                            <span>{item}</span>
                                            <i>+</i>
                                        </li>
                                    )
                                })}
                            </ul>
                           </div>
                        </div>
                        <div>
                            <label className="label-style mt-4">The language a freelancer should know (optional)</label>
                            
                            <div className='post-job-comp-add-skills' title='Press enter to add languages'
                           htmlFor="lngs">
                            <div className='post-job-comp-add-skills-fc'>
                                <ul className='post-job-skills'>
                                    {frlLang.map((item,index)=>{
                                        return(
                                                <li key={index}>
                                                    <span>{item}</span>
                                                    <i 
                                                    onClick={()=>removeLngs(index)}
                                                    >x</i> 
                                                </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div>
                            <input type="text" 
                            id="lngs"
                            className="post-job-comp-input form-control" placeholder='Uzbek - C2, English - C1'
                                title='Press enter to add languages'
                                onKeyUp={addLngs}
                                /> 
                            </div>
                           </div>
                        </div>
                        <div className="all-btn-d-flex">
                            <button className="btn btn-next-to-bac" onClick={progressthirdback}>Back</button>
                            <button className="btn btn-next-to" onClick={progressthird}>Next</button>
                        </div>
                    </div>
                    <div className="fourth-card card1" id="fourth-card">
                        <p className="name-top-input">
                            Terms
                        </p>
                        <p className="label-style">
                            How much do you want to pay?
                        </p>

                        <div className='company-tems-input'>
                            <input className='company-tems-input-num inputs-all1' type="number" placeholder='10'
                            onChange={(e)=>setJobMoney(e.target.value)}/>
                            <select className='company-tems-input-slc inputs-all1' onChange={(e)=>setCurrency(e.target.value)}>
                                <option value={"UZB Sum"}>UZB Sum</option>
                                <option value={"US Dollars"}>US Dollars</option>
                            </select>
                        </div>

                        <div className='company-tems-radio'>
                            <input id='hourly' type={'radio'} onChange={hourlyFunc} checked={hourly} className='company-tems-radio-item'/>
                            <label htmlFor='hourly' value={jobTime} className='company-tems-radio-label'>Hourly</label>
                            <input id='by-project' value={jobTime} type={'radio'} onChange={byProjectFunc}
                            checked={byProject}
                            className='company-tems-radio-item'/>
                            <label htmlFor='by-project' className='company-tems-radio-label'>By project</label>

                        </div>

                        <div className='company-tems-input'>
                            <input type="number" className='company-tems-input-num inputs-all1' placeholder='10'
                            onChange={(e)=>setJobDay(e.target.value)}/>
                            <select className='company-tems-input-slc inputs-all1'
                            defaultValue={'Day'} 
                            onChange={(e)=>setJobDeadline(e.target.value)}>
                                <option value={'Day'}>Day</option>
                                <option value={'Month'}>Month</option>
                            </select>
                        </div>

                        <div className="all-btn-d-flex">
                            <button className="btn btn-next-to-bac" onClick={progressfourthback}>Back</button>
                            <button className="btn btn-next-to" onClick={progressfourth}>Next</button>
                        </div>

                    </div>


                    <div className="fifth-card card1" id="fifth-card">
                       <p className='name-top-input'>Review and post</p> 
                       <p className='name-top-input'>Title</p> 
                       <p className='label-style'>Name your job posting</p>
                       <p className='complete-your'>{jobName}</p>

                        <p className='label-style'>Category</p>
                        <p className='complete-your'>{jobCategory}</p>

                        <hr/>

                        <p className='name-top-input'>
                            Describe the job
                        </p>
                        <p className='label-style'>{jobDescr}</p>

                        <div>
                            <label className='label-style'>Additional project files</label>
                            <input type={'file'} value={jobFile} 
                            className='form-control'/>
                        </div>

                        <hr/>

                        <div>
                            <div className='name-top-input'>About the talant</div>
                            <p className='label-style'>Required level</p>
                            <p className='complete-your'>{freelancerLvl}</p>
                        </div>

                        <div style={{paddingTop:"10px"}}>
                            <p className='label-style'>Skills needed</p>
                            <ul className='post-job-skills'>
                                {frlSkills.map((item,index)=>{
                                    return(
                                            <li key={index}>
                                                <span>{item}</span>
                                            </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div style={{paddingTop:"10px"}}>
                            <p className='label-style'>The language a freelancer should know</p>
                            <ul className='post-job-skills'>
                                {frlLang.map((item,index)=>{
                                    return(
                                            <li key={index}>
                                                <span>{item}</span>
                                            </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <hr/>

                        <div>
                            <div className='name-top-input'>Terms</div>
                            <ul className='ul-css'>
                                <li style={{marginRight:'15px'}}>
                                    <p className='label-style'>Price</p>
                                    <span className='complete-your'>{jobMoney} {currency}</span>
                                </li>

                                <li style={{marginRight:'15px'}}>
                                    <p className='label-style'>Deadline</p>
                                    <span className='complete-your'>
                                        {jobDay} {jobDeadline}</span>
                                </li>
                            </ul>
                        </div>



                        <div className="all-btn-d-flex">
                            <button className="btn btn-next-to-bac" onClick={progressfifthback}>Edit</button>
                            <button className="btn btn-next-to" >Save</button>
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
                        <div className="five1 dot1" id="five1"></div>

                        <p id="progress-text11" className="progress-text11 progress-text">Title</p>
                        <p id="progress-text22" className="progress-text22 progress-text">Describe the job</p>
                        <p id="progress-text33" className="progress-text33 progress-text">About</p>
                        <p id="progress-text44" className="progress-text44 progress-text">Contacts</p>
                        <p id="progress-text55" className="progress-text55 progress-text">Review and post</p>

                        <div className="firstline"></div>
                        <div className="secondline" id="secondline"></div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CompanyPostJob