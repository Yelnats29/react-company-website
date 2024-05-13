import './Navbar.css';

const Navbar = ({ onNavItemClick }) => {
    return (
      <nav id='top-navbar'>
        <ul>
          <button onClick={() => onNavItemClick('home')}>Home</button>
          <button onClick={() => onNavItemClick('companyHistory')}>Company History</button>
          <button onClick={() => onNavItemClick('carModels')}>Car Models</button>
          <button onClick={() => onNavItemClick('pastWork')}>Past Work</button>
          <button onClick={() => onNavItemClick('staff')}>Staff</button>
          <button onClick={() => onNavItemClick('contactUs')}>Contact Us</button>
          <button onClick={() => onNavItemClick('externalLinks')}>External Links</button>
        </ul>
      </nav>
    );
  };

export default Navbar;