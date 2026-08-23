import React from 'react';

import {workExperience} from '../content/workExperience';
import ExperienceItem from './ExperienceItem';

const WorkProjects = () => (
    <div className="experience-list">
        {workExperience.map((experience, index) => (
            <ExperienceItem experience={experience} index={index} key={experience.id} />
        ))}
    </div>
);

export default WorkProjects;
