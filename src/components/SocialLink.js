import React from 'react';
import PropTypes from 'prop-types';

const SocialLink = ({href, label, icon, onClick, className = ''}) => {
    const linkClassName = ['social-link', className].filter(Boolean).join(' ');

    return (
        <a
            aria-label={label}
            className={linkClassName}
            href={href}
            onClick={onClick}
            rel="noopener noreferrer"
            target="_blank"
        >
            {icon}
        </a>
    );
};

SocialLink.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default SocialLink;
