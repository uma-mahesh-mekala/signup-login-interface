import React from "react";
import Input from "./Input";
import Button from "./Button";

function SignUp() {
  return (
    <div>
      <form action="/">
        <Input
          type="text"
          placeholder="Username"
          name="Username"
          id="Username"
          required={true}
        />
        <Input
          type="password"
          placeholder="Password"
          name="Password"
          id="Password"
          required={true}
        />
        <Input type="password" placeholder="Confirm Password" required={true} />
        <Button type="submit" label="SignUp" />
      </form>
    </div>
  );
}

export default SignUp;
