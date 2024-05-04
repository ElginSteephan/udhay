import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <header>
      <span className="logo">
        <img src="/asset/logo.png" className="navLogo" alt="lo"/>
        <p>UDHAY SHIPPING</p>
      </span>

      <div className="link">
        <a>Home</a>
        <a>About</a>
        {/* Replace the "Team" link with WhatsApp icon */}
        <a href="whatsapp://send?phone=+919429001570" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} size="lg"  color="green"/> Contact Us{/* Adjust size here */}
        </a>
      </div>
    </header>
  );
}

export default Navbar;
