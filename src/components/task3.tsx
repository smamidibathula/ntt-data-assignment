import React from 'react';

interface UserData {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
}

interface UserResponse {
  userData: UserData;
}

const Task3: React.FC<UserResponse> = ({ userData }) => {
  return (
    <div>
      <h3>Display First and Last Name</h3>
      <p>First Name: {userData.firstName}</p>
      <p>Last Name: {userData.lastName}</p>
    </div>
  );
};

export default Task3;
