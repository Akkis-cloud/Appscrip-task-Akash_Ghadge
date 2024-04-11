import React from 'react';
// import './Header.css'; // Import your CSS file for styling
import search from '../Assest/search-normal.png';
import heart from '../Assest/heart.png';
import bag from '../Assest/shopping-bag.png';
import profile from '../Assest/profile.png';
import logo from '../Assest/Logo.png';
const Header = () => {
  return (
    <header className="header">
      <div className="top-row">
        <div className="left">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="center">
          <span className="logo-text">LOGO</span>
        </div>
        <div className="right">
          <img src={search} alt="Search" className="icon" />
          <img src={heart} alt="Heart" className="icon" />
          <img src={bag} alt="Bag" className="icon" />
          <img src={profile} alt="Profile" className="icon" />
          <select className="language-select">
            <option value="english">ENG</option>
            <option value="hindi">HIN</option>
          </select>
        </div>
      </div>
      <div className="bottom">
        <nav>
          <ul>
            <li><a href="#">SHOP</a></li>
            <li><a href="#">SKILLS</a></li>
            <li><a href="#">STORIES</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
        </nav>
      </div>
      <hr className="divider" />
    </header>
  );
};

export default Header;
