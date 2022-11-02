import React, {useEffect, useState} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {connect, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {setAuthEmailValue, setAuthPasswordValue} from "../actions/authAction";
import POST from '../API/POST';
import RoutesPath from "../routes/routes";
import useStore from '../StoreZustand/StoreZustand';


const enhancer = connect(
    (
        {size: {size}, auth: {authEmailInitialValue, authPasswordInitialValue},}) => {
        return ({
            size,
            authEmailInitialValue,
            authPasswordInitialValue,
        });
    }, null);

function SignUpCard(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState(false);

    const handleEmailValue = event => {
        dispatch(setAuthEmailValue(event.target.value))
    };
    function EmailValue() {
        dispatch(setAuthEmailValue(""))
    }
    const handlePasswordValue = event => {
        dispatch(setAuthPasswordValue(event.target.value))
    };




    // let [EmailPost, setEmailPost] = useState("")
    // let [PasswordPost, setPasswordPost] = useState("")
    let [ConfirmPasswordPost, setConfirmPasswordPost] = useState("")
    let [params, setparams] = useState({
        email: props.authEmailInitialValue,
        password: props.authPasswordInitialValue,
        c_password: ConfirmPasswordPost
    })
    // let emailhendler = (event) => {
    //     setEmailPost(event);
    //     setparams({...{
    //         email: EmailPost,
    //         password: PasswordPost,
    //         c_password: ConfirmPasswordPost
    //     },  email: EmailPost,})
    // }

    // let passwordhendler = (event) => {
    //     setPasswordPost(event);
    //     setparams({...{
    //         email: EmailPost,
    //         password: PasswordPost,
    //         c_password: ConfirmPasswordPost
    //     },  password: PasswordPost,})
    // }
    let confirmPasswordHendler = (event) => {
        setConfirmPasswordPost(event);
        setparams({...{
            email: props.authEmailInitialValue,
            password: props.authPasswordInitialValue,
            c_password: ConfirmPasswordPost
        },  c_password: ConfirmPasswordPost,})
    }

    const PostData = async () => {
      try {
        const PostRest = await POST.register(params) 
     } catch (error) {
         console.log(error);
     }
     };

    //  useEffect(() => {
    //     setparams ({
    //         email: EmailPost,
    //         password: PasswordPost,
    //         c_password: ConfirmPasswordPost
    //     })
    //  }, []);

    const SignUpHendler = () => {
        setEmail(true)
        PostData()
    }
    return (
        <>
            {email ?
                <Card>
                    <Card.Body>
                        <Card.Title className="text-center">Check your email</Card.Title>

                        <img className="emailSvg" src="images/Email_SVG 1.svg" alt=""/>
                        <div className="bottom-title">
                            Check your <b>{props.authEmailInitialValue}</b> inbox for instructions from us on how
                            to verify your account.
                        </div>
                        <hr/>
                        <div className="bottom-icons" onClick={EmailValue}>
                   <span onClick={() =>  {
                       navigate(RoutesPath.login)}}>Go to login screen</span>
                        </div>
                    </Card.Body>
                </Card>
                :
                <Card>
                    <Card.Body>
                        <Card.Title>Sign Up</Card.Title>
                        <Card.Text>Do you have an account ?<span onClick={() => {
                            navigate(RoutesPath.login)
                        }}>
                        Log in Now !</span></Card.Text>
                        <Form>
                            <Form.Group className="form-shell">
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    onChange={handleEmailValue}
                                    value={props.authEmailInitialValue}/>
                                    {/* <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    onChange={ (e)=>emailhendler(e.target.value)}
                                    /> */}
                            </Form.Group>
                            <Form.Group className="form-shell">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    onChange={handlePasswordValue}
                                    value={props.authPasswordInitialValue}/>
                                    {/* <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e)=>passwordhendler(e.target.value)}
                                    /> */}
                            </Form.Group>
                            <Form.Group className="form-shell">
                                <Form.Control
                                    type="password"
                                    id="authPassword"
                                    placeholder="Confirm password"
                                    // onChange={(e)=>SignUpConfirmPassordHendler(e.target.value)}
                                    onChange={(e)=>confirmPasswordHendler(e.target.value)}
                                    />
                            </Form.Group>
                        </Form>

                        <div className="bottom-fields">
                            {/* <Button className="custom-btn1" onClick={()=>setEmail(true)}>Continue</Button> */}
                            <Button className="custom-btn1" onClick={SignUpHendler}>Continue</Button>
                        </div>
                        <div className="bottom-title">Or continue with</div>
                        <div className="bottom-icons">
                            <div className="icon"><img src="./images/facebook-3 logo.svg" alt=""/></div>
                            <div className="icon"><img src="./images/github logo.svg" alt=""/></div>
                            <div className="icon"><img src="./images/Google logo.svg" alt=""/></div>
                            <div className="icon"><img src="./images/Group 244.svg" alt=""/></div>
                        </div>
                    </Card.Body>
                </Card>
            }
        </>
    );
}

export default enhancer(SignUpCard);