import React from "react";
import Hobby from "./Hobby";

const Welcome = props => {
  console.log(props);
  let h1Style = {
    border: "2px dashed blue",
    color: "Orange"
  };
  return (
    <div className="Welcome">
      <h1>Welcome {props.name}</h1>
      <Hobby hobby={props.hobby} />
      <a href="" className="btn btn-success">
        Hide Hobby
      </a>
    </div>
  );
};

export default Welcome;
