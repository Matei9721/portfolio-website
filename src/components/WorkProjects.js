import React from 'react';

import {workExperience} from '../content/workExperience';
import ExperienceItem from './ExperienceItem';
import PaperTape from './PaperTape';

const WorkProjects = () => (
    <div className="experience-list">
        {workExperience.map((experience) => (
            <article className={`experience-entry experience-entry--${experience.id}`} key={experience.id}>
                <PaperTape position="left" />
                <PaperTape position="right" />
                <div className="experience-entry__index">{experience.period}</div>
                <header className="experience-entry__header">
                    <p>{experience.company}</p>
                    <h3>{experience.role}</h3>
                    {experience.progression && (
                        <ol aria-label={`${experience.company} role progression`} className="experience-progression">
                            {experience.progression.map((step) => (
                                <li key={`${step.role}-${step.period}`}>
                                    <span>{step.role}</span>
                                    <time>{step.period}</time>
                                </li>
                            ))}
                        </ol>
                    )}
                </header>
                <ExperienceItem experience={experience} />
            </article>
        ))}
    </div>
);

export default WorkProjects;
