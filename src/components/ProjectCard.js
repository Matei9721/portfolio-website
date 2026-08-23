import React from 'react';
import PropTypes from 'prop-types';
import {CodeXml, ExternalLink} from 'lucide-react';

import PaperTape from './PaperTape';

const ProjectCard = ({project}) => (
    <article className="project-card">
        <PaperTape />
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <ul aria-label={`${project.title} technologies`} className="project-card__tags">
            {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>

        <a
            aria-label={project.githubLabel}
            className="project-card__link"
            href={project.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
        >
            <CodeXml aria-hidden="true" />
            <span>{project.repoName}</span>
            <ExternalLink aria-hidden="true" />
        </a>
    </article>
);

ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        githubUrl: PropTypes.string.isRequired,
        githubLabel: PropTypes.string.isRequired,
        repoName: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default ProjectCard;
