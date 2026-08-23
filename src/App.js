import React, {useEffect} from 'react';
import ReactGA from 'react-ga4';

import Draw from './components/DrawingCanvas';
import ProjectCard from './components/ProjectCard';
import SectionHeading from './components/SectionHeading';
import TerminalSection from './components/TerminalSection';
import TypeLoop from './components/TypeLoop';
import WorkProjects from './components/WorkProjects';
import {personalProjects} from './content/projects';

function App() {
    useEffect(() => {
        ReactGA.initialize('G-645W9NXVRJ');
        ReactGA.send({hitType: 'pageview', page: '/portfolio-website', title: 'Landing Page'});
    }, []);

    return (
        <div className="App" id="top">
            <a className="skip-link" href="#about">Skip to about me</a>
            <main>
                <Draw />
                <TypeLoop />
                <section className="site-section" id="about">
                    <SectionHeading eyebrow="01 / interactive profile" title="About me" />
                    <TerminalSection />
                </section>
                <section className="site-section" id="work">
                    <SectionHeading eyebrow="02 / where ideas ship" title="Work experience" />
                    <WorkProjects />
                </section>
                <section className="site-section site-section--projects" id="projects">
                    <SectionHeading eyebrow="03 / side quests" title="Personal projects" />
                    <p className="section-intro">
                        Small ideas I liked enough to over-engineer in my free time.
                    </p>
                    <div className="projects-grid">
                        {personalProjects.map((project, index) => (
                            <ProjectCard index={index} key={project.id} project={project} />
                        ))}
                    </div>
                </section>
            </main>
            <footer className="site-footer">
                <span>Designed with curiosity. Built with React.</span>
                <span aria-hidden="true">Matei Penca / {new Date().getFullYear()}</span>
            </footer>
            <a aria-label="Back to top" className="back-to-top" href="#top">↑</a>
        </div>
    );
}

export default App;
