// src/screens/StaffAttendance.js
import React, { useState, useEffect, useRef } from "react";
import "./StaffAttendance.css";

const StaffAttendance = () => {
  // Mock Data: Classes Handled by Staff
  const [classesHandled] = useState([
    { id: 1, subject: "Mathematics", className: "CSE 4th Semester" },
    { id: 2, subject: "Physics", className: "CSE 2nd Semester" },
  ]);

  // Attendance State
  const [selectedClass, setSelectedClass] = useState(null);
  const [attendance, setAttendance] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [selectedPeriod, setSelectedPeriod] = useState(0);
  const inputRefs = useRef([]);

  // Mock Data: Students in Selected Class
  const studentList = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alex Brown" },
    { id: 4, name: "Maria Davis" },
  ];

  // Open Attendance Sheet for a Class
  const openAttendanceSheet = (classInfo) => {
    setSelectedClass(classInfo);
    // Initialize Attendance for 8 Periods (Empty by Default)
    setAttendance(
      studentList.map((student) => ({
        ...student,
        periods: Array(8).fill(""), // Empty fields
      }))
    );
  };

  // Handle Attendance Update
  const updateAttendance = (studentIndex, periodIndex, value) => {
    const updatedAttendance = [...attendance];
    updatedAttendance[studentIndex].periods[periodIndex] = value.toUpperCase(); // Convert to uppercase
    setAttendance(updatedAttendance);

    // Move focus to the next student (if exists)
    if (studentIndex < attendance.length - 1) {
      inputRefs.current[studentIndex + 1]?.focus();
    }
  };

  // Navigate Back to Class List
  const goBackToClassList = () => {
    setSelectedClass(null);
    setAttendance([]);
  };

  // Handle Key Press for Attendance (P/A/L and Arrow Navigation)
  const handleKeyDown = (e, studentIndex) => {
    const validKeys = ["p", "a", "l"];
    const key = e.key.toLowerCase();

    if (validKeys.includes(key)) {
      updateAttendance(studentIndex, selectedPeriod, key);
    }

    // Move to the next student on down arrow press
    if (e.key === "ArrowDown" && studentIndex < attendance.length - 1) {
      inputRefs.current[studentIndex + 1]?.focus();
    }

    // Move to the previous student on up arrow press
    if (e.key === "ArrowUp" && studentIndex > 0) {
      inputRefs.current[studentIndex - 1]?.focus();
    }
  };

  // Calculate Summary
  const calculateSummary = () => {
    const totalStudents = attendance.length;
    const presentCount = attendance.filter(
      (student) => student.periods[selectedPeriod] === "P"
    ).length;
    const absentCount = totalStudents - presentCount;

    return { totalStudents, presentCount, absentCount };
  };

  const { totalStudents, presentCount, absentCount } = calculateSummary();

  return (
    <div className="staff-attendance-container">
      <h2>Attendance Marking</h2>

      {selectedClass ? (
        <div>
          {/* Back Button */}
          <button onClick={goBackToClassList} className="back-button">
            ← Back to Class List
          </button>

          <h3>
            {selectedClass.className} - {selectedClass.subject}
          </h3>

          {/* Date Picker */}
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>

          {/* Period Selector */}
          <label>
            Select Period:
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(Number(e.target.value))}
            >
              {[...Array(8).keys()].map((period) => (
                <option key={period} value={period}>
                  Period {period + 1}
                </option>
              ))}
            </select>
          </label>

          {/* Attendance Table */}
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Student Name</th>
                {[...Array(8).keys()].map((period) => (
                  <th key={period}>P{period + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {attendance.map((student, studentIndex) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  {student.periods.map((status, periodIndex) => (
                    <td key={periodIndex}>
                      {periodIndex === selectedPeriod ? (
                        <input
                          ref={(el) => (inputRefs.current[studentIndex] = el)}
                          type="text"
                          value={status}
                          maxLength={1}
                          onKeyDown={(e) => handleKeyDown(e, studentIndex)}
                          readOnly
                        />
                      ) : (
                        status || "-"
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Attendance Summary Section */}
          <div className="attendance-summary">
            <h3>Attendance Summary (Period {selectedPeriod + 1}):</h3>
            <p>Total Students: {totalStudents}</p>
            <p>Present: {presentCount}</p>
            <p>Absent: {absentCount}</p>
          </div>
        </div>
      ) : (
        <div>
          {/* Class List */}
          <table className="class-list-table">
            <thead>
              <tr>
                <th>Class Name</th>
                <th>Subject</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {classesHandled.map((classInfo) => (
                <tr key={classInfo.id}>
                  <td>{classInfo.className}</td>
                  <td>{classInfo.subject}</td>
                  <td>
                    <button onClick={() => openAttendanceSheet(classInfo)}>
                      Mark Attendance
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StaffAttendance;
