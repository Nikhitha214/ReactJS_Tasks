import React, { Component } from "react"

class App extends Component {
  state = {
    employee: [{
      name: "nikhitha",
      age: 23,
      salary: 30000,
      designation: "Analyst"
    }]
  }

  render() {

    return (

      <div>
        <h2>First Task</h2>
        Employee Details are {" "}
        {this.state.employee.map((ele) => (
          <div>
          <p>Employee Name: {ele.name}</p>
          <p>Employee Age: {ele.age}</p> 
          <p>Employee salary:{ele.salary}</p>
          </div>
      ))}
      </div >
    );
  }
}

export default App;