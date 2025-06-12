import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const ParentSidebar = () => {
  const navigate = useNavigate();
  const [parentName, setParentName] = useState("");

  useEffect(() => {
    const storedParentName = localStorage.getItem("parentName") || "Parent";
    setParentName(storedParentName);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className="sidebar">
      <h2>{parentName}'s Dashboard</h2>
      <ul>
        <li><Link to="/parent-profile">Student Profile</Link></li>
        <li><Link to="/parent-attendance">Student Attendance</Link></li>
        <li><Link to="/parent-student-marks">Student Marks</Link></li>
        <li><Link to="/parent-semester">Semester exam results</Link></li>
        <li><Link to="/parent-timetable">Class Timetable</Link></li>
        <li><Link to="/parent-feedetails">Fee details</Link></li>
        <li><Link to="/parent-announcements">Notices & announcements</Link></li>
        <li><Link to="/parent-calendar">Exam Schedules & Academic Calendar</Link></li>
      </ul>

      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ParentSidebar;
