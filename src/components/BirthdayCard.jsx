import React from 'react'


const BirthdayCard = ({birthday}) => {
  return (
    <div>
      <ul>
        {birthday.map((birthday, index) => {
          <li>{birthday.name} : {birthday.date}</li>
        })}
      </ul>
    </div>
  )
}

export default BirthdayCard