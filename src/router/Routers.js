import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./../pages/Home";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import Tours from "./../pages/Tour";
import TourDetails from "./../pages/TourDetails";
import SearchResultList from "./../pages/SearchResultList";
import Payment from "../pages/Payment";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import { AuthContext } from "../context/AuthContext";

const Routers = () => {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      {user ? (
        <>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<TourDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours/search" element={<SearchResultList />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<TourDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours/search" element={<SearchResultList />} />
          <Route path="/dashboard" element={<Login />} />
          <Route path="/profile" element={<Login />} />
        </>
      )}
      {user && user.role === "admin" ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
        </>
      ) : null}
    </Routes>
  );
};

export default Routers;
