import React from 'react';
import PropTypes from 'prop-types';
import {Timeline} from 'antd';

const renderSegments = (segments) => segments.map((segment, index) => {
    if (segment.href) {
        return (
            <a href={segment.href} key={`${segment.href}-${index}`}>
                {segment.text}
            </a>
        );
    }

    return <React.Fragment key={`text-${index}`}>{segment.text}</React.Fragment>;
});

const ExperienceItem = ({experience}) => (
    <div className="experience-item">
        <br />
        <strong>{experience.role}</strong>
        <br />
        <br />
        <Timeline
            items={experience.highlights.map((highlight) => ({
                key: highlight.id,
                children: renderSegments(highlight.segments),
            }))}
        />
    </div>
);

ExperienceItem.propTypes = {
    experience: PropTypes.shape({
        role: PropTypes.string.isRequired,
        highlights: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            segments: PropTypes.arrayOf(PropTypes.shape({
                text: PropTypes.string.isRequired,
                href: PropTypes.string,
            })).isRequired,
        })).isRequired,
    }).isRequired,
};

export default ExperienceItem;
