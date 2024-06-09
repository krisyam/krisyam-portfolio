import React, { createRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { AccordionComponent } from './AccordionComponent'
import '../css/contactMe.css'

const questionAndAnswer = [
    {
        question: "What's this project all about, anyway?",
        answer: [`This website was supposed to be a joke portfolio project to showcase my skills in a specific language which is React however, 
            it turned out to be a full-fledged website. `,
            `I wanted to create a website that was unique, and I think I have achieved that.`],
    },
    {
        question: 'What specific areas of IT did you focus on during your studies?',
        answer: [`Pretty much school is covering everything from Data Analysis, Networking, Programming, and Project Making.`,
            `In the programming side, I've learned Object Oriented Programming (OOP) with Java, Web Development with a ton of JavaScript Frameworks ie. 
            React and Vue, and the dreaded Mobile Development with React Native.`,
            `Theres not really much to talk about the others since 
            I primarily would like to create applications than analyzing numbers or manually climbing shelves to attach networking wires.`],
    },
    {
        question: 'What do you enjoy doing in your free time?',
        answer: [`I am a gamer at heart and being able to enjoy an open world game.
            Being able to explore and do whatever I want is something that I enjoy.
            I have done 90 - 100% completion percentage in Genshin Impact, Fallout 4, Red Dead Redemption, and other games.
            Well... I do still think that Honkai Star Rail is partially open world.`,
            `I also enjoy watching anime and reading manga. 
            I have read through the manga of Dr. Stone, Oshi no Ko, Mushoku Tensei, and some other isekai manga.
            They are really interesting and I would recommend them to anyone who enjoys reading manga.`,
            `But due to the lack of time during my studies, I have not been able to do my hobbies as much as I would like to.
            I'd like to balance my life and work so that I can enjoy my hobbies more.`],
    },
    {
        question: 'What are your plans for further education or certifications?',
        answer: [`I am actually interested in pursuing education in the realm of game development.
            I have always been interested in creating games and I think that it would be a great opportunity to learn more about it.`,
            `Growing interest in learning more about AI and machine learning.
            Especially the youtubers Code Bullet and AI Warehouse, with their videos on AI and machine learning, 
            I have been inspired to learn more about it.`,],
    },
    {
        question: 'Any easter eggs hidden in your code?',
        answer: [`Absolutely! My code is like a treasure hunt or maybe not? You wont know until you dig deep or maybe just become disappointed.`,
            `Just don't check the source code :3`],
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
                    <div className="faq">Frequently Asked Questions</div>
                    <p>Oh? You would like to know me more? Here's some questions that people ask about me.</p>
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
