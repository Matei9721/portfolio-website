import React, {useEffect} from 'react';
import ReactGA from 'react-ga4';
import {FloatButton, Layout} from 'antd';

import Draw from './components/DrawingCanvas';
import ProjectCard from './components/ProjectCard';
import SectionHeading from './components/SectionHeading';
import TerminalSection from './components/TerminalSection';
import TypeLoop from './components/TypeLoop';
import WorkProjects from './components/WorkProjects';
import {personalProjects} from './content/projects';

const {Content, Header} = Layout;

function App() {
    useEffect(() => {
        ReactGA.initialize('G-645W9NXVRJ');
        ReactGA.send({hitType: 'pageview', page: '/portfolio-website', title: 'Landing Page'});
    }, []);

    return (
        <Layout className="App">
            {/*Nav bar Header, currently I don't store anything in it, might remove it later*/}
            <Header className="site-header" />

            {/*One page layout content is enough for my personal website*/}
            <Content>
                {/*Drawing canvas*/}
                <Draw />
                {/*Landing introduction screen*/}
                <TypeLoop />
                {/* About me -- Terminal */}
                <SectionHeading title="About me" />
                <TerminalSection />
                <SectionHeading title="Work Experience" />
                <WorkProjects />
                <SectionHeading title="Personal Projects" />
                {/* Projects */}
                <div className="projects-grid">
                    {personalProjects.map((project) => (
                        <div className="project-column" key={project.id}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </Content>

            {/*Go Back to the Top*/}
            <FloatButton.BackTop />
        </Layout>
    );
}

export default App;
