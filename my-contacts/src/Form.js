import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useStyles} from "react-treat";
import * as styleRefs from "./Form.treat";

const Form = (props) =>
 {
     const styles = useStyles(styleRefs);

     const [contact, setContact] = useState({
         image: '',
         firstName: '',
         lastName: '',
         companyName: '',
         phone: '',
         email: '',
     });


     const updateContact = (e) => setContact({...contact, [e.target.name]: e.target.value});

     const submit = () => props.addContact(contact);

    return (
        <div className={styles.container}>
            <label className={styles.label}>Image
                <input name="image" className={styles.input} value={contact.image} onChange={e => updateContact(e)}/>
            </label>
            <label className={styles.label}>First name
                <input name="firstName" className={styles.input} value={contact.firstName} onChange={e => updateContact(e)} />
            </label>

            <label className={styles.label}>Last name
                <input name="lastName" className={styles.input} value={contact.lastName} onChange={e => updateContact(e)}/>
            </label>

            <label className={styles.label}>Company name
                <input name="companyName" className={styles.input} value={contact.companyName} onChange={e => updateContact(e)}/>
            </label>

            <label className={styles.label}>Phone number
                <input name="phone" className={styles.input} value={contact.phone} onChange={e => updateContact(e)}/>
            </label>

            <label className={styles.label}>Email
                <input name="email" className={styles.input} value={contact.email} onChange={e => updateContact(e)}/>
            </label>

            <button onClick={submit} className={styles.saveButton}>Save</button>
        </div>
    )
};

Form.propTypes = {
    addContact: PropTypes.func.isRequired
};

export default Form;
