import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session (localStorage/sessionStorage)
    localStorage.removeItem("authToken");

    // Redirect to login page
    navigate("/");
  };

  return (
    <div className="sidebar">
      <h2>Student Dashboard</h2>
      <ul>
        <li><Link to="/student-profile">Profile</Link></li>
        <li><Link to="/student-internal-marks">Internal Marks</Link></li>
        <li><Link to="/student-attendance">Attendance</Link></li>
        <li><Link to="/student-achievements">Student Achievements</Link></li>
        <li><Link to="/student-calendar">Academic Calendar</Link></li>
        <li><Link to="/student-library">Library Book Details</Link></li>
        <li><Link to="/student-courses">Course List</Link></li>
        <li><Link to="/student-semester-marks">Semester Marks</Link></li>
        <li><Link to="/student-arrear-details">Arrear Details</Link></li>
        <li><Link to="/student-club-attendance">Club Attendance</Link></li>
      </ul>

      {/* Logout Button */}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
