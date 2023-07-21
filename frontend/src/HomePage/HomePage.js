import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="userlist">
      <h1 className="header">Tasks List</h1>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td data-label="day">{user.day}</td>
              <td data-label="description">{user.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/createtask">
        <button className="addbtn">Create Task</button>
      </Link>
    </div>
  );
};

export default HomePage;