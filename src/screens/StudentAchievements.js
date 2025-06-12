import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentAchievements.css";

const StudentAchievements = () => {
  const navigate = useNavigate();

  // Load achievements from localStorage or set default sample data
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const storedAchievements = JSON.parse(localStorage.getItem("achievements")) || [
      "Won 1st place in college hackathon",
      "Selected for inter-college football tournament",
      "Completed AI & ML online certification"
    ];
    setAchievements(storedAchievements);
  }, []);

  // Function to delete an achievement
  const removeAchievement = (index) => {
    const updatedAchievements = achievements.filter((_, i) => i !== index);
    setAchievements(updatedAchievements);
    localStorage.setItem("achievements", JSON.stringify(updatedAchievements));
  };

  return (
    <div className="achievements-container">
      <h2>Student Achievements</h2>
      <p>Total Achievements: {achievements.length}</p>
      <table className="achievements-table">
        <tbody>
          {achievements.map((achievement, index) => (
            <tr key={index}>
              <td>{achievement}</td>
              <td>
                <button className="delete-btn" onClick={() => removeAchievement(index)}>❌ Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-btn" onClick={() => navigate("/add-achievement")}>➕ Add Achievement</button>
    </div>
  );
};

export default StudentAchievements;
