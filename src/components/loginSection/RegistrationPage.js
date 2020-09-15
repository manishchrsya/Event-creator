import Axios from "axios";
import React, { useState } from "react";
// import { registrationApi } from "../../services/loginServices";

const RegistrationPage = (props) => {
  const { setNewUser } = props;

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // Post Api called to register new user....

  const handleRegistration = (event) => {
    event.preventDefault();
    if (errMsg.length === 0) {
      Axios.post("https://ik-react-task.herokuapp.com/accounts/register/", {
        email: emailAddress,
        password: password,
      })
        .then((response) => {
          setNewUser(false);
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //handling the condition to compare the set password and confirm password...........

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
      <p
        style={{
          cursor: "pointer",
          fontWeight: "900",
          color: "red",
          marginTop: 12,
        }}
        onClick={() => setNewUser(false)}
      >
        Already have account?
      </p>
    </form>
  );
};

export default RegistrationPage;
