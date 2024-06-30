import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/NavBar/NavBar.js";
import Dashboard from "./Components/DashBoard/DashBoard.js";

function App() {
  // Initial static data
  const initialData = [
    { text: "First card text" },
    { text: "Second card text" },
    { text: "Third card text" },
    // More items can be added here
  ];

  // State for the backend data
  const [backendData, setBackendData] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        if (data.users) {
          // Assuming 'users' is an array of strings for simplicity
          setBackendData(data.users.map((user) => ({ text: user })));
        }
      });
  }, []);

  return (
    <>
      <Navbar />
      <Dashboard items={backendData.length > 0 ? backendData : initialData} />
      {/* Conditional rendering based on the fetched data */}
    </>
  );
}

export default App;
