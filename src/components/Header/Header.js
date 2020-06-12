import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
            Aircnc
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item pr-3">
              <Link className="nav-link" to="/">
                Host your home
              </Link>
            </li>
            <li className="nav-item  pr-3">
              <Link className="nav-link" to="/">
                Host your experience
              </Link>
            </li>
            <li className="nav-item  pr-3">
              <Link className="nav-link" to="/">
                Help
              </Link>
            </li>
            <li className="nav-item  pr-3">
              <Link className="nav-link" to="/">
                Log in
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  px-3" to="/">
                <span className="text-light"> Sign up</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Header;