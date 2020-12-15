import './Contacts.css';
import React, {useEffect, useState} from 'react';
import Contact from "./Contact.js";
import Form from "./Form";
import PropTypes from "prop-types";


const Contacts = (props) => {

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
            <div className="title-container">
                <h1 className="title">My contacts</h1>
                <div className="button-container">
                    <button onClick={onButtonPressed}
                            className="add"
                            >{buttonText}</button>
                </div>
            </div>

            <hr className="line"/>
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
                <div className="search-container">
                    <p>Search</p>
                    <input onChange={search} className="search-input"/>
                </div>
                <div className="contact-list">
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
