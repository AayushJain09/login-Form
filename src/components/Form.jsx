import React from "react";

function Form(props) {
  return (
    <form className="form">
      {!props.isRegistered ? (<h1>Join Us!</h1>) : (<h1>Login!</h1>)}
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
