import React, { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Typed from 'typed.js';

const TextContainer = styled.div`
  display: inline-block;
`;

const TypeEffect = ({ text, isDeleting, delay }) => {
    const textRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: [text],
            typeSpeed: 50,
            backSpeed: isDeleting ? 30 : 0,
            backDelay: delay,
            loop: true,
            smartBackspace: true,
            onComplete: (self) => {
                if (isDeleting) {
                    // Get the current strings array
                    const stringsArray = self.strings;

                    // Get the last string in the array
                    const lastString = stringsArray[stringsArray.length - 1];

                    // Split the string into words
                    const words = lastString.split(' ');

                    // Remove the last 2 words
                    const shortenedString = words.slice(0, -2).join(' ');

                    // Update the strings array with the shortened string
                    self.strings[self.strings.length - 1] = shortenedString;

                    // Reset Typed.js to show the shortened string
                    self.reset();
                }
            },
        };

        const typed = new Typed(textRef.current, options);

        return () => {
            typed.destroy();
        };
    }, [text, isDeleting, delay]);

    return (
        <TextContainer>
            <span ref={textRef} />
        </TextContainer>
    );
};

export default TypeEffect;
