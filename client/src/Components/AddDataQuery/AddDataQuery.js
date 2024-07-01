import React, { useState } from "react";

function AddDataQuery({ onAdd }) {
  const [newUser, setNewUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newUser);
    setNewUser(""); // Clear the input field
  };

  return (
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
    </div>
  );
}

export default AddDataQuery;
