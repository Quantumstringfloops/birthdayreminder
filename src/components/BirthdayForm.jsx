import React from 'react'
import { useState } from 'react'

const BirthdayForm = ({setBirthday}) => {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  function handleSubmit(event){
    event.preventDefault();
    const newBirthday = {
      id: Date.now(),
      name: name,
      date: date
    }
    setBirthday(prev => [...prev, newBirthday])
    setName(" ");
    setDate(" ");
  }
 
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name: ' className=''
        onChange={(e)=> setName(e.target.value)}/>
        <input type="date" placeholder='date: '
        onChange={(e)=> setDate(e.target.value)}/>

        <button type='button'>Add birthday</button>
      </form>
    </div>
  )
}

export default BirthdayForm