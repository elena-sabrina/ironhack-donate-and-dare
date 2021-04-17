import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = ({ donor, onSignOut }) => {
  return (
    <nav className='Navbar'>
      <div className='Nav'>
        <Link to='/' className='Logo'>
          Donate&Dare
        </Link>
        <div className='Menu'>
          {(donor && (
            <>
              <Link to='/'>Home</Link>
              <Link to='/dare/all'> Dares</Link>
              <Link to={`/profile/${donor._id}`}>Profile</Link>
              <button onClick={onSignOut}>Sign Out</button>
            </>
          )) || (
            <>
              <Link to='/'>Home</Link>
              <Link to='/dare/all'> Dares</Link>
              <Link to='/sign-in'>SignIn</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
