import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="frameshift">Your Dashboard</h1>
        <p className="subtitle">Track your progress, review what you've learned, and see what’s next!</p>
      </div>

      <div className="dashboard-content">
        <div className="card">
          <h2>History: Terms Used</h2>
          <ul>
            <li>Hello</li>
            <li>Thank you</li>
            <li>Goodbye</li>
            <li>Yes</li>
            <li>No</li>
          </ul>
        </div>

        <div className="card">
          <h2>History: Terms Learned</h2>
          <ul>
            <li>Please</li>
            <li>Help</li>
            <li>Sorry</li>
            <li>Where</li>
          </ul>
        </div>

        <div className="card next-up">
          <h2>What to Learn Next</h2>
          <p>Personalized suggestions coming soon based on your activity!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
