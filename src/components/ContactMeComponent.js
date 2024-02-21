import { AccordionComponent } from './AccordionComponent'
import { Lorem } from './Lorem'
export default function ContactMeComponent() {
    const data = [
        {
            question: "What's this project all about, anyway?",
            answer: 'Answer goes here.',
        },
        {
            question: 'How can I drop you a line?',
            answer: "We're always up for a chat about code or memes.",
        },
        {
            question: 'Any easter eggs hidden in your code?',
            answer: "Absolutely! My code is like a treasure hunt or maybe not? You wont know until you dig deep or maybe just become disappointed. Just don't check the source code :)",
        },
    ]

    return (
        <div className="contactMe">
            <div className="secondary letsTalk">
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
                            <Lorem />
                        </div>
                        <form>
                            <label className="">Email: </label>
                            <input
                                type="email"
                                placeholder="yerEmail@anywhere.net"
                            />
                            <label className="">Message: </label>
                            <input type="text" placeholder="Message Here" />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
                <div className="module doubleContainer">
                    <div className="faq">FAQ</div>
                    {data.map((item, index) => (
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
