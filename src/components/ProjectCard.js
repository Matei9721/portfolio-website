import React from 'react';
import PropTypes from 'prop-types';
import {CodeXml, ExternalLink} from 'lucide-react';

import PaperTape from './PaperTape';

const ProjectCard = ({project}) => (
    <article className={`project-card project-card--${project.featured ? 'featured' : 'supporting'}`}>
        <PaperTape />
        {project.featured && <p className="project-card__eyebrow">Featured build · live</p>}
        <h3>
            {project.logo ? (
                <>
                    <span className="visually-hidden">{project.title}</span>
                    <img
                        alt=""
                        aria-hidden="true"
                        className="project-card__wordmark"
                        src={`${import.meta.env.BASE_URL}${project.logo}`}
                    />
                </>
            ) : project.title}
        </h3>
        <p>{project.description}</p>

        <ul aria-label={`${project.title} technologies`} className="project-card__tags">
            {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>

        {project.liveUrl ? (
            <div className="project-card__links">
                <a
                    aria-label={project.liveLabel}
                    className="project-card__link project-card__link--live"
                    href={project.liveUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <ExternalLink aria-hidden="true" />
                    <span>Open Beer Run</span>
                    <ExternalLink aria-hidden="true" />
                </a>
                <a
                    aria-label={project.githubLabel}
                    className="project-card__link project-card__link--source"
                    href={project.githubUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <CodeXml aria-hidden="true" />
                    <span>{project.repoName}</span>
                    <ExternalLink aria-hidden="true" />
                </a>
            </div>
        ) : (
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
        )}
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
        featured: PropTypes.bool,
        liveUrl: PropTypes.string,
        liveLabel: PropTypes.string,
        logo: PropTypes.string,
    }).isRequired,
};

export default ProjectCard;
