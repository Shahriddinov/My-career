import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import {Button, ProgressBar} from "react-bootstrap";
import {connect, useDispatch} from "react-redux";
import PersonalInformation from "./PersonalInformation";
import {
    showTemplates,
    signedWizardNextSteps,
    setResumeNumber,
    setResumeColor,
    setResumeColorBox
}
    from "../actions/careerAction";
import FirstTemplateResume from "./resumeTemplates/FirstTemplateResume";
import SecondTemplateResume from "./resumeTemplates/SecondTemplateResume";
import ThirdTemplateResume from "./resumeTemplates/ThirdTemplateResume";
import FourthTemplateResume from "./resumeTemplates/FourthTemplateResume";
import FifthTemplateResume from "./resumeTemplates/FifthTemplateResume";
import SixthTemplateResume from "./resumeTemplates/SixthTemplateResume";

const enhancer = connect(
    ({size: {size, template, resumeNumbers, resumeColor, resumeColorBox}}) =>
        ({size, template, resumeNumbers, resumeColor, resumeColorBox}
        ), null);


const Personalization = props => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, SetUpdateCount] = useState(0);
    const dispatch = useDispatch();

    const settings = {
        dots: false,
        autoplay: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: () =>
            SetUpdateCount(updateCount + 1),
        beforeChange: (current, next) => (setSlideIndex(next))
    };

    return (
        <div className={!props.size ? "cards-show" : "cards-hide"}>
            <div className={props.template
                ? "personalization-wrapper template-show"
                : "personalization-wrapper template-hide"}
            >

                <div className="slider-box">
                    <Slider {...settings}>
                        <div className="slider-child">
                            <div className="card mt-0 card-resume">
                                {/*<img src="./images/sixth-resume.png" alt="sixth-resume"/>*/}
                                <SixthTemplateResume/>
                                {/*<div className="shadow-box">*/}
                                {/*    <Button onClick={() => {*/}
                                {/*        dispatch(setResumeNumber("sixth"));*/}
                                {/*        dispatch(showTemplates());*/}
                                {/*        dispatch(signedWizardNextSteps())*/}
                                {/*    }}>Select Template</Button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className="slider-child">
                            <div className="card mt-0 card-resume">
                                {/*<img src="./images/first-resume.png" alt="third-resume"/>*/}
                                <FirstTemplateResume/>
                                {/*<div className="shadow-box">*/}
                                {/*    <Button onClick={() => {*/}
                                {/*        dispatch(setResumeNumber("first"));*/}
                                {/*        dispatch(showTemplates());*/}
                                {/*        dispatch(signedWizardNextSteps())*/}
                                {/*    }}>Select Template</Button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className="slider-child">
                            <div className="card mt-0 card-resume">
                                {/*<img src="./images/second-resume.png" alt="third-resume"/>*/}
                                <SecondTemplateResume/>
                                {/*<div className="shadow-box">*/}
                                {/*    <Button onClick={() => {*/}
                                {/*        dispatch(setResumeNumber("second"));*/}
                                {/*        dispatch(showTemplates());*/}
                                {/*        dispatch(signedWizardNextSteps())*/}
                                {/*    }}>Select Template</Button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className="slider-child">
                            <div className="card mt-0 card-resume">
                                {/*<img src="./images/fourth-resume.png" alt="resume-girl"/>*/}
                                <FourthTemplateResume/>
                                {/*<div className="shadow-box">*/}
                                {/*    <Button onClick={() => {*/}
                                {/*        dispatch(setResumeNumber("fourth"));*/}
                                {/*        dispatch(showTemplates());*/}
                                {/*        dispatch(signedWizardNextSteps())*/}
                                {/*    }}>Select Template</Button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className="slider-child">
                            <div className="card mt-0 card-resume">
                                {/*<img src="./images/fifth-resume.png" alt="fifth-resume"/>*/}
                                <FifthTemplateResume/>
                                {/*<div className="shadow-box">*/}
                                {/*    <Button onClick={() => {*/}
                                {/*        dispatch(setResumeNumber("fifth"));*/}
                                {/*        dispatch(showTemplates());*/}
                                {/*        dispatch(signedWizardNextSteps())*/}
                                {/*    }}>Select Template</Button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </Slider>

                </div>
            </div>
            <PersonalInformation/>
        </div>
    );
};

export default enhancer(Personalization);