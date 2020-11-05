import React from 'react';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const navBar = (props) => (
    <header className={classes.MainHeader}>
        <div>
            <NavLink to="/" >
                <b href="/" className={classes.MainHeaderBrand}>
                    BoOk sLoT
            </b>
            </NavLink>
        </div>
        <nav className={classes.MainNav}>
            <ul className={classes.MainNavItems}>
                <li className={classes.Gallery}>
                    <a href="https://unsplash.com/">Gallery</a>
                </li>
            </ul>
        </nav>
    </header>
)

export default navBar