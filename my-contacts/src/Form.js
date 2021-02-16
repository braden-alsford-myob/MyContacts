import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useStyles} from "react-treat";
import * as styleRefs from "./Form.treat";

const Form = (props) =>
 {
     const styles = useStyles(styleRefs);

     const [image, setImage] = useState("");
     const [firstName, setFirstName] = useState("");
     const [lastName, setLastName] = useState("");
     const [companyName, setCompanyName] = useState("");
     const [phoneNumber, setPhoneNumber] = useState("");
     const [email, setEmail] = useState("");

     const submit = () => {
         let newContact = {
             image: image,
             firstName: firstName,
             lastName: lastName,
             companyName: companyName,
             phone: phoneNumber,
             email: email
         };

         props.addContact(newContact);
     };

    return (
        <div className={styles.container}>
            <label className={styles.label}>Image
                <input type='image' className={styles.input} value={image} onChange={e => setImage(e.target.value)}/>
            </label>
            <label className={styles.label}>First name
                <input className={styles.input} value={firstName} onChange={e => setFirstName(e.target.value)} />
            </label>

            <label className={styles.label}>Last name
                <input className={styles.input} value={lastName} onChange={e => setLastName(e.target.value)}/>
            </label>

            <label className={styles.label}>Company name
                <input className={styles.input} value={companyName} onChange={e => setCompanyName(e.target.value)}/>
            </label>

            <label className={styles.label}>Phone number
                <input className={styles.input} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
            </label>

            <label className={styles.label}>Email
                <input className={styles.input} value={email} onChange={e => setEmail(e.target.value)}/>
            </label>

            <button onClick={submit} className={styles.saveButton}>Save</button>
        </div>
    )
};

Form.propTypes = {
    addContact: PropTypes.func.isRequired
};

export default Form;
