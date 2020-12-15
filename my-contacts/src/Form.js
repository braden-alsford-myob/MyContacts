import './Form.css';
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Form = (props) =>
 {
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
        <div className="container">
            <label>Image
                <input value={image} onChange={e => setImage(e.target.value)}/>
            </label>
            <label>First name
                <input value={firstName} onChange={e => setFirstName(e.target.value)} />
            </label>

            <label>Last name
                <input value={lastName} onChange={e => setLastName(e.target.value)}/>
            </label>

            <label>Company name
                <input value={companyName} onChange={e => setCompanyName(e.target.value)}/>
            </label>

            <label>Phone number
                <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
            </label>

            <label>Email
                <input value={email} onChange={e => setEmail(e.target.value)}/>
            </label>

            <button onClick={submit} className="save">Save</button>
        </div>
    )
};

Form.propTypes = {
    addContact: PropTypes.func.isRequired
};

export default Form;
