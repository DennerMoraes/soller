import { useState } from 'react';
import Button from '../Button/Button';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.scss';
import Soller from "../../assets/Header/soller.svg";
import HeadPhone from "../../assets/Header/HeadPhone.svg"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={Soller} alt="Icon Soller" />
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="Products">Products</a>
          <a href="Solutions">Solutions</a>
          <a href="Services">Services</a>
          <a href="Configure">Configure</a>
        </nav>

        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <div className="right-items">
          <div className='contact-info'>
            <img src={HeadPhone} alt='HeadPhone' />
            <p>555 818 282</p>
          </div>
          <Button variation={'line-purple'} label={'Request a Quote'} />
        </div>
      </div>
    </header>
  );
}

export default Header;
