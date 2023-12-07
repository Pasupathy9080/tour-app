import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Button, Spinner } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import registerImg from "../assets/images/Mail-sent.jpg";
import { BASE_URL } from "./../utils/config";
import { registerSuccess } from "../actions/authActions";
import { useDispatch } from "react-redux";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });
  const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(credentials);
    try {
      const res = await fetch(`${BASE_URL}/api/v1/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ credentials }),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
      } else {
        dispatch(registerSuccess());
        navigate("/login");
      }
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  return (
    <section className="p-3">
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login_container d-flex justify-content-center">
              <div className="login_img">
              {/* <img src="https://img.freepik.com/free-psd/travel-background-composition-with-hat-baggage_23-2149603148.jpg?w=740&t=st=1675569377~exp=1675569977~hmac=9f1e3658a6fb20fa853c6b3e124e8a80cbbc06f42da9d72f1931e11143561252" alt="registerImg" /> */}
                <img src={registerImg} alt="loginImg" />
              </div>
              <div className="login_form">
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      id="username"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className="btn secondary__btn auth_btn" type="submit">
                    {loading ? (
                      <>
                        {" "}
                        <Spinner color="light" />
                      </>
                    ) : (
                      <>Create</>
                    )}
                  </Button>
                </Form>
                <p>
                  Already have an account?
                  <Link to="/login"> Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
