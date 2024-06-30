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
  const [newUser, setNewUser] = useState(""); // State to hold new user input

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

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: newUser }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.users) {
          setBackendData(data.users.map((user) => ({ text: user })));
          setNewUser(""); // Clear the input field
        }
      });
  };

  // Function to handle user deletion
  const handleDelete = (userToDelete) => {
    fetch("/api", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userToDelete }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.users) {
          setBackendData(data.users.map((user) => ({ text: user })));
        }
      });
  };

  return (
    <>
      <Navbar />
      <Dashboard items={backendData.length > 0 ? backendData : initialData} />
      {/* Form to add a new user */}
      <div className="container mt-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="newUser">Add New User</label>
            <input
              type="text"
              className="form-control"
              id="newUser"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Add User
          </button>
        </form>
        {/* List of users with delete buttons */}
        <ul className="list-group mt-4">
          {backendData.map((user, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {user.text}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(user.text)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
