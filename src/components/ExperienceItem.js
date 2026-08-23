import React from 'react';
import PropTypes from 'prop-types';

const renderText = (value) => value.split(/(Elsevier)/gi).map((part, index) => (
    part.toLowerCase() === 'elsevier'
        ? <span className="elsevier-text" key={`elsevier-${index}`}>{part}</span>
        : part
));

const renderSegments = (segments) => segments.map((segment, index) => {
    if (segment.href) {
        return (
            <a href={segment.href} key={`${segment.href}-${index}`} rel="noopener noreferrer" target="_blank">
                {renderText(segment.text)}
            </a>
        );
    }

    return <React.Fragment key={`text-${index}`}>{renderText(segment.text)}</React.Fragment>;
});

const ExperienceItem = ({experience}) => (
    <div className="experience-details">
        <ol className="experience-highlights">
            {experience.highlights.map((highlight) => (
                <li key={highlight.id}>
                    <span className="experience-highlights__marker" aria-hidden="true" />
                    <p>{renderSegments(highlight.segments)}</p>
                </li>
            ))}
        </ol>

        {experience.technologies && (
            <div className="experience-technologies">
                <p>Relevant technologies</p>
                <ul aria-label={`${experience.company} relevant technologies`}>
                    {experience.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                    ))}
                </ul>
            </div>
        )}
    </div>
);

ExperienceItem.propTypes = {
    experience: PropTypes.shape({
        company: PropTypes.string.isRequired,
        highlights: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            segments: PropTypes.arrayOf(PropTypes.shape({
                text: PropTypes.string.isRequired,
                href: PropTypes.string,
            })).isRequired,
        })).isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};

export default ExperienceItem;
