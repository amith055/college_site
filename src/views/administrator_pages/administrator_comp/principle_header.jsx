import React, { useState, useEffect, useRef } from "react";
import "./header1.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PrincipalHeader = () => {
  const [showMore, setShowMore] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const moreRef = useRef(null);
  const navigate = useNavigate();

  // Toggle More Options
  const toggleMoreOptions = () => {
    setShowMore(!showMore);
  };

  // Toggle Dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };


  const handleLogout = () => {
    Swal.fire({
      title: "Logout?",
      text: "Are you sure you want to log out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Logout",
      cancelButtonText: "Cancel",
      background: "#fff",
      color: "#111",
      confirmButtonColor: "#ff4d4d",
      cancelButtonColor: "#555",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
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
            <li><a href="/hodprofile">Profile</a></li>
            <li><a href="/dept_members">Department Members</a></li>
            <li><a href="/assignclass">Assign Class</a></li>
            <li><a href="/timetable">Time Tables</a></li>
            <li><a href="/saral">Saral</a></li>
            <li><a href="/attendancerport_hod">Attendance Report</a></li>
            <li><a href="/results">Results</a></li>
            <li><a href="/changerole">Change Role</a></li>
            <li><a href="/createform">Create Form</a></li>
            <li><a onClick={handleLogout}>Log Out</a></li>

            {/* Administration Dropdown */}
            <div className="dropdown" ref={dropdownRef}>
              <button onClick={toggleDropdown}>Demo</button>
              {showDropdown && (
                <div className="dropdown-content">
                  <a href="/plogin">Principal</a>
                  <a href="/flogin">Faculty</a>
                  <a href="/hlogin">HoD</a>
                  <a href="/slogin">Staff</a>
                </div>
              )}
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default PrincipalHeader;
