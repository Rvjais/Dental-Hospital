import React from 'react';

const Button = ({ children, variant = 'primary', className = '' }) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md px-8";

  const variantClasses = {
    primary: "bg-primary text-primary-foreground shadow hover:bg-primary/90 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600",
    secondary: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;