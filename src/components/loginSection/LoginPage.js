import Axios from "axios";
import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = (props) => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const { setLoginStatus } = props;

  const handleLogin = (event) => {
    event.preventDefault();

    Axios.post("https://ik-react-task.herokuapp.com/accounts/login/", {
      email: emailAddress,
      password: password,
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setLoginStatus(response.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { setNewUser } = props;
  return (
    <form onSubmit={handleLogin}>
      <div className="form-group">
        <label>Email address</label>
        <input
          onChange={(e) => setEmailAddress(e.target.value)}
          value={emailAddress}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button
        style={{ marginTop: 7 }}
        type="submit"
        className="btn btn-primary"
      >
        Log In
      </button>
      <p
        style={{
          cursor: "pointer",
          fontWeight: "900",
          color: "red",
          marginTop: 12,
        }}
        onClick={() => setNewUser(true)}
      >
        New User?
      </p>
    </form>
  );
};

export default LoginPage;
