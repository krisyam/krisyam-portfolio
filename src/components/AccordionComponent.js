import { useState } from 'react'
import '../css/accordion.css'

export function AccordionComponent({ title, desc }) {
    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <div
            className="accordion"
            style={{ cursor: 'pointer', userSelect: 'none' }}
        >
            <div 
                className={`questionContainer ${toggle ? 'active' : ''}`}
                onClick={handleClick}
            >
                <div className={`arrow ${toggle ? 'active' : ''}`}>{'>'}</div>
                <div>{title}</div>
            </div>
            <div
                className="answerContainer"
                style={{ display: toggle ? 'block' : 'none' }}
            >
                {desc.map((d, i) => (
                    <p key={i}>{d}</p>
                ))}
            </div>
        </div>
    )
}
