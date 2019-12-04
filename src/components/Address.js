import React from 'react'

function Address(props) {
  return (
    <address>
      <div className="contactInfo">
        <h3>Contact me</h3>
        <p>{props.studentName}</p>
        <p><a href="mailto:{props.studentName.split(' ').join('')}@{props.studentName.split(' ').join('')}.com" target="_blank">{props.studentName.split(' ').join('')}@{props.studentName.split(' ').join('')}.com</a></p>
        <p>(123)555-7891</p>
      </div>
      <div className="imgContainer">
      <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg"
        alt="Profile pic of me, {props.studentName.split(' ').join('')}"></img>
      </div>
    </address>
  );
}

export default Address;