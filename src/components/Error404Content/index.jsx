import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';


/**
 * It returns a 404 page content
 * @returns A React component
 */
const Error404Content = () => {
  return (
      <div className='error-container'>
        <h1 className='error_title1'>404</h1>
        <h3 className='error_title2'>PAGE NOT FOUND</h3>
        <Link className='error_link' to="/sportsee/home?user=12">Revenir sur la dernière page visitée</Link>
      </div>
  );
}

export default Error404Content;
