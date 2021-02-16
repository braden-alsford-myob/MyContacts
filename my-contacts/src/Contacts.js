import React, {useEffect, useState} from 'react';
import Contact from "./Contact.js";
import Form from "./Form";
import PropTypes from "prop-types";
import {useStyles} from "react-treat";
import * as styleRefs from "./Contacts.treat";


const Contacts = (props) => {

    const styles = useStyles(styleRefs);

    const [adding, setAdding] = useState(false);
    const [search, setSearch] = useState("");


    const onButtonPressed = () => {setAdding(!adding)};

    const contactCreated = contact => {
        setAdding(false);
        props.addContact(contact)
    };

    const buttonText = adding ? "Cancel" : "Add";

    const header = (
        <header>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>My contacts</h1>
                <div className={styles.buttonContainer}>
                    <button onClick={onButtonPressed}
                            >{buttonText}</button>
                </div>
            </div>

            <hr className={styles.line}/>
        </header>
    );

    if (adding) {
        return (
            <main>
                {header}
                <Form
                addContact={contactCreated}/>
            </main>

        )
    } else {

        const filteredContacts = () => props.contacts.filter(contact => contact.lastName.toLowerCase().startsWith(search) || contact.firstName.toLowerCase().startsWith(search));


        const content = filteredContacts().map(contact => {
            return (
                <Contact
                    key={contact.firstName}
                    image={contact.image}
                    firstName={contact.firstName}
                    lastName={contact.lastName}
                    company={contact.companyName}
                    phone={contact.phone}
                    email={contact.email}
                />
            )
        });

        return (
            <main>
                {header}
                <div className={styles.searchContainer}>
                    <p>Search</p>
                    <input onChange={e=> setSearch(e.target.value)} className={styles.searchInput}/>
                </div>
                <div className={styles.contactList}>
                    {content}
                </div>
            </main>
        )
    }
};

Contacts.propTypes = {
    contacts: PropTypes.array,
    addContact: PropTypes.func,
};



export default Contacts;
