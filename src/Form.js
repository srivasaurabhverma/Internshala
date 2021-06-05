import React from "react";
import "./form.css";
function Form() {
  return (
    <>
      <div className="Form">
        <h1 className="login_title">Login</h1>
        <div className="Email">
          <h4 className="email">Email</h4>
          <input type="text" name="" id="email_input" placeholder="Email" />
        </div>

        <div className="Password">
          <h4 className="password">Password</h4>
          <input
            type="password"
            name=""
            id="input_pass"
            placeholder="Password"
          />
        </div>
        <div className="fogot">
          <h2 id="fogot_password">Forgot Password</h2>
        </div>

        <div className="btn">
          <button id="Login_btn">Login</button>
        </div>

        <div className="last">
          <h2 className="last">
            Don’t have an account yet? <b>Signup</b>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Form;
