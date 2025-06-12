import React, { useState } from "react";
import "./StudentLibrary.css";

const StudentLibrary = () => {
  const [activeTab, setActiveTab] = useState("booksInHand");

  // Sample Data for Testing
  const booksInHand = [
    { bookNo: "101", bookName: "Data Structures", borrowDate: "2025-03-10", dueDate: "2025-03-24" },
    { bookNo: "102", bookName: "Operating Systems", borrowDate: "2025-02-28", dueDate: "2025-03-15" },
  ];

  const pastBooks = [
    { bookNo: "100", bookName: "Database Systems", borrowDate: "2025-01-15", returnDate: "2025-02-10" },
    { bookNo: "099", bookName: "Computer Networks", borrowDate: "2024-12-10", returnDate: "2025-01-05" },
  ];

  const fineDetails = [
    { bookNo: "098", bookName: "Artificial Intelligence", borrowDate: "2024-11-20", dueDate: "2024-12-20", returnDate: "2025-01-05", fineAmount: "₹50", fineStatus: "Unpaid" },
    { bookNo: "097", bookName: "Machine Learning", borrowDate: "2024-10-05", dueDate: "2024-11-05", returnDate: "2024-11-15", fineAmount: "₹30", fineStatus: "Paid" },
  ];

  const renderTable = (data, columns) => (
    <table>
      <thead>
        <tr className="table-header">
          {columns.map((col, index) => (
            <th className="table-header" key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>{item[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="library-container">
      <h2>Library Book Details</h2>

      {/* Tab Navigation */}
      <div className="tabs">
        <button onClick={() => setActiveTab("booksInHand")} className={activeTab === "booksInHand" ? "active" : ""}>
          Books in Hand
        </button>
        <button onClick={() => setActiveTab("pastBooks")} className={activeTab === "pastBooks" ? "active" : ""}>
          Past Book Details
        </button>
        <button onClick={() => setActiveTab("fineDetails")} className={activeTab === "fineDetails" ? "active" : ""}>
          Fine Amounts
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "booksInHand" && renderTable(booksInHand, ["bookNo", "bookName", "borrowDate", "dueDate"])}
        {activeTab === "pastBooks" && renderTable(pastBooks, ["bookNo", "bookName", "borrowDate", "returnDate"])}
        {activeTab === "fineDetails" && renderTable(fineDetails, ["bookNo", "bookName", "borrowDate", "dueDate", "returnDate", "fineAmount", "fineStatus"])}
      </div>
    </div>
  );
};

export default StudentLibrary;
