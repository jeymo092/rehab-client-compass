
import React from 'react';
import { Link } from 'react-router-dom';

const AuthHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <Link to="/" className="text-xl font-bold text-rehabilitation-accent">
        MWANGAZA
      </Link>
      <div className="h-1 w-1 bg-rehabilitation-accent rounded-full"></div>
    </div>
  );
};

export default AuthHeader;
