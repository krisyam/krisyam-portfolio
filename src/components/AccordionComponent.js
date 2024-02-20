import { useState } from "react";

export function AccordionComponent({ title, desc }) {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="accordion" style={{ cursor: 'pointer', userSelect: 'none' }} onClick={handleClick}>
      <div className={`questionContainer ${toggle ? "active" : ""}`}>
        <div className={`arrow ${toggle ? "active" : ""}`}>{'>'}</div>
        <div>{title}</div>
      </div>
      <div className="answerContainer" style={{ display: toggle ? 'block' : 'none' }}>
        {desc}
      </div>
    </div>
  );
}
