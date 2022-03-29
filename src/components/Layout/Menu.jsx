import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg   navbar-light text-white ">
        <div className="container  ">
          <Link className="navbar-brand text-danger ms-md-5" to="/">
            <img src="images/logo-black.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0  d-flex justify-content-between align-items-end align-items-md-center fw-bold text-white ">
              <li className="nav-item mx-md-2 ">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item mx-md-2">
                <Link className="nav-link text-nowrap text-white" to="/about">
                  TOKENOMICS
                </Link>
              </li>
              <li className="nav-item text-nowrap mx-md-2 ">
                <Link className="nav-link text-white" to="/contactUs">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item text-nowrap mx-md-2">
                <Link className="nav-link text-white" to="/contactUs">
                  ROADMAP
                </Link>
              </li>
              <li className="nav-item text-nowrap mx-md-2">
                <Link className="nav-link text-white" to="/contactUs">
                  AUDIT
                </Link>
              </li>
              <li className="nav-item text-nowrap">
                <Link className="nav-link text-white" to="/contactUs">
                  HOW TO BUY
                </Link>
              </li>
              <li className="nav-item text-nowrap">
                <Link className="nav-link text-white" to="/contactUs">
                  TELEGRAM
                </Link>
              </li>
              <li className="nav-item text-nowrap mx-md-2">
                <Link className="nav-link text-white" to="/contactUs">
                  TWITTER
                </Link>
              </li>
              <li className="nav-item text-nowrap mx-md-2">
                <Link className="nav-link text-white" to="/contactUs">
                  OUR LINKS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
