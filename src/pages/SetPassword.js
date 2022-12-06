import React, { useState } from "react";
import "./ForgetPassword.css";
import "./SetPassword.css";
import {} from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { updatePassword } from "firebase/auth";
import { auth } from "../firebase-config";

function SetPassword() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const user = await updatePassword(
            auth.currentUser,
            password,
          );
          console.log(user);
          navigate("/setpassword2")
    } catch (error) {
        alert(error)
    }
  };
  return (
    <>
      <div className="sign">
        <div className="title12">Set new Password</div>
      </div>
      <div>
        <main className="box3">
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <label htmlFor="password">Password</label>
              <input type="password" name="password"  required />
            </div>
            <div className="inputBox">
              <label htmlFor="password">Confirm password</label>
              <input
                type="password"
                name="password"
                // id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* <Link className="res" to="/setpassword2"> */}
              <button type="submit" name="" style={{ alignContent: "center" }}>
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

export default SetPassword;
