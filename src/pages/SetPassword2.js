import React from 'react';
import './SetPassword2.css';
import {}from "react-router";
import {Link } from "react-router-dom";

function SetPassword2() {
    
    return (
        <><div className="sign">
            <div className="title13">Password Reset 
            {/* <div className="title2">No worries,we'll send you reset instructions.</div> */}
            </div>
        </div><div>
                <main className="box2">
                    <form>
                        <div className="inputBox">
                        <label >Your password has been successfully reset</label>
                        </div>
                        
                      <Link className="res" to="/login">
                        <button type="submit" name="" style={{ alignContent: "center" }}>Login now</button>
                        </Link>
                        {/* <Link className="login-link" to="/login" style={{ float: "center" }}><span className="login-span">Back to log in</span></Link> */}

                    </form>
                </main>
            </div></>
        
    );
}

export default SetPassword2;
