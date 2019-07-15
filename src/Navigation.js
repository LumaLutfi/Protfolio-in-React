import React from 'react';
import './css/Navigation.css';
import {NavLink} from 'react-router-dom';

const Navigation = (props)=>(
  <nav>
    <h2 class='logo'><a class="logo-link" href='#'>{props.logoTitle}</a></h2>
    <ul class="nav-menu">
      <li><NavLink className="nav-menu__link" activeClassName="activate" exact to="/">Home</NavLink></li>
      <li><NavLink className="nav-menu__link" activeClassName="activate" to="/Resume">Resume</NavLink></li>
      <li><NavLink className="nav-menu__link" activeClassName="activate" to="/Services">Services</NavLink></li>
      <li><NavLink className="nav-menu__link" activeClassName="activate" to="/Projects">Porjects</NavLink></li>
      <li><NavLink className="nav-menu__link" activeClassName="activate" to="/Contact">Contact</NavLink></li>
    </ul>
  </nav>
);

export default Navigation;