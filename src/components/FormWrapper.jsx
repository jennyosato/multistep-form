import React from 'react'

const FormWrapper = ({title, children}) => {
  return (
    <div>
        <h2 style={{fontSize: "24px", fontWeight: "bold", color: "black"}}>{title}</h2>
        <div style={{display:"grid", gridTemplateColumns: "auto minmax(auto, 400px)", gap: "1rem 0.5rem"}}>{children}</div>
    </div>
  )
}

export default FormWrapper