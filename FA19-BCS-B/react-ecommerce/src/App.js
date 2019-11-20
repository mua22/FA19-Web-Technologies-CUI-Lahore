import React from "react";
import "./App.css";

import SortExample from "./components/SorExample";
import Recipies from "./components/Recipies";

function App() {
  return (
    <div className="container">
      <Recipies />
      {/* <SortExample enableSortButton={false} /> */}
      {/* <SortExample enableSortButton={false} /> */}
      {/* <Welcome name="Usman" age={50} />
      <Welcome name="Ali" age={10} />
      <Welcome name="Hareem" age={2} /> */}
    </div>
  );
}

export default App;
