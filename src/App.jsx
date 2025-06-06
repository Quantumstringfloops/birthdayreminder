import React, { useState } from 'react'
import BirthdayForm from './components/BirthdayForm'
import BirthdayCard from './components/BirthdayCard'


const App = () => {
  const [birthday, setBirthday] = useState([{
    name : 'Neil',
    date : '2025-06-25'
  }])
  return (
    <div>
      <div>
        <BirthdayCard birthday={birthday}/>
        <BirthdayForm setBirthday={setBirthday}/>
      </div>
    </div>
  )
}

export default App