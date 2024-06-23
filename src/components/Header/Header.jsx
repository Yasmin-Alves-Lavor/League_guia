import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imagens/LoL_Logo_nome_branco.png';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo LOL" className='logo'/>
      </div>
      <div className="header-right">
        <nav>
          <ul className="navList">
            <li className="navItem"><Link to="/">HOME</Link></li>
            <li className="navItem"><Link to="/champions">CAMPEÕES</Link></li>
            <li className="navItem"><Link to="/items">ITENS</Link></li>
            <li className="navItem"><Link to="/stories">HISTÓRIAS</Link></li>
            <li className="navItem"><Link to="/news">NOTÍCIAS</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


