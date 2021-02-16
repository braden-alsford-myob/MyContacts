import { render, screen, act, fireEvent } from '@testing-library/react';
import Contact from './Contact';
import React from "react";
import { TreatProvider } from 'react-treat';


// React Testing Library

test('contact shows all info', () => {
    render(<TreatProvider theme="null">
        <Contact
            image=''
            firstName='John'
            lastName='Smith'
            company='My wonderful business'
            phone='12345'
            email='john@gmail.com'
        />
    </TreatProvider>);

    expect(screen.getByText('John Smith')).toBeInTheDocument();
    expect(screen.getByText('My wonderful business')).toBeInTheDocument();
    expect(screen.getByText('12345')).toBeInTheDocument();
    expect(screen.getByText('john@gmail.com')).toBeInTheDocument();
});

test('hrefs are attached correctly', () => {
    const phoneNumber = '12345';
    const emailAddress = 'john@gmail.com';

    render(<TreatProvider theme="null">
            <Contact
            phone={phoneNumber}
            email={emailAddress}
        />
    </TreatProvider>);

    expect(screen.getByText(phoneNumber).href).toBe('tel:' + phoneNumber)
    expect(screen.getByText(emailAddress).href).toBe('mailto:' + emailAddress)
});

test('profile image is displayed', () => {
    const imgSrc = 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&accessoriesType=Round&hairColor=Blonde&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Pink&eyeType=Close&eyebrowType=RaisedExcited&mouthType=Eating&skinColor=Light'

    render(<TreatProvider theme="null">
            <Contact
            image={imgSrc}
            firstName='John'
            lastName='Smith'
            company='My wonderful business'
            phone='12345'
            email='john@gmail.com'
        />
    </TreatProvider>);

    const displayedImage = document.querySelector("img");
    expect(displayedImage.src).toBe(imgSrc);
});
