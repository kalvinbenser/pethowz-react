import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Booking from "../pages/BookingForm";
import Home from "../pages/Home";
import Pethost from "../pages/Pethost";
import PetServiceForm from "../pages/PetServiceForm";
import PetSpaceForm from "../pages/PetSpaceForm";
import Profile from "../pages/Profile";
import RegisterForm from "../pages/RegisterForm";
import Select from "../pages/Select";
import PetService from "../pages/PetService";
import Test from "../pages/Test";
import Welcome from "../components/auth/Welcome";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/bookingForm" element={<Booking />} />
      <Route path="/pethost" element={<Pethost />} />
      <Route path="/petServiceForm" element={<PetServiceForm />} />
      <Route path="/petSpaceForm" element={<PetSpaceForm />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/RegisterForm" element={<RegisterForm />} />
      <Route path="/petservice" element={<PetService />} />
      <Route path="/select" element={<Select />} />
      <Route path="/test" element={<Test />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
};

export default CustomRoutes;
