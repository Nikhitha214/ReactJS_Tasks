import React, { useState } from "react";
const App = () => {
  const [student, setStudent] = useState([
    {
      firstName: "Nikhitha",
      lastName: "Shashti",
      id: 1,
      branch: "IT",
      section: "A"
    },
    {
      firstName: "Harshitha",
      lastName: "Vinnakota",
      id: 2,
      branch: "IT",
      section: "A"
    },
    {
      firstName: "Divya",
      lastName: "venkat",
      id: 3,
      branch: "IT",
      section: "A"
    }
  ]);

  const handleUpdate = () => {
    const update = [...student]
    console.log(update);
    update[1].firstName = "Harshi"
    update[1].id = "4"
    setStudent(update);
 


  };
  return (
    <div className="App">
      <h1>Task1</h1>
      <h2>Array of objects</h2>
      {student.map((ele) => {
        return (
          <div>
            <p>firstName : {ele.firstName}
            </p>
            <p>id : {ele.id}
            </p>
        </div>
        )
      })
      }
      <button onClick={handleUpdate}>Update</button>
    </div>);
}

export default App;
