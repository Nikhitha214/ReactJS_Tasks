import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/movies/classic")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleShowModal = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const postList = posts.length ? (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id} onClick={() => handleShowModal(post)} style={{ cursor: "pointer", marginBottom: "10px" }}>
            <h3>Title: {post.title}</h3>
          </div>
        );
      })}
    </div>
  ) : (
    <p>No posts yet!</p>
  );

  return (
    <div>
      {postList}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMovie && (
            <div>
              <h3>ID: {selectedMovie.id}</h3>
              <h3>Title: {selectedMovie.title}</h3>
              <img src={selectedMovie.posterURL} alt={selectedMovie.title} style={{ width: "100%" }} />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
