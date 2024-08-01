import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    let api = "https://jsonplaceholder.typicode.com/posts/";
    
    axios
      .get(api)
      .then((res) => {
        console.log(res);
        this.setState({ posts: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { posts } = this.state;
    const firstFivePosts = posts.slice(0, 5);

    return (
      <div className="App">
        <h1 style={{color:"red"}}>First Task</h1>
        {firstFivePosts.length > 0 ? (
          firstFivePosts.map((post) => (
            <div key={post.id}>
              <h2 style={{color:"green"}}>ID: {post.title}</h2>
              <h3 style={{color:"pink"}}>Body: {post.body}</h3>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    );
  }
}

export default App;
