import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Button, Spinner } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import loginImg from "../assets/images/Mobile.jpg";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "./../utils/config";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
 const [loading,setLoading]=useState(false);

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/v1/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });
    
      const result = await res.json();
      if (!res.ok) {
        // Handle incorrect credentials
        toast.error("Incorrect email or password");
        dispatch({ type: "LOGIN_FAILURE", payload: result.message });
      } else {
        dispatch({ type: "LOGIN_SUCCESS", payload: { data: result.data, role: result.role } });
        toast.success("Login successful");
        navigate("/"); 
      }
      setLoading(false);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
      toast.error(err.message);
      setLoading(false);
    }
    
  };

  return (
    <section className="pt-3">
      <ToastContainer />
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login_container d-flex justify-content-center">
              <div className="login_img">
                <img src={loginImg} alt="loginImg" />
              </div>
              <div className="login_form">
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      value={credentials.email}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      value={credentials.password}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth_btn"
                    type="submit"
                  >
                    {loading ? <> <Spinner color='light'/></> :<>Login</>}
                    
                  </Button>
                </Form>
                <p>
                  Don't have an account? <Link to="/register">create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
