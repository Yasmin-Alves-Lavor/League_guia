import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="navList">
          <li className="navItem"><Link to="/">HOME</Link></li>
          <li className="navItem"><Link to="/champions">CAMPEÕES</Link></li>
          <li className="navItem"><Link to="/items">ITENS</Link></li>
          <li className="navItem"><Link to="/stories">HISTÓRIAS</Link></li>
          <li className="navItem"><Link to="/news">NOTÍCIAS</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
