import React from 'react'
import {
    Link
} from "react-router-dom";
import Logo from '../assets/exodus-logo.svg';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        <img src={Logo} alt="Logo" width="60" className="d-inline-block align-text-top" />
                            EXODUS
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Rules</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Timeline</Link>
                            </li>
                            <li className="nav-item">
                                <Link type="button" className="nav-link" to="#">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link type="button" className="nav-link btn btn-outline-dark reg-btn" to="#">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
