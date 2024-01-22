import React from "react";
import SignUp from "./SignUp";
import LoginIn from "./LogIn";
import Button from "./Button";

function App() {
  let [isSignUp, setSignUp] = React.useState(true);
  let [clickedButton, setClickedButton] = React.useState("Signup");

  function handleClick(buttonLabel) {
    setClickedButton(buttonLabel);
    setSignUp(buttonLabel === "Signup");
  }
  return (
    <div className="container">
      <div className="head">
        <Button
          label="SignUp"
          onClick={() => {
            handleClick("Signup");
          }}
          clicked={clickedButton === "Signup"}
        />
        <Button
          label="LogIn"
          onClick={() => {
            handleClick("Login");
          }}
          clicked={clickedButton === "Login"}
        />
      </div>
      {isSignUp ? <SignUp /> : <LoginIn />}
    </div>
  );
}

export default App;
