import React from 'react';
import classes from './Form.module.css';

const form = (props) => {
    const firstNamePlaceholder = props.firstName === '' ? "Enter you First Name" : props.firstName
    const lastNamePlaceholder = props.lastName === '' ? "Enter your Last Name" : props.lastName
    const phoneNumberPlaceholder = props.phoneNumber === '' ? "Enter your Phone Number" : props.phoneNumber

    return (
        <form onSubmit={props.submit} className={classes.Form}>
            <h1 style={{ textAlign: "center" }}>Time : {props.time}</h1>
            <input type="text" name="firstName" placeholder={firstNamePlaceholder} onChange={props.change} />
            <input type="text" name="lastName" placeholder={lastNamePlaceholder} onChange={props.change} />
            <input type="text" name="phoneNumber" placeholder={phoneNumberPlaceholder} onChange={props.change} />
            <button >Save</button>
        </form>
    )
}

export default form