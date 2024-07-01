import React from "react";

function RemoveData({ users, onDelete }) {
  return (
    <ul className="list-group mt-4">
      {users.map((user, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {user.text}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(user.text)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default RemoveData;
