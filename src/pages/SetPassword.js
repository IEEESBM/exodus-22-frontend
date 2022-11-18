import React from 'react';
import './ForgetPassword.css';
import './SetPassword.css';
import {}from "react-router";
import {Link } from "react-router-dom";

function SetPassword() {
    
    return (
        <><div className="sign">
            <div className="title12">Set new Password 
            </div>
        </div><div>
                <main className="box3">
                    <form>
                        <div className="inputBox">
                        <label htmlFor="password">Password</label>
                            <input type="text" name="password" id="password" required />
                        </div>
                        <div className="inputBox">
                        <label htmlFor="password">Confirm password</label>
                            <input type="password" name="password" id="password" required />
                        </div>
                        
                      <Link className="res" to="/setpassword2">
                        <button type="submit" name="" style={{ alignContent: "center" }}>Submit</button>
                        </Link>
                        <Link className="login-link" to="/login" style={{ float: "center" }}><span className="login-span">Back to login</span></Link>

                    </form>
                </main>
            </div></>
        
    );
}

export default SetPassword;
