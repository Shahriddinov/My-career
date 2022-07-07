import React, {useState, useEffect} from 'react';
import {Button, Form, Row, Col} from "react-bootstrap";
import {v4 as uuidv4} from "uuid";
import {useFormik} from "formik";
import AOS from "aos";
import ContactUs from "./ContactUs";
import {connect, useDispatch} from "react-redux";
import {displayCircle, homeCircleVisible} from "../actions/careerAction";
import 'bootstrap/dist/js/bootstrap.bundle'
import "aos/dist/aos.css";
import NavbarBox from "./NavbarBox";


const enhancer = connect((
    {
        auth: {initialValue},
        size: {size, scrollDown}
    }
) =>
    ({
        initialValue,
        size,
        scrollDown
    }));
let time = 0;

const Home = () => {
    useEffect(() => {
        AOS.init()
    });

    const dispatch = useDispatch();
    const [margin, setMargin] = useState(0);
    const [screenWith, setScreenWith] = useState(window.innerWidth);
    useEffect(() => {
        const changeWith = () => {
            setScreenWith(window.innerWidth)
        };

        window.addEventListener('resize', changeWith)

    }, []);

    useEffect(() => {
        dispatch(displayCircle());
    }, []);

    const formik = useFormik({
        initialValues: {
            job: "",
            id: uuidv4()
        },
        onSubmit: values => {
            console.log('job-value', values);
        },
    });

    const onScroll = (event) => {
        clearTimeout(time);
        time = setTimeout(() => {
            if (event.deltaY < 0) {
                if (margin === 0) return;
                setMargin(margin + 100);
                dispatch(homeCircleVisible(margin + 100))

            }
            if (event.deltaY > 0) {
                if (margin === (-300)) return;
                setMargin(margin - 100);
                dispatch(homeCircleVisible(margin - 100))
            }
        }, 300)

    };

  return (
        <div className="home-wrapper" id="overflow-y-scroll" onWheel={onScroll}>
            <NavbarBox/>
          <div
              className={margin === 0 ? "pattern" : margin === -100
                  ? "pattern search-talent-pattern" : margin === -200
                      ? "pattern post-job-pattern" : "pattern contact-us-pattern"
              }>
            <img src="./images/white-ell1.svg" alt="pattern"/>
            <img src="./images/white-ell2.svg" alt="pattern"/>
            <img src="./images/white-ell3.svg" alt="pattern"/>
            <img src="./images/white-ell4.svg" alt="pattern"/>
            <img src="./images/white-ell5.svg" alt="pattern"/>
          </div>
            {margin === 0 ? <div className="main-home-page-box">
                <div className="company-name-title"
                     data-aos="fade-right"
                     data-aos-duration="800"
                     data-aos-easing="ease-in-sine">
                    <h2>MY CAREER </h2>
                    <div className='Powerful'>Powerful platform for your career</div>
                </div>
                <div className="company-text"
                     data-aos="fade-right"
                     data-aos-duration="800"
                     data-aos-easing="ease-in-sine"
                     data-aos-delay="300">
                    <p>Find your dream jobs in our powerful career platform.</p>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="search-job-form"
                         data-aos="fade-right"
                         data-aos-duration="800"
                         data-aos-easing="ease-in-sine"
                         data-aos-delay="300">
                        <Form.Group>
                            <Form.Control
                                name="job"
                                id={uuidv4()}
                                onChange={formik.handleChange}
                                value={formik.values.job}
                                type="text"
                                placeholder="Job title, keywords..."/>
                        </Form.Group>
                        <button className='src_btn'><img src="./images/search.svg" alt=""/></button>
                    </div>
                </form>

                <div className="Download_App"
                     data-aos="zoom-in"
                     data-aos-duration="800"
                     data-aos-easing="ease-in-sine"
                     data-aos-delay="300">
                    <div className="title">Download mobile App</div>
                    <a href="#" target='_blank'>
                        <img src="images/google-play.png" alt=""/>
                        <span className="textBox">
              <span className="text">Доступно в</span><br/>
              <span className="Apptext">Google Play</span>
            </span>
                    </a>
                    <a href="#" target='_blank'>
                        <img className='apple' src="images/apple.svg" alt=""/>
                        <span className="textBox">
              <span className="text">Загрузите в</span><br/>
              <span className="Apptext">AppStore</span>
            </span>
                    </a>
                </div>
            </div> : ""}
            {margin === -100 ? <div className="search-talents-box">
                <Row>
                    <Col md="6" className="left-column"
                         data-aos="fade-right"
                         data-aos-duration="800"
                         data-aos-easing="ease-in-sine">
                        <div className="talent-img-box">
                            <img src="./images/search-talent.svg" alt="talent"/>
                        </div>
                    </Col>
                    <Col md="6" className="right-column"
                         data-aos="fade-left"
                         data-aos-duration="800"
                         data-aos-easing="ease-in-sine">
                        <div className="talent-info-box">
                            <h2>Search talants!</h2>
                            <div className="talent-description">
                                Ipsum harum assumenda in eum vel eveniet numquam, cumque vero vitae enim cupiditate
                                deserunt eligendi
                                officia modi consectetur. Expedita quos nobis earum hic ex asperiores quisquam
                                sit!
                            </div>
                            <div className="search-job-form">
                                <Form.Group>
                                    <Form.Control
                                        name="job"
                                        id={uuidv4()}
                                        onChange={formik.handleChange}
                                        value={formik.values.job}
                                        type="text"
                                        placeholder="Job title, keywords..."/>
                                </Form.Group>
                                <button className='src_btn'><img src="./images/search.svg" alt=""/></button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div> : ""}
            {margin === -200 ? <div className="post-job-box">
                <Row>
                    <Col md="6" className="right-column"
                         data-aos="fade-right"
                         data-aos-duration="800"
                         data-aos-easing="ease-in-sine">
                        <div className="post-job-info-box">
                            <h2>Search talants!</h2>
                            <div className="job-description ">
                                Ipsum harum assumenda in eum vel eveniet numquam, cumque vero vitae enim cupiditate
                                deserunt eligendi officia modi consectetur. Expedita tempora quos nobis earum hic ex
                                asperiores quisquam optio nostrum sit!
                            </div>
                            <div className="post-job">
                                <Button className="custom-btn">Post job</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md="6" className="left-column"
                         data-aos="fade-left"
                         data-aos-duration="800"
                         data-aos-easing="ease-in-sine">
                        <div className="post-job-img-box">
                            <img src="./images/post-job.png" alt="talent"/>
                        </div>
                    </Col>
                </Row>
            </div> : ""}
            {margin === -300 ? <ContactUs/> : ""}
            <div className="dotsBox">
                <div className="nav flex-column">
                    <div onClick={() => {
                        setMargin(0)
                    }}
                         className={margin === 0 ? "nav-link navtest active" : "nav-link navtest"}>
                        <div className="dots"/>
                    </div>
                    <div onClick={() => {
                        setMargin(-100)
                    }}
                         className={margin === -100 ? "nav-link navtest active " : "nav-link navtest"}>
                        <div className="dots"/>
                    </div>
                    <div onClick={() => {
                        setMargin(-200)
                    }}
                         className={margin === -200 ? "nav-link navtest active" : "nav-link navtest"}>
                        <div className="dots"/>
                    </div>
                    <div onClick={() => {
                        setMargin(-300)
                    }}
                         className={margin === -300 ? "nav-link navtest active" : "nav-link navtest"}>
                        <div className="dots"/>
                    </div>
                    <div className="line"/>
                </div>
            </div>
        </div>

    );
};

export default enhancer(Home);