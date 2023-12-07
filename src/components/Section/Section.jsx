import PropTypes from 'prop-types';
import React from 'react';

const Section = ({ title, children }) => {
  return  <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <h2>{title}</h2>
        {children}
    </div>
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Section;