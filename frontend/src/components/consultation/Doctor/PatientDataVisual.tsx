
import Navbar from "../Navbar/NavBar.tsx";

import { useLoaderData } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import button_logo from "/button_logo/button_logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FallBackUi from "../Fallback/FallbackUi.js";
import "./doctor.css";
import {BACKEND_URL} from "../services/api.ts";
import { useEffect } from "react";
import axios from "axios";
import SuccessMessage from "../FlashyMessage/SuccessMessage.js";
import DuplicateEmail from "../FlashyMessage/DuplicateEmail.js";
import Thumbnail4 from "/thumbnails/doctor2.png";
function PatientDataVisual() {
  const role = useLoaderData();
  const navigate = useNavigate();
  const [isPatient, setIsPatient] = useState(false);
  const [isDoctor, setIsDoctor] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);
  const [showFlashy, setShowFlashy] = useState(false);
  useEffect(() => {
    if (role === "patient") {
      navigate("/patient");
    }
  }, []);

  if (isLoading === true) {
    return <FallBackUi />;
  }
  if (role === "noRole" && isLoading === false && isEmailDuplicate === true) {
    return (
      <>
        <Navbar isPatient={!isPatient} isDoctor={!isDoctor} isLogout={isLogout} />
        <DuplicateEmail
          message={"A Patient Account with This Email Already Exists"}
        />
        <h1 className="signHeading">Sign in as Doctor</h1>
        <div className="mainLogin">
          <img
            draggable="false"
            className="doctor_image"
            src={Thumbnail4}
            alt="Doctor"
          />
          <div className="login_with_google2">
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                setIsLoading(true);
                let data = await axios.post(
                  `${BACKEND_URL}/api/auth/generateTokenD`,
                  {
                    token: credentialResponse.credential,
                  }
                );
                if (data.data.token === "tokenNotGranted") {
                  setIsEmailDuplicate(true);
                  setIsLoading(false);
                  return;
                }
                localStorage.setItem("token", data.data.token);
                setIsDoctor(true);
                setIsPatient(false);
                setIsLogout(true);
                setIsLoading(false);
                setShowFlashy(true);
                setIsEmailDuplicate(false);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            <img
              draggable="false"
              src={button_logo}
              height={"230px"}
              width={"230px"}
              alt="Google Login"
              style={{ padding: "20px", boxSizing: "border-box" }}
            />
          </div>
        </div>
      </>
    );
  }
  if (role === "noRole" && isPatient === false && isDoctor === false) {
    return (
      <>
        <Navbar isPatient={!isPatient} isDoctor={!isDoctor} isLogout={isLogout} />
        <h1 className="signHeading">Sign in as Doctor</h1>
        <div className="mainLogin">
          <img
            draggable="false"
            className="doctor_image"
            src={Thumbnail4}
            alt="Doctor"
          />
          <div className="login_with_google2">
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                setIsLoading(true);
                let data = await axios.post(
                  `${BACKEND_URL}/api/auth/generateTokenD`,
                  {
                    token: credentialResponse.credential,
                  }
                );
                if (data.data.token === "tokenNotGranted") {
                  setIsEmailDuplicate(true);
                  setIsLoading(false);
                  return;
                }
                localStorage.setItem("token", data.data.token);
                setIsDoctor(true);
                setIsLogout(true);
                setIsLoading(false);
                setShowFlashy(true);
                setIsEmailDuplicate(false);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            <img
              draggable="false"
              src={button_logo}
              height={"230px"}
              width={"230px"}
              alt="Google Login"
              style={{ padding: "20px", boxSizing: "border-box" }}
            />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar isDoctor={true} isLogout={true} isPatient={false} />
      {showFlashy && (
        <SuccessMessage message={"You're Now Logged in as a Doctor"} />
      )}
      <div>
        <h1>Working on this...</h1>
      </div>
    </>
  );
}

export default PatientDataVisual;
