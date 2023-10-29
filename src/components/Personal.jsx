import React from 'react'
import FormWrapper from './FormWrapper'

const Personal = ({full_name, gender, state_of_origin, date_of_birth, update}) => {
  return (
    <FormWrapper title='Personal Data'>
        <label>Full Name</label>
        <input 
        type='text' 
        placeholder='Enter full name'
         required autoFocus value={full_name} 
         onChange={(e) => update({full_name: e.target.value})}/>
        <label>State of Origin</label>
        <input type='text' placeholder='Enter state of Origin' required value={state_of_origin}
         onChange={(e) => update({state_of_origin: e.target.value})}/>
        <label>Gender</label>
        <input type='text' placeholder='Enter Gender' required value={gender} onChange={(e) => update({gender: e.target.value})}/>
        <label>Date of Birth</label>
        <input type='date' placeholder='choose data of birth' value={date_of_birth} required onChange={(e) => update({date_of_birth: e.target.value})}/>
    </FormWrapper>
  )
}

export default Personal