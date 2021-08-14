import axios from "axios";
import React, { useState, useEffect } from "react";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState({});
  const fetchComments = async (id) => {
    const res = await axios.get(`http://localhost:4001/posts/${id}/comments`);
    setComments(res.data);
  };

  useEffect(() => {
    fetchComments(postId);
  }, []);

  const renderedComments = Object.values(comments).map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  console.log(comments);

  return (
    <div>
      <i>{Object.values(comments).length} comments</i>
      <ul>{renderedComments}</ul>
    </div>
  );
};

export default CommentList;
