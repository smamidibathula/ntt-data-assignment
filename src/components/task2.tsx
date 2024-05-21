import React from 'react';

import styled from 'styled-components';

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

const Task2: React.FC<PostsResponse> = ({ posts }) => {
  let tagList: [] = [];

  //Styled Components
  const PostContainer = styled.div`
    background-color: #f9e8f2;
    padding: 10px 20px;
    margin: 10px 0;
  `;

  const PostDetails = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  li {
    color: #5b9faf;
    padding: 10px;
  }
  &:last-child {
    margin-left: auto; 
  }
`;

  return (
    <div>
      <h3>Fetch first 4 posts in a row</h3>
      {posts.slice(0, 4)?.map((post) => {
        {
          post.tags?.map((tag) => {
            tagList.push(tag);
          });
        }
        return (
          <PostContainer key={post.id} style={{ textAlign: 'left' }}>
            <h4>Title: {post.title}</h4>
            <div>{post.body}</div>

            <PostDetails>
              <li> Reactions: {post.reactions}</li>
              <li>Tags: {tagList.join(', ')}</li>
              <li>User ID: {post.userId}</li>
            </PostDetails>
          </PostContainer>
        );
      })}
    </div>
  );
};

export default Task2;
