import React, { useState } from "react";
import "./ParentExamSchedule.css";

const ParentExamSchedule = () => {
  const [imageExists, setImageExists] = useState(true);

  const handleImageError = () => {
    setImageExists(false);
  };

  return (
    <div className="exam-schedule-container">
      <h2>📚 Exam Schedule</h2>
      {imageExists ? (
        <img
          src="/images/exam-schedule.jpg"
          alt="Exam Schedule"
          className="exam-schedule-image"
          onError={handleImageError}
        />
      ) : (
        <p className="no-schedule-msg">📌 The exam schedule will be uploaded soon.</p>
      )}
    </div>
  );
};

export default ParentExamSchedule;
