import React from 'react';
import {Card, Tabs} from 'antd';

import {workExperience} from '../content/workExperience';
import ExperienceItem from './ExperienceItem';

const WorkProjects = () => (
    <Card className="experience-card">
        <Tabs
            className="experience-tabs"
            defaultActiveKey={workExperience[0].id}
            items={workExperience.map((experience) => ({
                key: experience.id,
                label: experience.company,
                children: <ExperienceItem experience={experience} />,
            }))}
            more={{icon: <span>More work experiences</span>}}
            size="small"
            tabPosition="left"
        />
    </Card>
);

export default WorkProjects;
