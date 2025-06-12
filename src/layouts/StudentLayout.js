import React from "react";
import Sidebar from "../components/Sidebar"; 
import "./StudentLayout.css"; // Ensure you have proper styling for layout

const StudentLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      {/* Sidebar Component */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="dashboard-content">
        {children}
      </div>
    </div>
  );
};

export default StudentLayout;
