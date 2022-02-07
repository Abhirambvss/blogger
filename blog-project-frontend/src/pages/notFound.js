import React from 'react';
import {Link} from 'react-router-dom'
import Home from './Home'
const NotFound = () => {
  return <div className="m-40 p-2">
      <h1 className="sm:text-4xl text-2xl font-bold text-center">404 Not Found</h1>
      <div className="p-2 my-6">
      <Link className="p-2 border-2 border-green-500" to="/" element={<Home/>}>Back to Home</Link>
      </div>
  </div>;
};

export default NotFound;
