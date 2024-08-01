import React, { useState } from "react";
import './App.css';

const LoginForm = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [formValid, setFormValid] = useState(false);

  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const validateEmail = (email) => {
    let valid = true;
    let emailError = "";
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
      valid = false;
      emailError = "This is invalid!";
    }

    setError({ emailError, passwordError: error.passwordError });
    setFormValid(valid);

    return valid;
  };

  const validatePassword = (password) => {
    let valid = true;
    let passwordError = "";

    if (password.trim() === "") {
      valid = false;
      passwordError = "This is required!";
    } else if (password.trim().length <= 5) {
      valid = false;
      passwordError = "Enter a password of at least 6 characters";
    }

    setError({ emailError: error.emailError, passwordError });
    setFormValid(valid);

    return valid;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormState({ ...formState, [id]: value });

    switch (id) {
      case "email":
        validateEmail(value);
        break;
      case "password":
        validatePassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formState;

    if (validateEmail(email) && validatePassword(password)) {
      setSubmittedData({ email, password });
      setFormState({
        email: "",
        password: "",
      });
      setFormValid(false);
      setError({
        emailError: "",
        passwordError: "",
      });
      alert("Form is submitted successfully");
    }
  };

  const { email, password } = formState;

  return (
    <div>
      <div className="login">
        <h1>LOGIN FORM</h1>
        <form onSubmit={handleSubmit}>
          <label>Enter Email: </label>
          <input
            type="text"
            placeholder="Please enter email"
            onChange={handleChange}
            id="email"
            value={email}
          />
          <p style={{ color: "red" }}>{error.emailError}</p>

          <label>Password: </label>
          <input
            type="password"
            placeholder="Please enter password"
            onChange={handleChange}
            id="password"
            value={password}
          />
          <p style={{ color: "red" }}>{error.passwordError}</p>

          <button className="submit" type="submit">Submit</button>
        </form>
        {submittedData && (
          <div className="submitted-data">
            <h2>Submitted Data</h2>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Password:</strong> {submittedData.password}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
