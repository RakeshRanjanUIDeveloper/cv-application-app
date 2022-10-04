import React from 'react'
import './App.css';
import Education from './components/Form/Education';
import Experience from './components/Form/Experience';
import Personal from './components/Form/Personal';
import Button from './components/UI/Button';
const App = () => {
  return (
    <div className='main-container'>
      <Personal />
      <Experience />
      <Education />
      <Button />
    </div>
  )
}

export default App