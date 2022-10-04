import React from 'react'
import styles from './Button.module.css'
const Button = () => {
  return (
    <React.Fragment>
        <button type='button' className={`${styles.btn} ${styles.btn1}`}>Generate PDF</button>
        <button type='button' className={`${styles.btn} ${styles.btn2}`}>Load Example</button>
        <button type='button' className={`${styles.btn} ${styles.btn3}`}>Reset</button>
    </React.Fragment>
  )
}

export default Button