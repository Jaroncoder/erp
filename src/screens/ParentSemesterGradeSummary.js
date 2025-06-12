import React from "react";
import "./ParentSemesterGradeSummary.css";

const ParentSemesterResults = () => {
  const studentName = "John Doe";
  const currentSemester = "4th Semester";

  // Sample semester data
  const semesters = [
    {
      semester: "1st Semester",
      subjects: [
        { name: "Mathematics I", grade: "A" },
        { name: "Physics", grade: "A+" },
        { name: "Computer Fundamentals", grade: "B+" },
        { name: "Engineering Drawing", grade: "A" },
      ],
      gpa: 8.5,
    },
    {
      semester: "2nd Semester",
      subjects: [
        { name: "Mathematics II", grade: "A+" },
        { name: "Chemistry", grade: "A" },
        { name: "C Programming", grade: "B" },
        { name: "Workshop", grade: "A" },
      ],
      gpa: 8.2,
    },
    {
      semester: "3rd Semester",
      subjects: [
        { name: "Data Structures", grade: "B+" },
        { name: "Digital Electronics", grade: "A" },
        { name: "Discrete Math", grade: "B" },
        { name: "OOP with Java", grade: "A+" },
      ],
      gpa: 8.1,
    },
    {
      semester: "4th Semester",
      subjects: [
        { name: "DBMS", grade: "A" },
        { name: "Operating Systems", grade: "B+" },
        { name: "Computer Networks", grade: "A+" },
        { name: "Python Programming", grade: "A" },
      ],
      gpa: 8.6,
    },
  ];

  // Calculate CGPA
  const totalGPA = semesters.reduce((sum, sem) => sum + sem.gpa, 0);
  const cgpa = (totalGPA / semesters.length).toFixed(2);

  return (
    <div className="semester-results-container">
      <h2>Semester Examination Results</h2>
      <p><strong>Name:</strong> {studentName}</p>
      <p><strong>Current Semester:</strong> {currentSemester}</p>

      {semesters.map((sem, index) => (
        <div className="semester-card" key={index}>
          <h3>{sem.semester}</h3>
          <table className="subject-grade-table">
            <thead>
              <tr>
                <th className="table-header">Subject</th>
                <th className="table-header">Grade</th>
              </tr>
            </thead>
            <tbody>
              {sem.subjects.map((subj, i) => (
                <tr key={i}>
                  <td>{subj.name}</td>
                  <td className={`grade-cell grade-${subj.grade.replace("+", "plus")}`}>
                    {subj.grade}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="gpa">GPA: <strong>{sem.gpa}</strong></p>
        </div>
      ))}

      <div className="cgpa-container">
        <h3>Overall CGPA: <span className="cgpa-value">{cgpa}</span></h3>
      </div>
    </div>
  );
};

export default ParentSemesterResults;
