import './App.css'
import { BrowserRouter, useLocation } from 'react-router-dom'
import MainRouter from './routes/router'
import { FooterComponent } from './components/FooterComponent'
import { Header } from './components/Header'
import { useEffect, useState } from 'react'

function App() {
    const [isDarkMode, setDarkMode] = useState('App light');
    const darkModeSwitcher = () => {
        console.log("Switching dark mode")
        if (isDarkMode === 'App light') {
            setDarkMode('App dark')
            localStorage.setItem('darkMode', "App dark")
        } else {
            setDarkMode('App light')
            localStorage.setItem('darkMode', "App light")
        }
    }
    useEffect(() => {
        const darkMode = localStorage.getItem('darkMode')
        console.log('darkMode', darkMode)
        setDarkMode(darkMode)
    }, [])
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className={isDarkMode}>
                <Header darkModeSwitcher={darkModeSwitcher}/>
                <div className="content">
                    <MainRouter />
                </div>
                <ReturnToTop />
                <FooterComponent />
            </div>
        </BrowserRouter>
    )
}

export default App

function ReturnToTop() {
    const location = useLocation().pathname
    const { innerWidth: width, innerHeight: height } = window;
    const [shouldDisplay, setShouldDisplay] = useState(height < document.documentElement.scrollHeight)
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    
    useEffect(() => {
        // Add any dependencies that should trigger a rerender here
        // For example, if you want to rerender when the location changes:
        console.log('Window size changed:', width, height)  
        console.log('Document size changed:', document.documentElement.scrollHeight)  
        setShouldDisplay(height < document.documentElement.scrollHeight)  
        console.log('Location changed:', location)  
    }, [location])  // eslint-disable-line

    return (
        <div
            className="returnToTop"
            style={{ display: shouldDisplay ? '' : 'none' }}
        >
            <button onClick={() => handleScrollToTop()}>Return to top</button>
        </div>
    )
}
