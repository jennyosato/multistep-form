import React from "react";
import FormWrapper from "./FormWrapper";

const UserformInfo = ({email, password, update}) => {
  return (
    <FormWrapper title='Sign up data'>
      <label>Email</label>
      <input
        type="email"
        placeholder="Enter email address"
        autoFocus
        value={email}
        required
        onChange={(e) => update({email: e.target.value})}
      />
      <label>Password</label>
      <input 
      type="password"
      placeholder="choose a password" 
      required
      value={password}
      onChange={(e) => update({password: e.target.value})} />
    </FormWrapper>
  );
};

export default UserformInfo;
