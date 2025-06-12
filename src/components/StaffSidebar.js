import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ userRole }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className="sidebar">
      <h2>
        {userRole === "staff"
          ? "Staff Dashboard"
          : userRole === "parent"
          ? "Parent Dashboard"
          : "Student Dashboard"}
      </h2>

      <ul>
        {userRole === "student" && (
          <>
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
          </>
        )}

        {userRole === "staff" && (
          <>
            <li><Link to="/marks-upload">📊 Marks Upload</Link></li>
            <li><Link to="/staff-attendance">📅 Attendance</Link></li>
            <li><Link to="/staff-announcements">📢 Announcements</Link></li>
            <li><Link to="/staff-class-analysis">📈 Class Analysis</Link></li>
            <li><Link to="/staff-student-analysis">🔍 Student Analysis</Link></li>
          </>
        )}

        {userRole === "parent" && (
          <>
            <li><Link to="/parent-profile">Student Profile</Link></li>
            <li><Link to="/parent-attendance">Student Attendance</Link></li>
            <li><Link to="/parent-student-marks">Student Marks</Link></li>
            <li><Link to="/parent-semester">Semester Exam Results</Link></li>
            <li><Link to="/parent-timetable">Class Timetable</Link></li>
            <li><Link to="/parent-feedetails">Fee Details</Link></li>
            <li><Link to="/parent-announcements">Notices & Announcements</Link></li>
            <li><Link to="/parent-calendar">Exam Schedules & Academic Calendar</Link></li>
            <li><Link to="/parent-feedback">Feedback & Suggestions</Link></li>
          </>
        )}
      </ul>

      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Sidebar;
