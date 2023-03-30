import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function NavBar() {
    const navigate = useNavigate();
    return (
        <div className="nav-bar">
            <div className="navbar-logo">
                <img
                    src="/images/MADGIC21.png"
                    alt="rihan-logo"
                    onClick={() => navigate("/")}
                />
            </div>
            <Link className="nav-bar-link" to="/gallery">
                Projects
            </Link>

            <Link className="nav-bar-link" to="/contact">
                Contact
            </Link>

            <Link className="nav-bar-link" to="/contact">
                About Us
            </Link>
        </div>
    );
}

export default NavBar;
