import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/navigationBar.css'
import { useEffect } from 'react';

export function Header({darkModeSwitcher}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const block = 'display: block;'
    const toggleSidebar = () => {
        console.log('toggling sidebar')
        setIsSidebarOpen(!isSidebarOpen)
    }
    // ...

    useEffect(() => {
        window.addEventListener('resize', toggleSidebar);

        return () => {
            window.removeEventListener('resize', toggleSidebar);
        };
    }, []);
    return (
        <>
            <header>
                <input
                    type="checkbox"
                    className="menu-toggle"
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
                    {/* <Link to={'/aspirations'}>Bucket List</Link> */}
                    <Link to={'/contactme'}>Contact Me</Link>
                    {/* <button onClick={() => darkModeSwitcher()}>Dark Mode</button> */}
                </div>
            </header>
            <div className='navContainer' style={{left: isSidebarOpen ? 0 : '-300px'}}>
                <input
                    type="checkbox"
                    id="menu-toggle"
                    checked={isSidebarOpen}
                    onChange={toggleSidebar}
                />
                <label htmlFor="menu-toggle" className="menu-icon" style={{display: 'block'}}>
                    &#10006;
                </label>
                <div className="pageLinks" style={{display: 'block'}}>
                    <Link to={'/'}>About Me</Link>
                    <Link to={'/projects'}>Projects</Link>
                    <Link to={'/merch'}>Merch</Link>
                    <Link to={'/contactme'}>Contact Me</Link>
                </div>
            </div>
        </>
    )
}
