import React from 'react';
import classes from './Slots.module.css';

const slot = (props) => {
    const backgroundColor = props.booked === false ? " #2c9f45" : "red"
    return (
        <div className={classes.Slot} onClick={props.clicked} style={{background:backgroundColor}} >
            <h1>{props.time}</h1>
        </div>
    )
}

export default slot