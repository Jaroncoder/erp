import React from "react";
import "./ClassTimetable.css";

const ClassTimeTable = () => {
  return (
    <div className="timetable-container">
      <h2>Class Time Table</h2>
      <div className="timetable-image-wrapper">
        <img src="/images/timetable.jpg" alt="Class Time Table" className="timetable-image" />
      </div>
    </div>
  );
};

export default ClassTimeTable;
