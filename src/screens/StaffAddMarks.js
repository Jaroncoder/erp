// src/screens/StaffAddMarks.js

import React, { useState } from "react";
import "./StaffAddMarks.css";

const StaffAddMarks = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", marks: { cat1: 45, cat2: 20 } },
    { id: 2, name: "Jane Smith", marks: { cat1: 40, cat2: 19 } },
    { id: 3, name: "Alice Johnson", marks: { cat1: 35, cat2: 18 } },
    { id: 4, name: "Bob Williams", marks: { cat1: 50, cat2: 22 } },
    { id: 5, name: "Charlie Brown", marks: { cat1: 36, cat2: 21 } },
  ]);

  const [activities, setActivities] = useState([
    { id: "cat1", name: "CAT 1", totalMarks: 60 },
    { id: "cat2", name: "Concept Test", totalMarks: 30 },
  ]);

  const [convertedMarks, setConvertedMarks] = useState({});
  const [convertedActivities, setConvertedActivities] = useState([]);
  const [totals, setTotals] = useState([]);

  const [showAddActivityPopup, setShowAddActivityPopup] = useState(false);
  const [newActivityName, setNewActivityName] = useState("");
  const [newActivityTotal, setNewActivityTotal] = useState("");

  const [showUploadSummaryPopup, setShowUploadSummaryPopup] = useState(false);
  const [conversionValues, setConversionValues] = useState({});

  const [showTotalPopup, setShowTotalPopup] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState([]);

  const handleMarkChange = (studentId, activityId, value) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId
          ? {
              ...student,
              marks: { ...student.marks, [activityId]: value },
            }
          : student
      )
    );
  };

  const addActivity = () => {
    if (!newActivityName || !newActivityTotal) {
      alert("Please enter both Activity Name and Total Marks");
      return;
    }

    const newId = `activity_${Date.now()}`;
    const newActivity = {
      id: newId,
      name: newActivityName,
      totalMarks: Number(newActivityTotal),
    };

    setActivities((prev) => [...prev, newActivity]);
    setStudents((prevStudents) =>
      prevStudents.map((student) => ({
        ...student,
        marks: { ...student.marks, [newId]: "" },
      }))
    );

    setNewActivityName("");
    setNewActivityTotal("");
    setShowAddActivityPopup(false);
  };

  const handleUploadSummary = () => {
    const newConvertedMarks = { ...convertedMarks };
    const newConvertedActivities = [];

    activities.forEach((activity) => {
      const targetTotal = conversionValues[activity.id];
      if (!targetTotal) return;

      students.forEach((student) => {
        const originalMark = student.marks[activity.id] || 0;
        const convertedMark = (originalMark / activity.totalMarks) * targetTotal;

        if (!newConvertedMarks[student.id]) newConvertedMarks[student.id] = {};
        newConvertedMarks[student.id][`converted_${activity.id}`] = Math.round(
          convertedMark
        );
      });

      newConvertedActivities.push({
        id: `converted_${activity.id}`,
        name: `${activity.name} (Converted)`,
        totalMarks: targetTotal,
      });
    });

    setConvertedMarks(newConvertedMarks);
    setConvertedActivities((prev) => [...prev, ...newConvertedActivities]);
    setShowUploadSummaryPopup(false);
  };

  const handleAddTotal = () => {
    if (selectedColumns.length === 0) {
      alert("Please select columns to calculate total");
      return;
    }

    const totalColumnId = `total_${Date.now()}`;
    const updatedMarks = { ...convertedMarks };

    students.forEach((student) => {
      const total = selectedColumns.reduce((sum, col) => {
        const mark =
          student.marks[col] || convertedMarks[student.id]?.[col] || 0;
        return sum + Number(mark);
      }, 0);

      if (!updatedMarks[student.id]) updatedMarks[student.id] = {};
      updatedMarks[student.id][totalColumnId] = total;
    });

    setConvertedMarks(updatedMarks);
    setTotals((prev) => [
      ...prev,
      { id: totalColumnId, name: "Total", totalMarks: 100 },
    ]);
    setSelectedColumns([]);
    setShowTotalPopup(false);
  };

  return (
    <div className="marks-container">
      <h1>Staff Add Marks</h1>

      <div className="buttons">
        <button onClick={() => setShowAddActivityPopup(true)}>Add Activity</button>
        <button onClick={() => setShowUploadSummaryPopup(true)}>Upload Summary</button>
        <button onClick={() => setShowTotalPopup(true)}>Add Total</button>
      </div>

      <table>
        <thead>
          <tr>
            <th style={{ color: "red" }}>Student Name</th>
            {activities.map((activity) => (
              <th key={activity.id} style={{ color: "red" }}>
                {activity.name} ({activity.totalMarks})
              </th>
            ))}
            {convertedActivities.map((activity) => (
              <th key={activity.id} style={{ color: "red" }}>
                {activity.name}
              </th>
            ))}
            {totals.map((total) => (
              <th key={total.id} style={{ color: "red" }}>
                {total.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              {activities.map((activity) => (
                <td key={activity.id}>
                  <input
                    type="number"
                    value={student.marks[activity.id] || ""}
                    onChange={(e) =>
                      handleMarkChange(student.id, activity.id, e.target.value)
                    }
                  />
                </td>
              ))}
              {convertedActivities.map((activity) => (
                <td key={activity.id}>
                  {convertedMarks[student.id]?.[activity.id] || ""}
                </td>
              ))}
              {totals.map((total) => (
                <td key={total.id}>
                  {convertedMarks[student.id]?.[total.id] || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Activity Popup */}
      {showAddActivityPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Add Activity</h3>
            <input
              type="text"
              placeholder="Activity Name"
              value={newActivityName}
              onChange={(e) => setNewActivityName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Total Marks"
              value={newActivityTotal}
              onChange={(e) => setNewActivityTotal(e.target.value)}
            />
            <button onClick={addActivity}>Add</button>
            <button onClick={() => setShowAddActivityPopup(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Upload Summary Popup */}
      {showUploadSummaryPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Upload Summary</h3>
            {activities.map((activity) => (
              <div key={activity.id} style={{ marginBottom: "10px" }}>
                <label>{activity.name} (Current: {activity.totalMarks})</label>
                <input
                  type="number"
                  placeholder="Enter converted total"
                  value={conversionValues[activity.id] || ""}
                  onChange={(e) =>
                    setConversionValues({
                      ...conversionValues,
                      [activity.id]: e.target.value,
                    })
                  }
                />
              </div>
            ))}
            <button onClick={handleUploadSummary}>Convert</button>
            <button onClick={() => setShowUploadSummaryPopup(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Add Total Popup */}
      {showTotalPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Select Columns for Total</h3>
            {[...activities, ...convertedActivities].map((col) => (
              <div key={col.id}>
                <label>
                  <input
                    type="checkbox"
                    value={col.id}
                    checked={selectedColumns.includes(col.id)}
                    onChange={(e) => {
                      const id = e.target.value;
                      setSelectedColumns((prev) =>
                        prev.includes(id)
                          ? prev.filter((c) => c !== id)
                          : [...prev, id]
                      );
                    }}
                  />
                  {col.name}
                </label>
              </div>
            ))}
            <button onClick={handleAddTotal}>Calculate Total</button>
            <button onClick={() => setShowTotalPopup(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffAddMarks;
