import React from 'react'

function Address() {
  return (
    <address>
      <div className="contactInfo">
        <h3>Contact me</h3>
        <p>Sally Student</p>
        <p><a href="mailto:sallystudent@sallystudent.com" target="_blank">sallystudent@sallystudent.com</a></p>
        <p>(123)555-7891</p>
      </div>
      <div className="imgContainer">
      <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg"
        alt="Profile pic of me, Sally Student"></img>
      </div>
    </address>
  );
}

export default Address;