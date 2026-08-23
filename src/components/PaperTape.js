import React from 'react';
import PropTypes from 'prop-types';

const PaperTape = ({position = 'center'}) => (
    <span aria-hidden="true" className={`paper-tape paper-tape--${position}`} />
);

PaperTape.propTypes = {
    position: PropTypes.oneOf(['center', 'left', 'right']),
};

export default PaperTape;
