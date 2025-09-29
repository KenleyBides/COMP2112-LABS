'use client';

import { useState } from "react";

export default function Contact() {
    const [ name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>(''); // message (#1)
    const [confirmation, setConfirmation] = useState<string>(''); // confirmation (#1)

    // watch name input and update state var as input value changes
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    // show confirmation when button clicked
    const handleSubmit = () => {
        setConfirmation(`Your name: ${name} - Your message: ${message}`); 
    }

    // lab 2 
    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }

    return (
        <main>
            <h1>Contact Us</h1>
            <p>Contact us at 705.000.0000 or send us a message below</p>
            <input type="text" placeholder="Your Name" value={name} onChange={handleNameChange} />
            <input type="text" placeholder="Your Message" value={message} onChange={handleMessageChange} />

            <button onClick={handleSubmit}>Submit</button>

            <p>{confirmation}</p>
        </main>
    );
}

/* COMP2112 - Lab 2: Single Page Applications (3%)



This lab lets you practice with the State Hook.



- Use the Contact component from an up-to-date copy of our in-class application
- Add 2 new state variables - message and confirmation, both defaulting to an empty string
- Add a new text input called message with a placeholder "Your message" and a handleMessageChange event handler that sets the message value from the onChange event
- In handleSubmit(), set the confirmation state variable to:
setConfirmation(`Your name: ${name} - Your message: ${message}`);
- Below the button, add a <p> element that displays the confirmation state variable. */