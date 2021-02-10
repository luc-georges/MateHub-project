import React, {useEffect} from 'react';
import './style.scss';

const NotFound = () => {
  useEffect(() => {
    document.title = `MateHub: Page not found`
 }, []);
  return (
    <div className="notfoundpage"></div>
)};

export default NotFound;
