import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Header({darkModeSwitcher}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleSidebar = () => {
        console.log('toggling sidebar')
        setIsSidebarOpen(!isSidebarOpen)
    }
    return (
        <header>
            <input
                type="checkbox"
                className="menu-toggle"
                id="menu-toggle"
                checked={isSidebarOpen}
                onChange={toggleSidebar}
            />
            <label htmlFor="menu-toggle" className="menu-icon squished">
                &#9776;
            </label>
            <div className="squished">Krisyam Portfolio</div>

            <div className="pageLinks">
                <Link to={'/'}>About Me</Link>
                {/* <Link to={'/skills'}>Skills</Link> */}
                <Link to={'/projects'}>Projects</Link>
                <Link to={'/merch'}>Merch</Link>
                <Link to={'/aspirations'}>Bucket List</Link>
                <Link to={'/contactme'}>Contact Me</Link>
                {/* <button onClick={() => darkModeSwitcher()}>Dark Mode</button> */}
            </div>
        </header>
    )
}
