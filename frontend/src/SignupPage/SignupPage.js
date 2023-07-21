import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css";

export default class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this); // ensure that the this context within the handleSubmit function refers to the component instance.
  }

  // function is responsible for handling form submission and making a POST request to the server.
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/createuser", {
      method: "POST",
      crossDomain: true, //to ensure that the server allows cross-origin requests.
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "https://localhost:3000",
      },
      body: JSON.stringify({
        email,
        password
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  }
  render() {
    return (
      <>
        <div class="formpage">
          <div className='form'>
          <form class="form-container" onSubmit={this.handleSubmit}>
            <span class="title">Sign up</span>
            <div class="form-group">
              <input
                type="email"
                class="input"
                placeholder="Email"
                onChange={(e) => this.setState({ email: e.target.value })} // updates the email with the new value entered by the user.
              />

              <input
                type="password"
                class="input"
                placeholder="Password"
                autoComplete="on"
                onChange={(e) => this.setState({ password: e.target.value })} // updates the password with the new value entered by the user.
              />
            </div>

            <button>Sign up</button>
            <div class="form-section">
            <p>
              Already Have an account? <Link to="/loginpage">Log in</Link>
            </p>
          </div>
          </form>
        
          </div>
        </div>
      </>
    );
  }
}
