import React from "react";
import FormWrapper from "./FormWrapper";

const Address = ({ state, city, street, update }) => {
  return (
    <FormWrapper title='Address'>
      <label>State</label>
      <input
        type="text"
        placeholder="Enter state of residence"
        autoFocus
        required
        value={state}
        onChange={(e) => update({state: e.target.value})}
      />
      <label>City</label>
      <input 
      type="text" 
      placeholder="Enter city of residence" 
      required
      value={city}
      onChange={(e) => update({city: e.target.value})} />
      <label>Street</label>
      <input type="text" placeholder="Enter street name" required value={street} onChange={(e) => update({street: e.target.value})} />
    </FormWrapper>
  );
};

export default Address;
