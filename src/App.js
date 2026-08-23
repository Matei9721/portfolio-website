import React, {useEffect} from 'react';
import ReactGA from 'react-ga4';
import {ArrowUp, CodeXml, Contact, ExternalLink} from 'lucide-react';

import './App.css';

import BackgroundDoodles from './components/BackgroundDoodles';
import ProjectCard from './components/ProjectCard';
import SectionHeading from './components/SectionHeading';
import TerminalSection from './components/TerminalSection';
import TypeLoop from './components/TypeLoop';
import WorkProjects from './components/WorkProjects';
import {personalProjects} from './content/projects';

const navigationItems = [
    {label: 'About', target: '#about'},
    {label: 'Work', target: '#work'},
    {label: 'Builds', target: '#projects'},
];

function App() {
    useEffect(() => {
        ReactGA.initialize('G-645W9NXVRJ');
        ReactGA.send({hitType: 'pageview', page: '/portfolio-website', title: 'Landing Page'});
    }, []);

    return (
        <div className="App" id="top">
            <a className="skip-link" href="#main-content">Skip to content</a>
            <BackgroundDoodles />

            <header className="site-header">
                <nav aria-label="Primary navigation" className="site-nav">
                    {navigationItems.map((item) => (
                        <a href={item.target} key={item.target}>
                            {item.label}
                        </a>
                    ))}
                </nav>
            </header>

            <main id="main-content">
                <TypeLoop />

                <section className="section-shell section-shell--terminal" id="about">
                    <SectionHeading
                        title="About me"
                    />
                    <TerminalSection />
                </section>

                <section className="section-shell" id="work">
                    <SectionHeading
                        title="Work experience"
                    />
                    <WorkProjects />
                </section>

                <section className="section-shell section-shell--projects" id="projects">
                    <SectionHeading
                        title="Personal projects"
                    />
                    <div className="projects-grid">
                        {personalProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <div className="site-footer__links">
                    <a href="https://github.com/Matei9721" rel="noopener noreferrer" target="_blank">
                        <CodeXml aria-hidden="true" /> GitHub <ExternalLink aria-hidden="true" />
                    </a>
                    <a href="https://www.linkedin.com/in/matei-penca/" rel="noopener noreferrer" target="_blank">
                        <Contact aria-hidden="true" /> LinkedIn <ExternalLink aria-hidden="true" />
                    </a>
                </div>
            </footer>

            <a aria-label="Back to the top" className="back-to-top" href="#top">
                <ArrowUp aria-hidden="true" />
            </a>
        </div>
    );
}

export default App;
