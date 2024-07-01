import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/NavBar/NavBar.js";
import Dashboard from "./Components/DashBoard/DashBoard.js";
import Sidebar from "./Components/SideBar/Sidebar.js";
import handleAddUser from "./handleAddUser.js";
import handleDeleteUser from "./handleRemoveUser.js";
import useFetchUsers from "./handleUseEffect.js";

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
  useFetchUsers(setBackendData);

  return (
    <>
      <Navbar />
      <div className="app-container">
        <Sidebar
          users={backendData}
          onAdd={(newUser) => handleAddUser(newUser, setBackendData)}
          onDelete={(userToDelete) =>
            handleDeleteUser(userToDelete, setBackendData)
          }
        />
        <Dashboard items={backendData.length > 0 ? backendData : initialData} />
      </div>
    </>
  );
}

export default App;
