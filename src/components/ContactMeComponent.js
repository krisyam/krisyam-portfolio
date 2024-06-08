import React, { createRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { AccordionComponent } from './AccordionComponent'
import '../css/contactMe.css'

const questionAndAnswer = [
    {
        question: "What's this project all about, anyway?",
        answer: 'Answer goes here.',
    },
    {
        question: 'What specific areas of IT did you focus on during your studies?',
        answer: 'Answer goes here.',
    },
    {
        question: 'What do you enjoy doing in your free time?',
        answer: 'Answer goes here.',
    },
    {
        question: 'What are your plans for further education or certifications?',
        answer: 'Answer goes here.',
    },
    {
        question: 'Any easter eggs hidden in your code?',
        answer: "Absolutely! My code is like a treasure hunt or maybe not? You wont know until you dig deep or maybe just become disappointed. Just don't check the source code :)",
    },
]

export default function ContactMeComponent() {
    const [error, setError] = useState(null);
    const recaptchaRef = createRef();
    const onSubmit = () => {
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const recaptchaValue = recaptchaRef.current.getValue();
        if (!recaptchaValue) {
            setError('Please verify that you are not a robot.');
            return;
        }
        if (!email || !message) {
            setError('Please fill out all fields.');
            return;
        };
        setError(null);
        // sendEmail(email, 'Website Contact Form', 
        // `This is a test email from the website. 
        // Sender - ${email}
        
        // `);
    }
    return (
        <div className="contactMe">
            <div className="secondary title">
                <div className="text">Lets Talk?</div>
            </div>
            <div className="container">
                <div className="module doubleContainer">
                    <div className="contactForm">
                        <img
                            src="https://thebigcb.com/images/Merch/laptop.png"
                            alt="happy chibi me"
                        />
                        <div>
                            <p>
                                If you have any questions or projects in mind, I would love to hear about them. 
                                Whether you're looking for advice, brainstorming ideas, or need assistance with a specific task, I'm here to help. 
                                Let's discuss your thoughts and work together to create something fantastic. 
                                Don't hesitate to reach out and let's make something amazing happen!
                            </p>
                        </div>
                        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                        <div className="formContainer">
                            <div className="inputContainer">
                                <span className="icon">
                                    <label>Email: </label> 
                                </span>
                                <input name="email"
                                    id="email"
                                    className="input"
                                    type="email"
                                />
                            </div>
                            <div className="inputContainer">
                                <span className="icon">
                                    <label>Message: </label> 
                                </span>
                                <textarea name="message"
                                    id="message"
                                    className="input"
                                />
                            </div>
                            {error && <div className="error">{error}</div>}
                            <div className="row">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="6LfQHvQpAAAAABNQieflTPjGgcwYkQRGub6AJpvV"
                            />
                            <button class="submitBtn" onClick={onSubmit}>
                                Submit →
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="module doubleContainer">
                    <div className="faq">FAQ</div>
                    {questionAndAnswer.map((item, index) => (
                        <AccordionComponent
                            key={index}
                            title={item.question}
                            desc={item.answer}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
