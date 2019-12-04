import React from 'react'
import Address from './components/Address'
import Education from './components/Education'
import Experience from './components/Experience';

function Main() {
  return (
    <div>
      <Address studentName="Sally Student"/>
      <Education />
      <Experience/>
    </div>
  );
}

export default Main;