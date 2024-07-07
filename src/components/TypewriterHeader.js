import React, {useState} from 'react';
import {useInView} from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';

/**
 * React re-utilizable component that renders a header with a typewriter effect.
 * @param title - Header name
 * @returns {JSX.Element}
 *
 * @example
 * <TypewriterHeader title="Welcome to My Website" />
 */
const TypewriterHeader = ({title}) => {
    const [startTyping] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true, // Ensures it triggers only once
    });

    // Header styles
    const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#F8F8F2FF",
        "margin": 25
    }

    return (
        <div ref={ref} style={headerStyle}>
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

export default TypewriterHeader;
