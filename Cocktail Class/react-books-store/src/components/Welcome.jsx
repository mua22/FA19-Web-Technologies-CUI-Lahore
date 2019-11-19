import React from "react";

const Welcome = props => {
  console.log(props);
  let h1Styles = { color: "white", backgroundColor: "black" };
  return (
    <div className="welcome">
      <h1 style={h1Styles}>Welcome: {props.name}</h1>
      {props.showHobby && <p>Your hobby is {props.hobby}</p>}
    </div>
  );
};

export default Welcome;
