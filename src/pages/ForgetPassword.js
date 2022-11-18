import React from 'react';
import './ForgetPassword.css';
import {}from "react-router";
import {Link } from "react-router-dom";

function ForgetPassword() {
    
    return (
        <><div className="sign">
            <div className="title11">Forgot Password ?<div className="title2">No worries,we'll send you reset instructions.</div></div>
        </div><div>
                <main className="box1">
                    <form>
                        <div className="inputBox">
                            <label htmlFor="Email">Email</label>
                            <input type="text" name="Email" id="Email" required />
                        </div>
                      <Link className="res" to="/forgetpassword2">
                        <button type="submit" name="" style={{ alignContent: "center" }}>Submit</button>
                        </Link>
                        <Link className="login-link" to="/login" style={{ float: "center" }}><span className="login-span">Back to login</span></Link>

                    </form>
                </main>
            </div></>
        
    );
}
export default ForgetPassword;

