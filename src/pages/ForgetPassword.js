import React, { useState } from "react";
import "./ForgetPassword.css";
import {} from "react-router";
import { Link, useNavigate } from "react-router-dom";
import {sendPasswordResetEmail,} from "firebase/auth";
import { auth } from "../firebase-config";
function ForgetPassword() {
  const [email, setemail] = useState("");
  const navigate = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault(); 
    var actionCodeSettings = {
      // After password reset, the user will be give the ability to go back
      // to this page.
      url: 'http://localhost:3000/login',
      handleCodeInApp: false
    };
    try {
        const user = await sendPasswordResetEmail(
          auth,
          email,
          actionCodeSettings,
        );
        navigate("/forgetpassword2")
        console.log(user);
  
      } catch (error) {
        alert(error.message);
      }
  };

  return (
    <>
      <div className="sign">
        <div className="title11">
          Forgot Password ?
          <div className="title2">
            No worries,we'll send you reset instructions.
          </div>
        </div>
      </div>
      <div>
        <main className="box1">
          <form onSubmit={submitForm}>
            <div className="inputBox">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                name="Email"
                id="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>
            {/* <Link className="res" to="/forgetpassword2"> */}
              <button type="submit" className="res" name="" style={{ alignContent: "center" }}>
                Submit
              </button>
            {/* </Link> */}
            <Link
              className="login-link"
              to="/login"
              style={{ float: "center" }}
            >
              <span className="login-span">Back to login</span>
            </Link>
          </form>
        </main>
      </div>
    </>
  );
}
export default ForgetPassword;
