import React from 'react';
import { shallow } from 'enzyme';
import Contact from "./Contact";


let contact = shallow(
    <Contact
        image=''
        firstName='John'
        lastName='Smith'
        company='My wonderful business'
        phone='12345'
        email='john@gmail.com'
    />
);


describe('Contact details displayed in web view', () => {

    it('renders name', () => {
        expect(contact.find('strong').text()).toEqual('John Smith');
    });

    it('renders company', () => {
        expect(contact.find('p').text()).toEqual('My wonderful business');
    });

    it('renders phone', () => {
        const children = contact.find('a.anchor[children="12345"]');
        expect(children.length).toEqual(1);
    });

    it('renders email', () => {
        const children = contact.find('a.anchor[children="john@gmail.com"]');
        expect(children.length).toEqual(1);
    });
});

// describe ('hrefs are set up correctly', () => {
//
//     it('should have mobile hrefs', () => {
//         expect(contact.find('[mobilePhoneAnchor]').href.toEqual('12345'));
//     })
//
// });