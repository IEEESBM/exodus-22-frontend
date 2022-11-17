import React from 'react';
import './Signup.css';
import {}from "react-router";
import {Link } from "react-router-dom";

function Signup() {
    
    return (
        <><div className="sign">
            <div className="sign-t">Signup</div>
        </div><div>
                <main className="box">
                    <form>
                        <div className="inputBox">
                            <label htmlFor="Email">Email</label>
                            <input type="text" name="Email" id="Email" required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="Name">Name</label>
                            <input type="text" name="Name" id="Name"
                                required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="Password"> Password</label>
                            <input type="password" name="Password" id="Password"

                                required />
                        </div>
                        <button type="submit" name="" style={{ alignContent: "center" }}>Signup</button>

                        <Link className="login-link" to="/login" style={{ float: "center" }}><span className="login-span">Already signed up? Login now!</span></Link>

                    </form>
                </main>
            </div></>
        
    );
}

export default Signup;
