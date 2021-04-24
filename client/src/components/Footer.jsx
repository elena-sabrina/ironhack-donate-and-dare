import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = ({ donor, onSignOut }) => {
  return (
    <nav className='Footer'>
      <div className='Nav'>
        <Link to='/' className='Logo'>
          Donate&Dare
        </Link>
      </div>
    </nav>
  );
};

export default Footer;
