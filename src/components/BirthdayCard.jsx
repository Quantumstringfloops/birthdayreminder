import React from 'react'


const BirthdayCard = ({birthday}) => {
  console.log(birthday)
  return(
    <div>
      <ul>
        {birthday.map((birthday, index) => {
          <li key={index}>{birthday.name} : {birthday.date}</li>
        })}
      </ul>
    </div>
  );
}

export default BirthdayCard