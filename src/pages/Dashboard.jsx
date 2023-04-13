import React, { useState } from "react";
import { Row, Col, Nav, NavItem, NavLink, Container } from "reactstrap";
import { FaBox, FaUsers, FaShoppingCart } from "react-icons/fa";
import UsersList from "../components/Admin/UsersList";
import "../styles/Dashboard.css";
import BookingList from "../components/Admin/BookingList";
import CreateTourForm from "../components/Admin/CreateTourForm.jsx";
import UpdateTour from "../components/Admin/UpdateTour";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("products");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs="2" sm="3" md="2" lg="2" className="sidebar pt-5 mt-5">
            <Nav vertical>
              
            <NavItem className="m-2">
                <NavLink
                  className={
                    activeTab === "products"
                      ? "active bg-white text-dark rounded-2 "
                      : "text-warning"
                  }
                  onClick={() => {
                    toggle("products");
                  }}
                >
                  <FaBox /> <span className="responsive">Tours</span>
                </NavLink>
              </NavItem>
              
              <NavItem className="m-2">
                <NavLink
                  className={
                    activeTab === "orders"
                      ? "active bg-white text-dark rounded-2 "
                      : "text-warning"
                  }
                  onClick={() => {
                    toggle("orders");
                  }}
                >
                  <FaShoppingCart />{" "}
                  <span className="responsive">Bookings</span>
                </NavLink>
              </NavItem>
             
              <NavItem className="m-2">
                <NavLink
                  className={
                    activeTab === "create"
                      ? "active bg-white text-dark rounded-2 "
                      : "text-warning"
                  }
                  onClick={() => {
                    toggle("create");
                  }}
                >
                  <FaUsers /> <span className="responsive">Create Tour</span>
                </NavLink>
              </NavItem>
              <NavItem className="m-2">
                <NavLink
                  className={
                    activeTab === "users"
                      ? "active bg-white text-dark rounded-2 "
                      : "text-warning"
                  }
                  onClick={() => {
                    toggle("users");
                  }}
                >
                  <FaUsers /> <span className="responsive">Users</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col
            xs="10"
            sm="9"
            md="10"
            lg="10"
            className="main-content my-4 px-4"
          >
            {activeTab === "home" && <div className="mt-5 pt-5"></div>}
            {activeTab === "orders" && (
              <div className="mt-5 pt-5">
                <BookingList />
              </div>
            )}
            {activeTab === "products" && (
              <>
                <div className="mt-5 pt-5">
                <h3 className="text-center bg-warning text-success p-2 rounded-2 fw-bold mb-3">
                    All Tours
                  </h3>              
                  <UpdateTour />
                </div>
              </>
            )}

            {activeTab === "create" && (
              <div className="mt-5 pt-5">
                 <h3 className="text-center bg-warning text-success p-2 rounded-2 fw-bold mb-2">
                    New Tour
                  </h3>
              <CreateTourForm />
              </div>
            )}
            {activeTab === "users" && (
              <div className="mt-5 pt-5">
                <UsersList />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
