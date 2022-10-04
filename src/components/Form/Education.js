import React from 'react'
import './Form.css';
const Education = () => {
  return (
    <section>
        <h3>Education</h3>
        <div className='form-container'>
            <input type="text" name="universityName" placeholder="University Name" />
            <input type="text" name="city" placeholder="City" />
            <input type="text" name="degree" placeholder="Degree" />
            <input type="text" name="subject" placeholder="Subject" />
            <input type="text" name="from" placeholder="From" />
            <input type="text" name="to" placeholder="To" />
        </div>
    </section>
  )
}

export default Education