import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RoutesPath from "../routes/routes";
import { setAuthEmailValue, setAuthPasswordValue } from "../actions/authAction";
import { connect, useDispatch } from "react-redux";
import POST from "../API/POST";
import { connection, setAccessToken } from "./chat-for-company";
import useStore from "../StoreZustand/StoreZustand";
import "../../src/components/Alll.scss";

const enhancer = connect(
  ({
    size: { size },
    auth: { authEmailInitialValue, authPasswordInitialValue },
  }) => ({
    size,
    authEmailInitialValue,
    authPasswordInitialValue,
  }),
  null
);

function LoginCard(props) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleEmailValue = (event) => {
    dispatch(setAuthEmailValue(event.target.value));
  };
  const handlePasswordValue = (event) => {
    dispatch(setAuthPasswordValue(event.target.value));
  };

  const { loginHendler } = useStore();
  useEffect(() => {
    loginHendler({
      email: props.authEmailInitialValue,
      password: props.authPasswordInitialValue,
    });
  }, []);

  const LoginHendler = async () => {
    try {
      const PostRest = await POST.login({
        email: props.authEmailInitialValue,
        password: props.authPasswordInitialValue,
      }).then((loginResponse) => {
        console.log("Login response: ", loginResponse);
        if (loginResponse?.status === 200) {
          navigate(RoutesPath.signUpPage);
        }
        localStorage.setItem("token", JSON.stringify(loginResponse.data.token));
        setAccessToken(loginResponse.data.token);
        connection.start().then(() => {
          localStorage.setItem("start", "ok");
          console.log("Connection: ", connection);
        });
      });
    } catch (error) {
      alert("Email or password is incorrect!");
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Log in</Card.Title>
        <Card.Text>
          Still don’t have an account?
          <span
            onClick={() => {
              navigate(RoutesPath.signUp);
            }}
          >
            Sign Up Now !
          </span>
        </Card.Text>
        <Form>
          <Form.Group className="form-shell">
            <Form.Control
              className="form-control"
              type="email"
              id="authEmail"
              placeholder="Email"
              onChange={handleEmailValue}
              value={props.authEmailInitialValue}
            />
          </Form.Group>
          <Form.Group className="form-shell">
            <Form.Control
              className="form-control"
              type="password"
              id="authPassword"
              placeholder="Password"
              onChange={handlePasswordValue}
              value={props.authPasswordInitialValue}
            />
          </Form.Group>
        </Form>

        <div className="bottom-fields">
          <Button className="custom-btn1" onClick={() => LoginHendler()}>
            Continue
          </Button>
        </div>
        <div className="bottom-title">Or continue with</div>
        <div className="bottom-icons">
          <div className="icon">
            <img src="./images/facebook-3 logo.svg" alt="" />
          </div>
          <div className="icon">
            <img src="./images/github logo.svg" alt="" />
          </div>
          <div className="icon">
            <img src="./images/Google logo.svg" alt="" />
          </div>
          <div className="icon">
            <img src="./images/Group 244.svg" alt="" />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default enhancer(LoginCard);
