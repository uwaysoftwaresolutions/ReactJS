import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">Navbar</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Mental Health Information
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" href="#">Mental Health 101</a></li>
                                                <li><a className="dropdown-item" href="#">Depression</a></li>
                                                <li><a className="dropdown-item" href="#">Anxiety</a></li>
                                                <li><a className="dropdown-item" href="#">Bipolar</a></li>
                                                <li><a className="dropdown-item" href="#">Psychosis </a></li>
                                                <li><a className="dropdown-item" href="#">Addiction</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Resources
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" href="#">DIY Tools</a></li>
                                                <li><a className="dropdown-item" href="#">Get Help</a></li>
                                                <li><a className="dropdown-item" href="#">Mental Health Treatment Info</a></li>
                                                <li><a className="dropdown-item" href="#">Connect with others</a></li>
                                                <li><a className="dropdown-item" href="#">Overcoming Thoughts</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#">About Us</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar;