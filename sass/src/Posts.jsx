import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
   return (
      <div className="posts">
         {posts.map((post, index) => (
            <Post
               key={index}
               id={post.id}
               userId={post.userId}
               title={post.title}
               body={post.body}
            />
         ))}
      </div>
   );
};

export default Posts;
