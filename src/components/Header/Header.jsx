import React, {useRef, useState } from "react";
import "./Header.css";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/traveGo-logo.png";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './../../actions/authActions';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const nav_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };


  const toggleMenu = () => {
    menuRef.current.classList.toggle("show_menu");
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="logoImg" />
            </div>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active_link" : " "
                      }
                    >
                      {" "}
                      {item.display}{" "}
                    </NavLink>
                  </li>
                ))}
              </div>
            </div>

            <div className="nav_right d-flex align-items-center p-3 gap-1">
              <div className="nav_btns d-flex align-items-center gap-1">
                {user ? (
                  <>
                    {user.role === "admin" && (
                      <>
                        <h5 className="mb-1  mx-2">
                          <NavLink to="/dashboard"  className={(navClass) =>
                        navClass.isActive ? "text-success" : "text-dark"
                      }>
                            Dashboard
                          </NavLink>
                        </h5>
                      </>
                    )}

                    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                      <DropdownToggle caret className="bg-light border-0 text-success mb-2 mx-2">
                        {user.data.username}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem className="profile mb-2">
                          <Link to="/profile" className="text-dark">
                            My Bookings
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          onClick={handleLogout}
                          className="profile mb-2 text-danger"
                        >
                          Logout
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    {/* <h5 className="mb-1 mx-2">{user.data.username}</h5> */}
                  </>
                ) : (
                  <>
                    <Button className="btn secondary__btn">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>
              <span className="mobile_menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
