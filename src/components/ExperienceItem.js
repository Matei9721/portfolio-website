import React from 'react';
import PropTypes from 'prop-types';

const renderSegments = (segments) => segments.map((segment, index) => {
    if (segment.href) {
        return (
            <a href={segment.href} key={`${segment.href}-${index}`} rel="noopener noreferrer" target="_blank">
                {segment.text}
            </a>
        );
    }

    return <React.Fragment key={`text-${index}`}>{segment.text}</React.Fragment>;
});

const ExperienceItem = ({experience, index}) => (
    <article className={`experience-item${index === 0 ? ' experience-item--featured' : ''}`}>
        <header className="experience-item__header">
            <div>
                <p className="experience-item__index">0{index + 1}</p>
                <h3>{experience.company}</h3>
                <p className="experience-item__meta">{experience.location}</p>
            </div>
            <p className="experience-item__dates">{experience.dates}</p>
        </header>
        <div className="experience-roles">
            {experience.roles.map((role, roleIndex) => (
                <section className="experience-role" key={role.id}>
                    <div className="experience-role__marker" aria-hidden="true">
                        <span>{roleIndex + 1}</span>
                    </div>
                    <div className="experience-role__content">
                        <div className="experience-role__heading">
                            <h4>{role.title}</h4>
                            <time>{role.dates}</time>
                        </div>
                        {role.highlights?.length > 0 && (
                            <ul className="experience-highlights">
                                {role.highlights.map((highlight) => (
                                    <li key={highlight.id}>{renderSegments(highlight.segments)}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </section>
            ))}
        </div>
        {experience.skills?.length > 0 && (
            <ul aria-label={`${experience.company} skills`} className="tag-list">
                {experience.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
        )}
    </article>
);

ExperienceItem.propTypes = {
    experience: PropTypes.shape({
        id: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        dates: PropTypes.string.isRequired,
        roles: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            dates: PropTypes.string.isRequired,
            highlights: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                segments: PropTypes.arrayOf(PropTypes.shape({
                    text: PropTypes.string.isRequired,
                    href: PropTypes.string,
                })).isRequired,
            })),
        })).isRequired,
        skills: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    index: PropTypes.number.isRequired,
};

export default ExperienceItem;
