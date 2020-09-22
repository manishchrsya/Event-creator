import React, { useState } from "react";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import "./UserLogin.css";

const UserLogin = (props) => {
  const [newUser, setNewUser] = useState(false);

  return (
    <div className="main-container">
      <div className="content-body">
        <div className="web-intro">
          <h1>Welcome</h1>
          <h3>to online event centre</h3>
          <ul>
            <li className="bullet-points">Secure and reliable for users</li>
            <li className="bullet-points">Even your grandma can use it</li>
            <li className="bullet-points">Works 15% faster than others</li>
          </ul>
        </div>

        <div className="user-login">
          {newUser ? (
            <RegistrationPage setNewUser={setNewUser} />
          ) : (
            <LoginPage setNewUser={setNewUser} />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
