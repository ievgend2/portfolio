import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css'
import pdf from "../Resume/ID Resume.pdf";


import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
    <header className="main-navigation ">
      {/* <div classNmae="main-navigation_logo"></div> */}
      <nav className="main-navigation_item justify-content-between ">
        {/* <div> */}
        <span className="d-flex align-items-center f-large">Portfolio</span>
        <ul>
          <li>
            <NavLink to={ROUTES.PROJECTS}>Projects</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.SKILLS}>Certifications</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
          </li>
          <li>
            <a href={pdf} rel="noopener noreferrer" target="_blank" >Resume</a>
          </li>

        </ul>
        {/* </div> */}
      </nav>
    </header>
  </div>
);

export default Navigation;