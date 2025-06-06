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
    setName("");
    setDate("");
  }
 
  return (
    <div className='flex justify-center items-center min-h-screen bg-purple-600'>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder='Name: ' 
            className='w-full p-2 border rounded'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            required
          />
          <input 
            type="date" 
            placeholder='date: '
            className='w-full p-2 border rounded'
            value={date}
            onChange={(e)=> setDate(e.target.value)}
            required
          />
        </div>
        
        <button 
          type='submit' 
          className='w-full mt-4 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700'
        >
          Add birthday
        </button>
      </form>
    </div>
  )
}

export default BirthdayForm