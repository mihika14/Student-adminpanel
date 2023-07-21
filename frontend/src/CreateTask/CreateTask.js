import React, { Component } from "react";
import "./CreateTask.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "",
      description: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { day, description } = this.state;
    console.log(day, description);

    fetch("http://localhost:5000/createdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day,
        description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "task created");
        if (data.status === "ok") {
          Swal.fire({
            icon: "success",
            text: "You have succesfully created a task",
          });
        } else {
          Swal.fire({
            icon: "error",
            text: "Enter Details",
          });
        }
      });
  }

  render() {
    return (
      <>
        <div className="createuserform">
          <div className="form-container">
            <h1 className="header">Add Task</h1>
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="label">Day</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Day"
                  onChange={(e) => this.setState({ day: e.target.value })}
                />

                <label className="label">Task Description</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Task"
                  onChange={(e) =>
                    this.setState({ description: e.target.value })
                  }
                />
              </div>

              <div className="buttons-task">
                <button className="form-submit-btn">Create Task</button>
                <Link to="/homepage">
                  <button className="form-submit-btn">Go to homepage</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
