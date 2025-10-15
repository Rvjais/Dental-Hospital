import React from 'react';

const Pill = ({ children }) => {
  return (
    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent shadow bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
      {children}
    </div>
  );
};

export default Pill;