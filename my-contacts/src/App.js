import './App.css';
import React, {useState} from 'react';
import Contacts from "./Contacts.js";
import {data} from "./data";

const App = () => {

    const [contacts, setContacts] = useState(data);

    const addContact = contact => {
        setContacts(contacts.concat(contact));
    };

    return (
        <div className="App">
        <body className="body">
          <Contacts
              contacts={contacts}
              addContact={addContact}
          />
        </body>
        </div>
    );
};

export default App;
