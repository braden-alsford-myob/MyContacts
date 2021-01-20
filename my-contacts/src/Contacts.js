import React, {useEffect, useState} from 'react';
import Contact from "./Contact.js";
import Form from "./Form";
import PropTypes from "prop-types";
import {useStyles} from "react-treat";
import * as styleRefs from "./Contacts.treat";


const Contacts = (props) => {

    const styles = useStyles(styleRefs);

    const [adding, setAdding] = useState(false);
    const [filteredContacts, setFilteredContacts] = useState(props.contacts);

    useEffect(() => {
        setFilteredContacts(props.contacts);
    }, [props.contacts]);

    const onButtonPressed = () => {setAdding(!adding)};

    const contactCreated = contact => {
        setAdding(false);
        props.addContact(contact)
    };

    const contactMatchesSearch = (contact, search) => {
        search = search.toLowerCase();

        return contact.lastName.toLowerCase().startsWith(search) || contact.firstName.toLowerCase().startsWith(search)
    };

    const search = e => {
        let q = e.target.value;
        let filteredContacts = props.contacts.filter(contact => contactMatchesSearch(contact, q));
        setFilteredContacts(filteredContacts)
    };

    const buttonText = adding ? "Cancel" : "Add";

    const header = (
        <div>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>My contacts</h1>
                <div className={styles.buttonContainer}>
                    <button onClick={onButtonPressed}
                            className="add"
                            >{buttonText}</button>
                </div>
            </div>

            <hr className={styles.line}/>
        </div>
    );

    const content = filteredContacts.map(contact => {
        return (
            <Contact
                image={contact.image}
                firstName={contact.firstName}
                lastName={contact.lastName}
                company={contact.companyName}
                phone={contact.phone}
                email={contact.email}
            />
        )
    });

    if (adding) {
        return (
            <div>
                {header}
                <Form
                addContact={contactCreated}/>
            </div>

        )
    } else {
        return (
            <div>
                {header}
                <div className={styles.searchContainer}>
                    <p>Search</p>
                    <input onChange={search} className={styles.searchInput}/>
                </div>
                <div className={styles.contactList}>
                    {content}
                </div>
            </div>
        )
    }
};

Contacts.propTypes = {
    contacts: PropTypes.array,
    addContact: PropTypes.func,
};



export default Contacts;
