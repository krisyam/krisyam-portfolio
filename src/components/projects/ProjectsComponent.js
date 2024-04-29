import React from 'react'

export default function ProjectsComponent() {
    const projects = ['myAcademy', 'Project 2', 'Project 3']; // Replace with your actual project names
    function handleClick(project) {
        // Handle click event for the project
        console.log(`Clicked on ${project}`);
    }
    return (
        <div>
            {projects.map((project, index) => (
                <div key={index} onClick={() => handleClick(project)}>
                    {project}
                </div>
            ))}
        </div>
    );
}

