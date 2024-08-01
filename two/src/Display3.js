import React, { useState } from 'react';

function App() {
  const [text, setText] = useState("Hello, world!");
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true,false);
  const [items, setItems] = useState(["Item 1", "Item 2"]);
  const [user, setUser] = useState({ name: "John", age: 25 });
  const [data, setData] = useState(null);

  return (
    <div>
      <h1>Task3</h1>
      <h2>String</h2>
      <p>{text}</p>
      
      <h2>Number</h2>
      <p>Count: {count}</p>
     
      <h2>Boolean</h2>
      <p> isVisible:{ isVisible ? "true": "false" }</p>

      <h2>Array</h2>
      <ul type="none">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Object</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

      <h2>Null</h2>
      <p>Data: {data !== null ? data : "No data available"}</p>
          </div>
  );
}

export default App;
