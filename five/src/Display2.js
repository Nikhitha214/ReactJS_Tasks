import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const api = "https://jsonplaceholder.typicode.com/posts/1";
    
    axios
      .get(api)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, []);

  if (error) {
    return <p>There was an error fetching the post.</p>;
  }

  return (
    <div className="task2">
        <h1 style={{color:"blue"}}>Task 2</h1>
      {post ? (
        <div>
            <h2>ID: {post.id}</h2>
          <h2>Title: {post.title}</h2>
          <h2>Body: {post.body}</h2>
          
        </div>
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
};

export default App;
