import React, { Component } from "react";
import "./CreateStudent.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rollno: "",
      section: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSortChange(e) {
    this.setState({ setOrder: e.target.value }, () => {
      this.sortTasksByPriority();
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, rollno, section } = this.state;
    console.log(name, rollno, section);
    fetch("http://localhost:5000/createdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       name,
       rollno,
       section
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "task created");
        if (data.status === "ok") {
          Swal.fire({
            icon: "success",
            text: "You have succesfully added a Student",
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
            <h1 className="header2">Add Student Details</h1>
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  onChange={(e) => this.setState({ name: e.target.value })}
                />

                <label className="label">Roll Number</label>
                <input
                  type="number"
                  className="input"
                  placeholder="Roll Number"
                  onChange={(e) => this.setState({ rollno: e.target.value })}
                />

                <label className="label">Section</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Section (A to D)"
                  pattern="[A-Da-d]"
                  onChange={(e) =>
                    this.setState({ section: e.target.value.toUpperCase() })
                  }
                  required
                />
              </div>

              <div className="buttons-task">
                <button className="form-submit-btn">Add Student details</button>
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
