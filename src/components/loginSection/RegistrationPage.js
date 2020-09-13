import Axios from "axios";
import React, { useState } from "react";
// import { registrationApi } from "../../services/loginServices";

const RegistrationPage = (props) => {
  const { setNewUser } = props;

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
    if (errMsg.length === 0) {
      console.log(emailAddress, password, confirmPassword);
      //     registrationApi(emailAddress, password);
      //   .then((result) => {
      //     console.log("zzzzzzzzzzzzzzzzzzzzz", result);
      //   })
      //   .catch((err) => {});

      Axios.post("https://ik-react-task.herokuapp.com/accounts/register/", {
        email: emailAddress,
        password: password,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //   const app = (email) => {
  //     const cc = "aaa";
  //     return "ammmmmmmm";
  //   };

  const handlerPassword = (pass) => {
    setConfirmPassword(pass);
    if (pass === password) {
      setErrMsg("");
    } else {
      setErrMsg("Password not match");
    }
  };

  return (
    <form onSubmit={handleRegistration}>
      <div className="form-group">
        <label>Email address</label>
        <input
          onChange={(e) => {
            setEmailAddress(e.target.value);
          }}
          value={emailAddress}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group">
        <label>Set Password</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          onChange={(e) => handlerPassword(e.target.value)}
          value={confirmPassword}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}

      <button type="submit" className="btn btn-primary">
        Create New Account
      </button>
      <p style={{ cursor: "pointer" }} onClick={() => setNewUser(false)}>
        Already have account?
      </p>
    </form>
  );
};

export default RegistrationPage;
