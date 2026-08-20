import React from 'react';
import {Card, Grid, Tabs} from 'antd';

import {workExperience} from '../content/workExperience';
import ExperienceItem from './ExperienceItem';

const {useBreakpoint} = Grid;

const WorkProjects = () => {
    const screens = useBreakpoint();

    return (
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
                tabPosition={screens.lg ? 'left' : 'top'}
            />
        </Card>
    );
};

export default WorkProjects;
