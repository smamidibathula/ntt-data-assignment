import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Task1 from './task1';
import Task2 from './task2';
import Task3 from './task3';

interface Post {
  body: string;
  id: number;
  reactions: number;
  tags: [];
  title: string;
  userId: number;
}

interface UserData {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
}

const Home: React.FC = () => {
  let component;
  const [task, setTask] = useState('first');
  const [posts, setPosts] = useState<Post[]>([]);
  const [userData, setUserData] = useState<UserData | undefined>();

  const getPosts = async () => {
    const response = await fetch('https://dummyjson.com/posts?limit=10');
    const data = await response.json();
    const posts = data.posts;
    setPosts(posts);
  };

  const getUserData = async () => {
    const response = await fetch('https://dummyjson.com/users/2');
    const data = await response.json();
    setUserData(data);
  };

  useEffect(() => {
    getPosts();
    getUserData();
  }, []);

  switch (task) {
    case 'first':
      component = <Task1 posts={posts} />;
      break;
    case 'second':
      component = <Task2 posts={posts} />;
      break;
    case 'third':
      component = <Task3 userData={userData} />;
      break;
    case 'fourth':
      component = <div> Used Typescript and Styled Components</div>;
      break;
  }

  //Styled Components

  const List = styled.ul`
  list-style-type: none;
  margin: 30px 0;
  padding: 0;
`;

  const ListItem = styled.li`
  margin: 10px 15px 10px 0;
  padding:10px;
  display:inline;
  background-color:#46a2ba;
  border-radius: 10px;
  cursor:pointer;
`;

  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}> NTT DATA Assignment</h1>
        <List>
          <ListItem onClick={() => setTask('first')}>Task 1</ListItem>
          <ListItem onClick={() => setTask('second')}>Task 2</ListItem>
          <ListItem onClick={() => setTask('third')}>Task 3</ListItem>
          <ListItem onClick={() => setTask('fourth')}>Task 4</ListItem>
        </List>
        {component}
      </div>
    </>
  );
};

export default Home;
