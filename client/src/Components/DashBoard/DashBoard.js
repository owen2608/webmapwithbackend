import React from "react";
import Card from "../Cards/Card"; // Import the Card component
import "./DashBoard.css"; // Import the CSS file

function Dashboard({ items }) {
  return (
    <div className="dashboard-container">
      {items.map((item, index) => (
        <div key={index} className="card-container">
          <Card text={item.text} />
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
