// src/layouts/StaffLayout.js
import React from "react";
import Sidebar from "../components/StaffSidebar";
import "./StaffLayout.css";

const StaffLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      {/* Sidebar - visible only once */}
      <Sidebar userRole="staff" />

      {/* Main content area */}
      <div className="dashboard-content">{children}</div>
    </div>
  );
};

export default StaffLayout;
