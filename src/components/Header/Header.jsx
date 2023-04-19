import styles from './Header.module.css';
import React from 'react'
import logo from '../../assets/pepetitle.png'
import Button from '../Button/Button';

const Header = () => {
  return (
    <div className={styles.Header}>
        <img src={logo} alt="logo" className={styles.logo} />
        <nav className={styles.nav} tabIndex="-1">
            <ul className={styles.menuitems}>
                <li><a href="#">home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">how to buy</a></li>
                <li><a href="#">takenomics</a></li>
                <li><a href="#">roadmap</a></li>
            </ul>
        </nav>
        <Button buttonText={"Buy Now"}/>
    </div>
  )
}

export default Header