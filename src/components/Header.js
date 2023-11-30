import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  // Function to determine if a given path is the current path
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="navbar mr-auto navbar-light bg-white py-3">
        <div className="container px-5 navbar-expand-lg">
          <Link to="/" className="nav-link">
            <span className="fw-bolder text-logo">HASHING PORTAL</span>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
              <li className="nav-item">
                <Link to="/" className={`nav-link ${isActive('/') ? 'active text-gradient' : ''}`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Generate" className={`nav-link ${isActive('/Generate') ? 'active text-gradient' : ''}`}>
                  Generate
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Investigate" className={`nav-link ${isActive('/Investigate') ? 'active text-gradient' : ''}`}>
                  Investigate
                </Link>
              </li>
             
              <li className="nav-item">
                <Link to="/Login" className={`nav-link ${isActive('/Login') ? 'active text-gradient' : ''}`}>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
