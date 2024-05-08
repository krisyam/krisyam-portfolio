import React from 'react'
import './ProjectsComponent.css'; // Import the CSS file
import projectImg from '../../images/myAcademyLogo.png'
import { Link } from 'react-router-dom'

export default function ProjectsComponent() {
    function redirectToGoogleDrive() {
        window.location.href = 'https://drive.google.com/file/d/1rvILHbBQs0vbPMRa7tx4dl4ppTQLvTbc/view?usp=sharing';
    }
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className="project-header">
                    Projects
                </div>
                <div className="project-container"> {/* Add a class name to the container */}
                    <img className="projImage" src={projectImg} alt="Project 1" loading='lazy'/> {/* Use "img" instead of "image" */}
                    <div style={{maxHeight: 250, overflow: 'hidden'}}>
                        <h2 className="projTitle">myAcademy</h2>
                        <p className="projDesc"> {/* Use "p" instead of "text" */}
                            &emsp;&emsp; myAcademy is a comprehensive mobile application designed to enhance academic 
                            performance and manage school-related information for students at the University of San Carlos DCISM. 
                            This application serves as a centralized platform that integrates various features, enabling students to 
                            effectively manage their school-related assignments, timetables, and resources.
                        </p>
                        <div>
                            <Link to={'/projects/myacademy'} ><button className="projButtons">View</button></Link>
                            <Link to={'/projects/myacademy/privacy_policy'} ><button className="projButtons">Privacy Policy</button></Link>
                            
                            <button className="projButtons" onClick={() => redirectToGoogleDrive()}>
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
