import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Form } from "semantic-ui-react";

export default function LoginPage({ setLoggedInUser }) {
  const navigate = useNavigate();
  //states used
  const [userArray, setUserArray] = useState([]);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errors, setErrors] = useState([]);

  const [toggleLogin, setToggleLogin] = useState(false);

  const handleToggle = () => {
    setToggleLogin(!toggleLogin);
  };

  const fetchUsers = async () => {
    const req = await fetch("/users");
    const res = await req.json();
    setUserArray(res);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //handles setting who the logged in user is finding if there is a user name
  //and password that match on the user array
  function handleLogin() {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailInput, password: passwordInput }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setLoggedInUser(user));
        navigate("/");
      } else {
        r.json().then((json) => setErrors(json.errors));
      }
    });
  }

  return (
    <div className="form-container">
      <Form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <h1>Login</h1>
        <Form.Input
          className="input-form"
          fluid
          placeholder="Email"
          value={emailInput}
          autoComplete="off"
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <Form.Input
          className="input-form"
          fluid
          type="password"
          placeholder="Password"
          value={passwordInput}
          autoComplete="current-password"
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <div className="login-btns">
          <Form.Button class="form-buttons">
            Login
          </Form.Button>
          <button class="form-buttons"
            onClick={() => navigate("/newuser")}
          >
            Create an Account
          </button>
        </div>
      </Form>
    </div>
  );
}
