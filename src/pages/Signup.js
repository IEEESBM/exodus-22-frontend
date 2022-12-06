import React from "react";
import "./Signup.css";
import {} from "react-router";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

import { useState } from 'react';

function Signup() {
  const [userName, setUserName] = useState(null);
  const [userEmail,setUserEmail] = useState(null)
  const [userPassword,setUserPassword] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const user = await createUserWithEmailAndPassword(
          auth,
          userEmail,
          userPassword
        );
      } catch (error) {
        alert(error.message);
      }
  }

  return (
    <>
      <div className="sign">
        <div>
          <div className="sign-t">Signup</div>
          <main className="box">
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <label htmlFor="Email">Email</label>
                <input type="text" name="Email" id="Email" value={userEmail} onChange={(e) =>{setUserEmail(e.target.value)}} required />
              </div>
              <div className="inputBox">
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name" id="Name"  value={userName} onChange={(e) => {setUserName(e.target.value)}} required />
              </div>
              <div className="inputBox">
                <label htmlFor="Password"> Password</label>
                <input type="password" name="Password" id="Password" value={userPassword} onChange={(e) => {setUserPassword(e.target.value)}} required />
              </div>
              <button type="submit" name="" style={{ alignContent: "center" }}>
                Signup
              </button>

              <Link
                className="login-link"
                to="/login"
                style={{ float: "center" }}
              >
                <span className="login-span">
                  Already signed up? Login now!
                </span>
              </Link>
            </form>
          </main>
        </div>
      </div>
    </>
  );
}

export default Signup;
