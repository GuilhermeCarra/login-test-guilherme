import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SignupIcon from "../../../assets/svg/SignupIcon";

import StatusMessage from "../../../components/StatusMessage/StatusMessage"

import ROUTES from '../../../utils/routes';
import validator from '../../../utils/formValidation';

import "./Signup.scss"

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validating, setValidating] = useState(false);
  const [error, setError] = useState(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setValidating(true);
    setError(null);

    setTimeout(()=> {
      setValidating(false)
      const response = validator({email, password, name});
      if(response.success) {
        console.log('ok');
      } else {
        setError(response.error);
      }
    },2500);
  }

  return (
    <Container fluid>
      <Row className="auth">
        <Col
          xs={11} md={6} lg={5} xl={3}
          className="auth__container"
        >
          <Col xs={12} className={`signup__icon ${validating ? "validating" : ""}`}>
            <SignupIcon />
          </Col>
          <Col xs={12}
            className={`auth__title ${validating ? "validating" : ""}`}
          >
            <h3>Sign Up</h3>
          </Col>
            <Col xs={10}>
              <form
                onSubmit={handleSubmit}
                className={`auth__form ${validating ? "validating" : ""}`}
              >
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Control
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="secondary"
                  className="auth__btn"
                >
                  Register
                </Button>
              </form>
              {error &&
                <StatusMessage
                  msg={error}
                  success={false}
                />
              }
            </Col>
            <Col
              xs={12}
              className={`auth__footer ${validating ? "validating" : ""}`}
            >
              Already Have an Account? <Link to={ROUTES.LOGIN}>Sign In</Link>
            </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;