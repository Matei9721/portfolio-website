import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';
import {GithubOutlined, QuestionCircleOutlined} from '@ant-design/icons';

import SocialLink from './SocialLink';

const {Meta} = Card;

const ProjectCard = ({project}) => (
    <Card
        className="project-card"
        cover={
            <img
                alt={project.image.alt}
                className={`project-card__image ${project.image.className}`}
                src={project.image.src}
            />
        }
        hoverable={project.hoverable}
        actions={[
            <SocialLink
                key="github"
                href={project.githubUrl}
                icon={<GithubOutlined aria-hidden="true" />}
                label={project.githubLabel}
            />,
            <QuestionCircleOutlined aria-hidden="true" key="details" />,
        ]}
    >
        <Meta
            className="project-card__meta"
            description={project.description}
            title={project.title}
        />
    </Card>
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
        hoverable: PropTypes.bool,
    }).isRequired,
};

export default ProjectCard;
