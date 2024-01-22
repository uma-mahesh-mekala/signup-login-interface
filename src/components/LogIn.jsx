import React from "react";
import Input from "./Input";
import Button from "./Button";

function LogIn() {
  return (
    <div>
      <form action="/">
        <Input
          type="text"
          placeholder="Username"
          name="Username"
          id="Username"
          required="true"
        />
        <Input
          type="password"
          placeholder="Password"
          name="Password"
          id="Password"
          required="true"
        />
        <Button type="submit" label="Login" />
      </form>
    </div>
  );
}

export default LogIn;
