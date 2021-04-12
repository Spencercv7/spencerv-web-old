import React from 'react';
import ProjectItem from '../components/ProjectItem';

const Projects = () => {
    return (
        <section id="projects">
            <h2 id="projects__header">Projects</h2>
            <ul id="projects__list">
                <ProjectItem></ProjectItem>
                <ProjectItem></ProjectItem>
                <ProjectItem></ProjectItem>
            </ul>
            <div className="divider"/>
        </section>
    )
}

export default Projects;
