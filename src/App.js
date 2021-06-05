import React from "react";

import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <div className="title"></div>
      <div className="yellow"></div>
      <div className="computer"></div>
      <div className="gray1"></div>
      <div className="gray2"></div>
      <Form />
      <footer>
        <div className="terms">
          <h2>Terms of Service</h2>
        </div>

        <div className="services">
          <h2>Privacy Policy</h2>
        </div>
      </footer>
    </div>
  );
}

export default App;
