import React from "react";
import AddDataQuery from "../AddDataQuery/AddDataQuery";
import RemoveData from "../RemoveData/RemoveData";
import "./SideBar.css";

function Sidebar({ users, onAdd, onDelete }) {
  return (
    <div className="sidebar">
      <h2>Manage Users</h2>
      <AddDataQuery onAdd={onAdd} />
      <RemoveData users={users} onDelete={onDelete} />
    </div>
  );
}

export default Sidebar;
