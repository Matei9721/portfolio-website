import React from 'react';

const orbitCount = 9;

const BackgroundDoodles = () => (
    <div aria-hidden="true" className="background-doodles" data-testid="background-doodles">
        {Array.from({length: orbitCount}, (_, index) => (
            <svg
                className={`background-doodle background-doodle--orbit-${index + 1}`}
                key={`background-orbit-${index + 1}`}
                viewBox="0 0 220 220"
            >
                <circle className="background-doodle__orbit-ring" cx="110" cy="110" r="82" />
                <circle className="background-doodle__orbit-ring" cx="110" cy="110" r="52" />
                <circle className="background-doodle__orbit-node" cx="110" cy="28" r="7" />
                <circle className="background-doodle__orbit-node" cx="188" cy="135" r="7" />
                <circle className="background-doodle__orbit-node" cx="67" cy="176" r="7" />
            </svg>
        ))}
    </div>
);

export default BackgroundDoodles;
