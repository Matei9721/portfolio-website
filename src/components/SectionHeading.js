import React from 'react';
import PropTypes from 'prop-types';

const SectionHeading = ({title, eyebrow}) => (
    <header className="section-heading">
        <p>{eyebrow}</p>
        <h2>{title}<span aria-hidden="true">.</span></h2>
    </header>
);

SectionHeading.propTypes = {
    title: PropTypes.string.isRequired,
    eyebrow: PropTypes.string.isRequired,
};

export default SectionHeading;
