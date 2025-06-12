import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddAchievement.css";

const AddAchievement = () => {
  const [achievement, setAchievement] = useState("");
  const navigate = useNavigate();

  const handleAddAchievement = () => {
    if (achievement.trim() === "") {
      alert("Achievement cannot be empty!");
      return;
    }

    // Get existing achievements from local storage
    const storedAchievements = JSON.parse(localStorage.getItem("achievements")) || [];

    // Add new achievement
    const updatedAchievements = [...storedAchievements, achievement];

    // Save back to local storage
    localStorage.setItem("achievements", JSON.stringify(updatedAchievements));

    // Redirect back to achievements page
    navigate("/student-achievements");
  };

  return (
    <div className="add-achievement-container">
      <h2>Add New Achievement</h2>
      <textarea
        value={achievement}
        onChange={(e) => setAchievement(e.target.value)}
        placeholder="Enter your achievement..."
      />
      <button className="save-btn" onClick={handleAddAchievement}>Save Achievement</button>
      <button className="back-btn" onClick={() => navigate("/student-achievements")}>Back</button>
    </div>
  );
};

export default AddAchievement;
