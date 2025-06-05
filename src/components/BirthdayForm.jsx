import React from 'react'
import { useState } from 'react'

const BirthdayForm = ({setBirthday}) => {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  return (
    <div>
      <form>
        <input type="text" placeholder='Name: ' className=''/>
        <input type="date" placeholder='date: ' />
      </form>
    </div>
  )
}

export default BirthdayForm