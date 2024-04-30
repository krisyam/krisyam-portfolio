import { useEffect } from 'react'
import Artwork from '../images/Artwork.png'
import { Lorem } from './Lorem'

export default function AboutMeComponent() {
    useEffect(() => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.src = '//cdn.credly.com/assets/utilities/embed.js'
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [])
    return (
        <>
            <div className="module intro ">
                <div className="partition">
                    Hi there! I am Kristian Benzene Ayam and I am an app
                    developer and an aspiring game developer.
                </div>
                <div className="partition">
                    <img src={Artwork} loading="lazy" alt='Artwork' />
                </div>
            </div>
            <div className="secondary module">
                <div>About Me</div>
                <div>
                    <Lorem />
                </div>
            </div>
            <div className="module">
                <div>A Brief Experience Summary</div>
                <div>
                    <div>DOST Intern</div>
                    <div>
                        <Lorem />
                    </div>
                </div>
            </div>
            <div className="secondary module cert">
                <div>Certificates</div>
                <div
                    data-iframe-width="150"
                    data-iframe-height="270"
                    data-share-badge-id="ff203be6-7095-45c5-81a0-37e26be4af1a"
                    data-share-badge-host="https://www.credly.com"
                />
                {/* https://www.credly.com/badges/ff203be6-7095-45c5-81a0-37e26be4af1a/public_url */}
            </div>
        </>
    )
}
