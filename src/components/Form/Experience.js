import React from 'react'
import './Form.css';
const Experience = () => {
  return (
    <section>
        <h3>Experience</h3>
        <div className='form-container'>
            <input type="text" name="position" placeholder="Position" />
            <input type="text" name="company" placeholder="Company" />
            <input type="text" name="city" placeholder="City" />
            <input type="text" name="from" placeholder="From" />
            <input type="text" name="to" placeholder="To" />
        </div>
    </section>
  )
}

export default Experience