import './Footer.scss';
import BrandLogo from "../../../assets/Icons/BrandLogo.svg";

function Footer({ footerDesc }) {
  return (
    <footer>
      <div className='container-Footer'>
        <div className='icon-Footer'>
          <img src={BrandLogo} alt='footer logo' />
          <p>{footerDesc}</p>
        </div>
        <div className='links-Footer'>
          <a href="Terms">Terms</a>
          <a href="Privacy">Privacy</a>
          <a href="Support">Support</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
