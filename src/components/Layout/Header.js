import React from 'react';
import styles from "./Header.module.css"
import mealsImage from "../../assets/meals.jpg"
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
  return (
    <React.Fragment>
        <header className={styles.header}>
            <h1>Plut0rMeals</h1>
            <HeaderCartButton onClick={props.onClick} />
        </header>
        <div className={styles['main-image']}>
            <img src={mealsImage} alt="A table full of delicious foods!" />
        </div>
    </React.Fragment>
  )
}

export default Header