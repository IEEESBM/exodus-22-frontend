import React, { useState } from "react";
import "./Login.css";
import {}from "react-router";
import {Link } from "react-router-dom";
function LoginComp() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault(); //to stop the auto refresh
    const newEntry = { email: email, password: password };

    setAllEntry([...allEntry, newEntry]);
  };
  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div className="emailcomp">
          <label htmlFor="email">Email</label>

          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div className="emailcomp">
          <label htmlFor="password">Password</label> 
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Link href="#" className="forgot" to="/forgetpassword">
          Forgot password?
        </Link>
        <div className="loginbutton">
          <button type="submit">Login</button>
        </div>
        <Link href="#" className="dont" to="/signup">
          <pre>
            {" "}
            Dont have an account yet?<br></br>
            <i> Sign up now!</i>
          </pre>{" "}
        </Link>
      </form>
    </>
  );
}
export default LoginComp;
