import NavLogo from "../../assets/logo-aopartners.png";
import { Link } from "react-router-dom";
import { navLink } from "../../data";
import { Icon } from "@iconify/react";
import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='nav-container' >
      <div className="nav-left-section">
        <Link style={{ all: 'unset' }} to="/" >
          <img src={NavLogo} alt="nav-logo" className="nav-logo" />
        </Link>
        <div className="nav-links-container" >
          {
            navLink.map((link) => (
              <Link to={link.link} key={link.id} className="nav-link" >
                {link.pageName}
              </Link>
            ))
          }
        </div>
      </div>
      <button className="nav-btn" >
        Request Demo
      </button>
      <Icon icon="fa6-solid:bars" className="nav-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      {
        isMenuOpen && (
          <div className="nav-menu-container" >
            <div className="nav-menu-links-container" >
              {
                navLink.map((link) => (
                  <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to={link.link} key={link.id} className="nav-menu-link" >
                    {link.pageName}
                  </Link>
                ))
              }
            </div>
            <Icon icon="fa6-solid:x" className="nav-menu-close-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} />  
          </div>
        )
      }
    </div>
  )
}

export default NavBar
