import React ,{useState}from "react";


const App = () => {
    const [flowers, setFlowers] = useState({
            name : "Rose",
            color : "Red",
            parts : "leaves"
        
          });

            //  object properties update 
const handleUpdate = () => {
setFlowers({...flowers,
  parts:"stem",
  name: "Red Rose"
});
}
return (
    <div className="App">
      <h1>Task2</h1>
      <h2>Object properties update</h2>
      <h2>Name: {flowers.name}</h2>
      <h2>Part: {flowers.parts}</h2>
      <button onClick={handleUpdate}>Update</button>
    </div>
)};

export default App;
