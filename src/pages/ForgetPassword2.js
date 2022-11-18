import React from 'react';
import './ForgetPassword2.css';
import {}from "react-router";
import {Link } from "react-router-dom";

function ForgetPassword2() {
    
    return (
        <><div className="sign">
            <div className="title14">Check your email 
            {/* <div className="title2">No worries,we'll send you reset instructions.</div> */}
            </div>
        </div><div>
                <main className="box4">
                    <form>
                        <div className="sent1">
                        <label >We sent you an email with instructions to reset your password</label>
                        </div>
                        <div className="sent2">
                        <label >If you haven't received this email within a few minutes, please check your spam folder.</label>
                        </div>
                        
                      {/* <Link className="res" to="/login">
                        <button type="submit" name="" style={{ alignContent: "center" }}>Login now</button>
                        </Link> */}
                        <Link className="login-link" to="/login" style={{ float: "center" }}><span className="login-span">Back to log in</span></Link>

                    </form>
                </main>
            </div></>
        
    );
}

export default ForgetPassword2;
