import { useState } from 'react'
import Address from './components/Address'
import UserformInfo from './components/UserformInfo'
import Personal from './components/Personal'
import './App.css'

function App() {
  const Initial_data = {
    full_name: '',
    state_of_origin: '',
    date_of_birth: '',
    gender: '',
    state: '',
    city: '',
    street: '',
    email: '',
    password: ''
  }
 
  const [data, setData] = useState(Initial_data)
  const [arrIndex, setArrIndex] = useState(0)
  const updateFields = (fields) => {
    setData(prev => {
      return {...prev, ...fields}
    })
  }
  const arrData = [<Address {...data} update={updateFields} />, <Personal {...data} update={updateFields} />, <UserformInfo {...data} update={updateFields}/>]
  const isLastElement = arrIndex >= arrData.length - 1
  const isFirstElement = arrIndex == 0
 
  
  
  const back = () => {
    if(arrIndex !== 0) return setArrIndex(prev => prev - 1)
    return arrIndex
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    !isLastElement ? next() : console.log(data)
  }
  const next = () => { 
    if(arrIndex >= arrData.length - 1) return arrIndex 
    return setArrIndex(prev => prev + 1)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        {arrIndex + 1}/{arrData.length}
      </div>
      {arrData[arrIndex]}
      <div>
        {!isFirstElement && <button type='button' onClick={back}>Back</button>}
        <button>{isLastElement? "Finish": "Next"}</button>
      </div>
    </form>  
    </>
  )
}

export default App
