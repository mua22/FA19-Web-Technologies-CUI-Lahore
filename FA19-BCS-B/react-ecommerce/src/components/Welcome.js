import React from "react";

const Welcome = ({ name, age }) => {
  return (
    <div>
      Welcome {name}
      <p>You are {age} years old</p>
    </div>
  );
};

export default Welcome;
