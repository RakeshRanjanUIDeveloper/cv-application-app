import React from 'react'
import './Form.css';
const Personal = () => {
  return (
    <section>
        <h3>Personal Information</h3>
        <div className='form-container'>
            <input type="text" name="firstName" placeholder="First Name" />
            <input type="text" name="lastName" placeholder="Last Name" />
            <input type="text" name="title" placeholder="Title" />
            <input type="file" name="photo" placeholder="Photo" />
            <input type="text" name="address" placeholder="Address" />
            <input type="text" name="email" placeholder="Email" />
            <textarea name="description" placeholder="Description" />
        </div>
    </section>
  )
}

export default Personal