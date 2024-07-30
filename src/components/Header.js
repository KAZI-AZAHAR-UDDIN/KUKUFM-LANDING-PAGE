import React, { useState } from 'react';
import {
 Link
} from 'react-router-dom';

import '../styles/Header.css'; // Import the CSS file directly

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logoSection">
          <button
            type="button"
            className="menuButton"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="menuIcon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
          <Link to="/">
            <img
              src="https://www.svgrepo.com/show/517312/kuku-fm.svg"
              alt="KukuFM Logo"
              width={80}
              height={100}
            />
          </Link>
        </div>

        <div className="searchContainer">
          <input
            placeholder="Search audiobook & stories"
            className="searchInput"
          />
        </div>
        <div className="languageSelector">
            <button type="button" className="languageButton">
              <div className="languageTitle">
                <span>Languages</span>
              </div>
              <div className="languageInfo">Hindi, English</div>
            </button>
            <div className="languageDropdown">
              {/* Language options can go here */}
            </div>
          </div>

        <div className="navLinks">
          <Link to="/free-trial">
            Get Free Trial
          </Link>
          <Link to="/buy-coins">
            Buy Coins
          </Link>
          <Link to="/login-signup">
            Login/Signup
          </Link>
          <Link to="/">
            <img
              src="https://d1l07mcd18xic4.cloudfront.net/static/donwloadapp.png"
              alt="download"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="mobileMenu">
          <div className="mobileSearchContainer">
            <input
              placeholder="Search audiobook & stories"
              className="searchInput"
            />
          </div>
          <div className="languageSelector">
            <button type="button" className="languageButton">
              <div className="languageTitle">
                <span>Languages</span>
              </div>
              <div className="languageInfo">Hindi, English</div>
            </button>
            <div className="languageDropdown">
              {/* Language options can go here */}
            </div>
          </div>
        
          <Link to="/free-trial">
            Get Free Trial
          </Link>
          <Link to="/buy-coins">
            Buy Coins
          </Link>
          <Link to="/login-signup">
            Login/Signup
          </Link>
          <Link to="/">
            <img
              src="https://d1l07mcd18xic4.cloudfront.net/static/donwloadapp.png"
              alt="download"
              width={30}
              height={30}
            />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
