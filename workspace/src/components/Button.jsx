import React from 'react';

const Button = ({ children, className, ...props }) => {
  const baseStyles = "px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50";
  const mergedStyles = `${baseStyles} ${className || ""}`;

  return (
    <button className={mergedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
