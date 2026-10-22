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
                <header className="experience-entry__header">
                    <div>
                        <p className="experience-entry__company">{experience.company}</p>
                        <h3>{experience.role}</h3>
                    </div>
                    <span className="experience-entry__index">{experience.period}</span>
                </header>
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
                <ExperienceItem experience={experience} />
            </article>
        ))}
    </div>
);

export default WorkProjects;
