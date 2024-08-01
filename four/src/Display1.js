import React, { Component } from "react";
import './App.css';


class Form extends Component {
  state = {
    name: "",
    age:"",
    dob: "",
    email: "",
    contact: "",
    password:"",
    formValid: false,
    error: {
      nameError: "",
      ageError:"",
      dobError: "",
      emailError: "",
      contactError: "",
      passwordError: "",
    },
  };

  validateName = (name) => {
    let { error, formValid } = this.state;
    let nameError = error.nameError;
    let valid = formValid;
    let regexName = /^[a-zA-Z\s]+$/;

    if (name.trim() === "") {
      valid = false;
      nameError = "This is required!";
    } else if (name.trim().length <= 2) {
      valid = false;
      nameError = "This is invalid!";
    } else if (!regexName.test(name)) {
      valid = false;
      nameError = "Name should contain only alphabets";
    } else {
      valid = true;
      nameError = "";
    }

    this.setState({ name, formValid: valid, error: { ...error, nameError } });

    return valid;
  };
validateAge = (age) => {
  let {error,formValid} =this.state;
  let ageError = error.ageError;
  let valid= formValid;
  if(age.length >=4){
    valid=false;
    ageError= "Enter correct age";
  }
  else if(age === ""){
    valid=false;
    ageError ="this is required!";
  }
  else{
    valid=true;
    ageError ="";
  }
  this.setState({ age, formValid: valid, error: { ...error, ageError } });

    return valid;
  };

  validateContact = (contact) => {
    let { error, formValid } = this.state;
    let contactError = error.contactError;
    let valid = formValid;
    let regexContact = /^\d{10}$/;

    if (contact.trim() === "") {
      valid = false;
      contactError = "Contact number is required.";
    } else if (!regexContact.test(contact)) {
      valid = false;
      contactError = "Contact number should be 10 digits.";
    } else {
      valid = true;
      contactError = "";
    }

    this.setState({ contact, formValid: valid, error: { ...error, contactError } });

    return valid;
  };

  validateDob = (dob) => {
    let { error, formValid } = this.state;
    let dobError = error.dobError;
    let valid = formValid;
    let regexDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;

    if (!regexDate.test(dob)) {
      valid = false;
      dobError = "This is invalid";
    } else {
      const [day, month, year] = dob.split("/").map(Number);
      const inputDate = new Date(year, month - 1, day);

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (inputDate > today) {
        valid = false;
        dobError = "Date should not be greater than today";
      } else {
        valid = true;
        dobError = "";
      }
    }

    this.setState({ dob, formValid: valid, error: { ...error, dobError } });

    return valid;
  };

  validateEmail = (email) => {
    let { error, formValid } = this.state;
    let emailError = error.emailError;
    let valid = formValid;
    let regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regexEmail.test(email)) {
      valid = false;
      emailError = "This is invalid!";
    } else {
      valid = true;
      emailError = "";
    }

    this.setState({ email, formValid: valid, error: { ...error, emailError } });

    return valid;
  };

  validatePassword = (password) => {
    let { error, formValid } = this.state;
    let passwordError = error.passwordError;
    let valid = formValid;

    if (password.trim() === "") {
      valid = false;
      passwordError = "This is required!";
    } else if (password.trim().length <= 5) {
      valid = false;
      passwordError = "enter pasword atleast 6 letters";
    } else {
      valid = true;
      passwordError = "";
    }

    this.setState({ password, formValid: valid, error: { ...error, passwordError } });

    return valid;
  };

    handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.id);

    if (e.target.id === "name") {
      this.validateName(e.target.value);
    }if (e.target.id === "age") {
     this.validateAge(e.target.value);
    }
    if (e.target.id === "dob") {
      this.validateDob(e.target.value);
    }
    if (e.target.id === "email") {
      this.validateEmail(e.target.value);
    }
    if (e.target.id === "contact") {
        this.validateContact(e.target.value);
      }
      if(e.target.id === "password") {
        this.validatePassword(e.target.value);
      }
      
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const { name,age, dob, email, contact, password } = this.state;

    if (
      this.validateName(name) &&
      this.validateAge(age) &&
      this.validateDob(dob) &&
      this.validateEmail(email) &&
      this.validateContact(contact) &&
      this.validatePassword(password)
    )
   {
      this.setState({
        name: "",
        age:"",
        dob: "",
        email: "",
        contact: "",
        password: "",
        formValid: false,
        error: {
          nameError: "",
          ageError:"",
          dobError: "",
          emailError: "",
          contactError: "",
          passwordError: "",
        },
      });
      alert("Form is submitted successfully");
      document.write("Form is submitted successfully")
    }
  };

  render() {
    const { name,age ,dob, email, contact, password, error } = this.state;

    return (
      <div>
        <div className="signup">
        <h1>SINGUP FORM</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Name: </label>
          <input
            type="text"
            placeholder="Please enter name"
            onChange={this.handleChange}
            id="name"
            value={name}
          />
          <p style={{ color: "red" }}>{error.nameError}</p>

          <label>Enter Age: </label>
          <input
            type="text"
            placeholder="Please enter age"
            onChange={this.handleChange}
            id="age"
            value={age}
          />
          <p style={{ color: "red" }}>{error.ageError}</p>

          <label>Enter DOB: </label>
          <input
            type="text"
            placeholder="dd/mm/yyyy"
            onChange={this.handleChange}
            id="dob"
            value={dob}
          />
          <p style={{ color: "red" }}>{error.dobError}</p>

          <label>Enter Email: </label>
          <input
            type="text"
            placeholder="Please enter email"
            onChange={this.handleChange}
            id="email"
            value={email}
          />
          <p style={{ color: "red" }}>{error.emailError}</p>

          <label>Enter Contact: </label>
          <input
            type="text"
            placeholder="Please enter contact"
            onChange={this.handleChange}
            id="contact"
            value={contact}
          />
          <p style={{ color: "red" }}>{error.contactError}</p>

          <label>Password: </label>
          <input type="password"
            placeholder="Please enter password"
            onChange={this.handleChange}
            id="password"
            value={password}
          />
          <p style={{ color: "red" }}>{error.passwordError}</p>

          <button class="submit" type="submit">Submit</button>
        </form>
        </div>
      </div>
    );
  }
}

export default Form;
