import "./App.css";
import React, { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("aquamarine");

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
    console.log(color + " button pressed");
  };
  

  const appStyle = {
    backgroundColor: backgroundColor,
    transition: "background-color 0.5s", // Optional smooth transition
  };

  return (
    <div className="outerdiv" style={appStyle}>
      <div className="button1">
        <button onClick={toggleVisibility}>Pick a Color</button>
      </div>

      {isVisible && (
        <div className="arrayofcolors">
          <button
            onClick={() => changeBackgroundColor("blue")}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => changeBackgroundColor("red")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => changeBackgroundColor("yellow")}
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => changeBackgroundColor("green")}
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => changeBackgroundColor("pink")}
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
