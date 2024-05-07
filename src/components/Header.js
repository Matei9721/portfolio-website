import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';

const MyComponent = ({ title }) => {
    const [startTyping, setStartTyping] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true, // Ensures it triggers only once
    });

    return (
        <div ref={ref} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color:"#F8F8F2FF", "margin": 25}}>
            {inView && (
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(`<span class="typewriter-string">${title}</span>`)
                            .start();
                    }}
                    options={{
                        loop: false,
                        cursor: '<span class="typewriter-cursor"></span>',
                    }}
                    startTyping={startTyping}
                />
            )}
        </div>
    );
};

export default MyComponent;
