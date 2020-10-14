import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const navigateTo = () => history.push('/homePageAdmin');

  function validateForm() {
    if(username !== "admin") return false;
    if(password !== "admin") return false;
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <p class="title">Login for Admin Privileges</p>
        <FormGroup className="username" controlId="email" bsSize="large">
          <ControlLabel className="usernameLabel">Username:</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="username" controlId="password" bsSize="large">
          <ControlLabel className="usernameLabel">Password: </ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} onClick={navigateTo} type="submit" className="login-button"> Login </Button>
      </form>
    </div>
  );
}