import React, {useState} from 'react';
import {useStyles} from "react-treat";
import * as styleRefs from "./Body.treat";
import Contacts from "./Contacts";
import {data} from "./data";

const Body = (props) => {

    const styles = useStyles(styleRefs);

    const [contacts, setContacts] = useState(data);

    const addContact = contact => {
        setContacts(contacts.concat(contact));
    };

    return (
        <div className={styles.body}>
            <button onClick={props.onThemeChange} className={styles.button}>Switch Theme!</button>
            <Contacts
                contacts={contacts}
                addContact={addContact}
            />
        </div>
    )

};

export default Body;