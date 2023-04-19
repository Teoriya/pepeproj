import Button from '../../components/Button/Button';
import styles from './Home.module.css';
import React from 'react'

const Home = () => {
    return (
        <div>
            <div className={styles.home}>
                <img src='images/background.png' alt='background' className={styles.home__background} />
                <div className={styles.home__container}>
                    <div className={styles.home__container__imgntxt}>
                        <div className={styles.home__container__text}>
                            <h1>$Pepe</h1>
                            <h2>the most memeable memecoin in existence. The dogs have had their day, it’s time for Pepe to take reign.</h2>                        
                            <div className={styles.home__container__text__icons}>
                                <div className={styles.home__container__text__icons__icon}>
                                    <img src="images/icons/twitter.png" alt="" />
                                </div>
                                <div className={styles.home__container__text__icons__icon}>
                                    <img src="images/icons/tele.png" alt="" />
                                </div>
                                <div className={styles.home__container__text__icons__icon}>
                                    <img src="images/icons/dextools.png" alt="" />
                                </div>
                                <div className={styles.home__container__text__icons__icon}>
                                    <img src="images/icons/etherscan.png" alt="" />
                                </div>
                                <div className={styles.home__container__text__icons__icon}>
                                    <img src="images/icons/cmc.png" alt="" />
                                </div>
                                <div className={styles.home__container__text__icons__icon}>
                                    <img src="images/icons/uniswap.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.home__container__image}>
                            <img src="images/pepesmile.png" alt="pepe" />
                        </div>
                    </div>
                    <div className={styles.home__container__buttons}>
                        <Button buttonText="buy on uniswap" buttonImage="images/icons/uniswap.svg" />
                        <Button buttonText="buy on okx dex" buttonImage="images/icons/okxdex.svg" />
                        <Button buttonText="see chart" buttonImage="images/icons/dex.svg" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home