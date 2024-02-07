import { useState } from "react";

export default function ContactMeComponent() {
  const data = [
    {
      question: "What's this project all about, anyway?",
      answer: "Answer goes here."
    },
    {
      question: "How can I drop you a line?",
      answer: "Just shoot an email to [your@email.com] or find me on [your favorite communication platform]. We're always up for a chat about code or memes."
    },
    {
      question: "Any Easter eggs hidden in your code?",
      answer: "Absolutely! My code is like a treasure hunt or maybe not? You wont know until you dig deep or maybe just become disappointed. Who knows :)'"
    }
  ];

  return (
    <div className='contactme'>
      <div className="secondary letsTalk">Lets Talk?</div>
      <div className="container">
        <div className="module doubleContainer">
          <img alt="happy chibi me"/>
          <form>
            <label className=''>Email: </label>
            <input type="email" placeholder="yerEmail@anywhere.net"/>
            <label className=''>Message: </label>
            <input type="text" placeholder="Message Here"/>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="module doubleContainer">
          <div>FAQ</div>
          {data.map((item, index) => (
            <AccordionComponent
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AccordionComponent({ question, answer }) {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="accordion" style={{cursor: 'pointer', userSelect: 'none'}} onClick={handleClick}>
      <div>
        {question}
      </div>
      <div style={{ display: toggle ? 'block' : 'none' }}>
        {answer}
      </div>
    </div>
  );
}