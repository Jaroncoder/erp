import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import "./StaffClassAnalysis.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const StaffClassAnalysis = () => {
  // Sample Data: Available Classes
  const classesHandled = [
    { id: 1, name: "CSE 4th Semester" },
    { id: 2, name: "CSE 2nd Semester" },
  ];

  const [selectedClass, setSelectedClass] = useState(null);

  // Sample Data for Analysis
  const totalStudents = 50;
  const presentStudents = 45;
  const absentStudents = totalStudents - presentStudents;
  const passPercentage = 85;
  const averageMarks = 72;
  const topPerformer = "John Doe - 95%";
  const bottomPerformer = "Alex Brown - 42%";

  // Attendance Chart Data
  const attendanceData = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        label: "Attendance",
        data: [presentStudents, absentStudents],
        backgroundColor: ["#4CAF50", "#FF4D4D"],
      },
    ],
  };

  // Marks Distribution Chart Data
  const marksData = {
    labels: ["0-40%", "41-60%", "61-80%", "81-100%"],
    datasets: [
      {
        label: "Students",
        data: [5, 15, 20, 10],
        backgroundColor: ["#FF4D4D", "#FFA500", "#FFD700", "#4CAF50"],
      },
    ],
  };

  return (
    <div className="class-analysis-container">
      <h2>Class Performance Analysis</h2>

      {/* Class Selection Dropdown */}
      <label className="class-selection-label">
        Select Class:
        <select
          onChange={(e) => setSelectedClass(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            -- Choose a class --
          </option>
          {classesHandled.map((cls) => (
            <option key={cls.id} value={cls.name}>
              {cls.name}
            </option>
          ))}
        </select>
      </label>

      {/* Display Analysis Only If Class is Selected */}
      {selectedClass && (
        <>
          <h3>Analysis for {selectedClass}</h3>

          {/* Summary Section */}
          <div className="summary-section">
            <div className="summary-box">
              <h3>Total Students</h3>
              <p>{totalStudents}</p>
            </div>
            <div className="summary-box">
              <h3>Pass Percentage</h3>
              <p>{passPercentage}%</p>
            </div>
            <div className="summary-box">
              <h3>Average Marks</h3>
              <p>{averageMarks}%</p>
            </div>
            <div className="summary-box">
              <h3>Top Performer</h3>
              <p>{topPerformer}</p>
            </div>
            <div className="summary-box">
              <h3>Bottom Performer</h3>
              <p>{bottomPerformer}</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="charts-section">
            <div className="chart-box">
              <h3>Attendance Analysis</h3>
              <Pie data={attendanceData} />
            </div>

            <div className="chart-box">
              <h3>Marks Distribution</h3>
              <Bar data={marksData} options={{ responsive: true }} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StaffClassAnalysis;
