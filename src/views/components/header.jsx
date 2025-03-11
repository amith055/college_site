import React, { useState, useEffect, useRef } from "react";
import "./header.css";

const Header = () => {
  const [showMore, setShowMore] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const moreRef = useRef(null);

  // Toggle More Options
  const toggleMoreOptions = () => {
    setShowMore(!showMore);
  };

  // Toggle Dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Close dropdown and more menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setShowMore(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="top">
        {/* Logo and College Name */}
        <div className="logo-container">
          <img src="images/tcelogo.jpeg" alt="College Logo" className="logo" />
          <h1 className="college-name">Tontadarya College of Engineering</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="container">
          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/admission">Admissions</a></li>
            <li><a href="/placements">Placements</a></li>
            <li><a href="/hostel">Hostel</a></li>
            <li><a href="/library">Library</a></li>
            <li><a href="/faculty">Faculty</a></li>
            <li><a href="/events">Events</a></li>

            {/* Administration Dropdown */}
            <div className="dropdown" ref={dropdownRef}>
              <button onClick={toggleDropdown}>Administration</button>
              {showDropdown && (
                <div className="dropdown-content">
                  <a href="/plogin">Principal</a>
                  <a href="/flogin">Faculty</a>
                  <a href="/hlogin">HoD</a>
                  <a href="/slogin">Staff</a>
                </div>
              )}
            </div>

            {/* More Options Dropdown */}
            <li ref={moreRef}>
              <button className="toggle-btn" onClick={toggleMoreOptions}> ☰ </button>
              {showMore && (
                <ul className="more-options">
                  <li><a href="/acadamiccalender">Academic Calendar</a></li>
                  <li><a href="/facilitiess">Facilities</a></li>
                  <li><a href="/alumini">Alumni</a></li>
                  <li><a href="/academics">Academics</a></li>
                  <li><a href="/gallery">Gallery</a></li>
                  <li><a href="/notifications">Notifications</a></li>
                  <li><a href="/about">About us</a></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
