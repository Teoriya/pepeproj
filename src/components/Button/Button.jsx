import styles from './Button.module.css';
import React from 'react'

const Button = ({ buttonText, buttonImage }) => {
  return (
    <button className={styles.btn}>

        {buttonText}
        {buttonImage ? <img src={buttonImage} className={styles.btnimg}/> : null}

    </button>
  )
}

export default Button