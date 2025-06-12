import React from "react";
import { useNavigate } from "react-router-dom";
import "./RoleSelection.css"; // Import the CSS file

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="role-selection-container">
      <h2 className="role-selection-heading">Select Your Role</h2>
      <div className="role-selection-buttons">
        <button className="role-button" onClick={() => navigate("/student-login")}>
          Student
        </button>
        <button className="role-button" onClick={() => navigate("/staff-login")}>
          Staff
        </button>
        <button className="role-button" onClick={() => navigate("/parent-login")}>
          Parent
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;
