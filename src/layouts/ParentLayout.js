// src/layouts/ParentLayout.js
import React from "react";
import ParentSidebar from "../components/ParentSidebar"; // ✅ Import the correct one
import "./StaffLayout.css"; // Or use ParentLayout.css if you have it

const ParentLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      <ParentSidebar /> {/* ✅ Use the correct sidebar */}
      <div className="dashboard-content">
        {children}
      </div>
    </div>
  );
};

export default ParentLayout;
