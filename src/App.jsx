import React, { useState } from 'react'
import BirthdayForm from './components/BirthdayForm'


const App = () => {
  const [birthday, setBirthday] = useState([])
  return (
    <div>
      <div>
        <BirthdayForm setBirthday={setBirthday}/>
        
      </div>
    </div>
  )
}

export default App