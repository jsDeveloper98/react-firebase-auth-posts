import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostDetails = ({ location }) => {
  const { selectedPost } = location.state;

  return (
    <div className="post-item-details">
      <Jumbotron className="post-item-jumbotron">
        <h1 className="post-detail-title">{selectedPost.title}</h1>
        <p className="post-detail-description">{selectedPost.description}</p>
        <Link to="/posts">
          <Button className="close-post-btn" variant="secondary">
            Close Post
          </Button>
        </Link>
      </Jumbotron>
    </div>
  );
};

export default PostDetails;
