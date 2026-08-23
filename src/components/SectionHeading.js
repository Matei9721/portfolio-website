import React from 'react';
import PropTypes from 'prop-types';

const SectionHeading = ({title}) => (
    <header className="section-heading">
        <h2>{title}</h2>
    </header>
);

SectionHeading.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SectionHeading;
