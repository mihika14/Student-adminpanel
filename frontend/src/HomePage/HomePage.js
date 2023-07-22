import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiDelete } from "react-icons/fi";
import { BsPencilSquare } from "react-icons/bs";
import "./HomePage.css";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [searchUser, setSearchUser] = useState("");

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

  const sortStudentsByRollNo = () => {
    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => a.rollno - b.rollno);
    setUsers(sortedUsers);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e, userId) => {
    const { name, value } = e.target;
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === userId ? { ...user, [name]: value } : user
      )
    );
  };

  const handleEdit = (userId) => {
    setEditUserId(userId);
  };

  const handleUpdateUser = async (userId) => {
    try {
      const userToUpdate = users.find((user) => user._id === userId);
      const { name, rollno, section } = userToUpdate;
      
      await axios.put(`http://localhost:5000/users/${userId}`, { name, rollno, section });
      setEditUserId(null);
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleSearch = (e) => {
    setSearchUser(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchUser.toLowerCase())
  );

  return (
    <div className="userlist">
      <h1 className="header">Students List</h1>
      <div className="inputbars">
        <button className="addbtn" onClick={sortStudentsByRollNo}>
          Filter by Roll Number
        </button>
      <div className="search">
        <input
          type="text"
          className="input"
          placeholder="Search by Name"
          value={searchUser}
          onChange={handleSearch}
        />
    </div>
    </div>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Section</th>
            <th>Roll Number</th>
            <th>Actions (Edit / Delete)</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user._id}>
              <td data-label="Name">
                {editUserId === user._id ? (
                  <input
                    type="text"
                    className="input"
                    name="name"
                    value={user.name}
                    onChange={(e) => handleInputChange(e, user._id)}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td data-label="Section">
                {editUserId === user._id ? (
                  <input
                    className="input"
                    type="text"
                    name="section"
                    value={user.section}
                    onChange={(e) => handleInputChange(e, user._id)}
                  />
                ) : (
                  user.section
                )}
              </td>
              <td data-label="Rollno">
                {editUserId === user._id ? (
                  <input
                    className="input"
                    type="text"
                    name="rollno"
                    value={user.rollno}
                    onChange={(e) => handleInputChange(e, user._id)}
                  />
                ) : (
                  user.rollno
                )}
              </td>
              <td data-label="Actions">
                {editUserId === user._id ? (
                  <button className="addbtn" onClick={() => handleUpdateUser(user._id)}>
                    Save
                  </button>
                ) : (
                  <>
                    <BsPencilSquare
                      className="editicon"
                      onClick={() => handleEdit(user._id)}
                    ></BsPencilSquare>
                    <FiDelete
                      className="deleteicon"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </FiDelete>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/createstudent">
        <button className="addbtn">Add a Student</button>
      </Link>
    </div>
  );
};

export default HomePage;
