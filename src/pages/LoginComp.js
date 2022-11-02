import React, { useState } from "react";
import "./Login.css";
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
          <br />

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
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <a href="#" className="forgot">
          Forget password?
        </a>
        <div className="loginbutton">
          <button type="submit">Login</button>
        </div>
        <a href="#" className="dont">
          <pre>
            {" "}
            Dont have an account yet?<br></br>
            <i>Sign up!</i>
          </pre>{" "}
        </a>
      </form>
    </>
  );
}
export default LoginComp;
