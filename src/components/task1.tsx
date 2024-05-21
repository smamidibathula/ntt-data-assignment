import React from 'react';

interface Post {
  body: string;
  id: number;
  reactions: number;
  tags: [];
  title: string;
  userId: number;
}

interface PostsResponse {
  posts: Post[];
}

const Task1: React.FC<PostsResponse> = ({ posts }) => {
  return (
    <div>
      <h3>Fetch first 10 posts</h3>
      {posts?.map((post) => (
        <div key={post.id} style={{ textAlign: 'left' }}>
          <h4>Post: {post.id}</h4>
          <h4>Title: {post.title}</h4>
          <div>{post.body}</div>
        </div>
      ))}
    </div>
  );
};

export default Task1;
