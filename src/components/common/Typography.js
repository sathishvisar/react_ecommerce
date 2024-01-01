import React from 'react';

const Typography = ({ variant, children, ...restProps }) => {
  // Define styles based on the variant
  const getStyles = () => {
    switch (variant) {
      case 'h1':
        return { 
          color: '#903D10',
          fontFamily: 'Roboto',
          fontSize: '54px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal'
        };

      case 'h2':
        return { 
          color: '#222',
          fontFamily: 'Roboto',
          fontSize: '36px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          marginBottom: '18px',
        };

      case 'h3':
        return {
          color: '#222',
          fontFamily: 'Roboto',
          fontSize: '22px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: 'normal'
        };

      case 'h4':
        return {
          color: '#222',
          fontFamily: 'Roboto',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: 'normal'
        };

      case 'h5':
        return { };

      case 'h6':
        return { };

      case 'p':
        return {
          color: 'rgba(0, 0, 0, 0.70)',
          fontFamily: 'Roboto',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal'
        };

      default:
        return {};
    }
  };

  const styles = getStyles();

  return React.createElement(
    variant,
    { style: { ...styles, ...restProps.style } },
    children
  );
};

export default Typography;
