import React from "react";

const Post = ({ id, userId, title, body }) => {
   return (
      <div className="post">
         <p className="post__id">Post id : {id}</p>
         <p className="post__userid">User id : {userId}</p>
         <p className="post__title">Title : {title}</p>
         <p className="post__body">Body : {body}</p>
      </div>
   );
};

export default Post;
