import Axios from "axios";
import React, { useState } from "react";

const LoginPage = (props) => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyNTksInVzZXJuYW1lIjoiS21hbmlzaEBnbWFpbC5jb20iLCJleHAiOjE2MDA1Mzg2NTIsImVtYWlsIjoiS21hbmlzaEBnbWFpbC5jb20ifQ.ph1GxDkOD7jov2C-dCgafRAsYcfwdErDRu-ibnb_QxA";
  const handleLogin = (event) => {
    event.preventDefault();
    console.log(emailAddress, password);

    Axios.post("https://ik-react-task.herokuapp.com/accounts/login/", {
      email: emailAddress,
      password: password,
    })
      .then((response) => {
        console.log(response);
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
      <button type="submit" className="btn btn-primary">
        Log In
      </button>
      <p style={{ cursor: "pointer" }} onClick={() => setNewUser(true)}>
        New User?
      </p>
    </form>
  );
};

export default LoginPage;
