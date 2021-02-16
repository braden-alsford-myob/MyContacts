import React from 'react';
import { shallow } from 'enzyme';
import Contact from "./Contact";

describe('Contact details displayed in web view', () => {

    let contact;

    beforeEach(() => {
        contact = shallow(
            <Contact
                image=''
                firstName='John'
                lastName='Smith'
                company='My wonderful business'
                phone='12345'
                email='john@gmail.com'
            />
        );
    });

    it('renders name', () => {
        expect(contact.find('strong').text()).toEqual(contact.firstName + ' ' + contact.lastName);
    });

    it('renders company', () => {
        expect(contact.find('p').text()).toEqual(contact.companyName);
    });

    it('renders phone', () => {
        const children = contact.find(`a.anchor[children="${contact.phone}"]`);
        expect(children.length).toEqual(1);
    });

    it('renders email', () => {
        const children = contact.find(`a.anchor[children="${contact.email}"]`);
        expect(children.length).toEqual(1);
    });
});
