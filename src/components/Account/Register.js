import React, { useContext } from "react";
import { useInput } from "../../hooks/useInput";
import { FirebaseContext } from "../../services";

const Register = props => {
  const fbContext = useContext(FirebaseContext);
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");

  const handleSubmit = evt => {
    evt.preventDefault();
    fbContext
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log(`Signing up: ${authUser.user.email}`);
      })
      .then(() => {
        resetEmail();
        resetPassword();
        props.history.push("/dashboard");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Register</legend>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" {...bindEmail} required />
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type="password"
            {...bindPassword}
            minLength="8"
            maxLength="12"
            required
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
          />
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
      <div>
        <h3>Password Requirements</h3>
        <p>At least 1 Uppercase</p>
        <p>At least 1 Lowercase,</p>
        <p>At least 1 Number,</p>
        <p>At least 1 Symbol: !@#$%^&*_=+-,</p>
        <p>Min 8 chars and Max 12 chars</p>
      </div>
    </>
  );
};

export { Register };