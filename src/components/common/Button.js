// components/Button.js
import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ onClick, type, variant, children, className }) => {
  return (
    <Button
      onClick={onClick}
      type={type || 'button'}  // Default type is 'button'
      variant={variant || 'contained'}
      className={`button ${className || ''}`}  // Custom classes can be added
      style={{ backgroundColor: '#114683', borderRadius: '5px' }} 
    >
      {children}
    </Button>
  );
};

export default CustomButton;
