import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({project, index}) => (
    <article className="project-card">
        <div className="project-card__visual">
            <img
                alt={project.image.alt}
                className={`project-card__image ${project.image.className}`}
                loading="lazy"
                src={project.image.src}
            />
            <span className="project-card__number">0{index + 1}</span>
        </div>
        <div className="project-card__body">
            <p className="project-card__eyebrow">Personal experiment</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul aria-label={`${project.title} technologies`} className="tag-list">
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <a className="project-card__link" href={project.githubUrl} rel="noopener noreferrer" target="_blank">
                <span>{project.githubLabel}</span>
                <span aria-hidden="true">↗</span>
            </a>
        </div>
    </article>
);

ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            className: PropTypes.string.isRequired,
        }).isRequired,
        githubUrl: PropTypes.string.isRequired,
        githubLabel: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

export default ProjectCard;
