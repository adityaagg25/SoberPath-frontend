import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import PatientDashboard from "./pages/PatientDashboard"; // Import new page
import { ToastContainer} from 'react-toastify';
import Navbar from "./components/Navbar";
import { Context } from "./main";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Footer from "./components/Footer";

const App=()=>{
  const {isAuthenticated, setIsAuthenticated, setUser}= useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://sober-path.vercel.app/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="about" element={<AboutUs/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* New route for Patient Dashboard */}
        <Route
          path="/patient-dashboard"
          element={isAuthenticated ? <PatientDashboard /> : <Login />}
        />
      </Routes>
      <ToastContainer position="top-center"/>
      <Footer></Footer>
    </Router>
    </>
  )
}

export default App;