import React from 'react';
import PropTypes from 'prop-types';
import {useInView} from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';

const SectionHeading = ({title}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <div className="section-heading" ref={ref}>
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
                />
            )}
        </div>
    );
};

SectionHeading.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SectionHeading;
