import React from "react";
import "./App.css";
import * as LibComponent from "./component";
// import Mock from "./mook/Mook.js";
function App() {
  // console.log(Mock);
  return (
    <div className="CV">
      <LibComponent.leftInfo />
      <LibComponent.rightInfo />
    </div>
  );
}

export default App;
