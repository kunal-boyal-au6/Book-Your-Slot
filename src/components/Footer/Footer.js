import React from 'react';
import classes from './Footer.module.css';

const footer = (props) => (
    <footer className={classes.MainFooter}>
        <nav>
            <ul className={classes.MainFooterLinks}>
                <li className={classes.MainFooterLink}>
                    <a href="https://www.google.com/">Support</a>
                </li>
                <li className={classes.MainFooterLink}>
                    <a href="https://www.google.com/">Terms of Use</a>
                </li>
            </ul>
        </nav>
    </footer>
)

export default footer