import React, { useState } from "react";
import "./Login.css";
import {}from "react-router";
import {Link ,useNavigate} from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";
function LoginComp() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const navigate = useNavigate()
  const submitForm = async (e) => {
    e.preventDefault(); //to stop the auto refresh
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/")
      console.log(user);

    } catch (error) {
      alert(error.message);
    }
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
