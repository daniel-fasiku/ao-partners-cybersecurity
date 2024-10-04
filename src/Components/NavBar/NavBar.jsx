import NavLogo from "../../assets/logo-aopartners.png";
import { Link } from "react-router-dom";
import { navLink } from "../../data";
import { Icon } from "@iconify/react";
import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-white py-6 px-12 flex justify-between items-center z-[1000] h-20' >
      <div className="flex items-center gap-32">
        <Link style={{ all: 'unset' }} to="/" >
          <img src={NavLogo} alt="nav-logo" className=" h-[40px] aspect-auto cursor-pointer" />
        </Link>
        <div className="hidden md:flex gap-5" >
          {
            navLink.map((link) => (
              <Link to={link.link} key={link.id} className="ease-in-out transition-all text-[#5488C7] hover:underline font-semibold" >
                {link.pageName}
              </Link>
            ))
          }
        </div>
      </div>
      <button  class="hidden md:flex h-[50px] w-[150px] items-center justify-center overflow-hidden bg-[#EB6B69] text-white  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#5488C7] before:duration-500 before:ease-out hover:shadow-[#5488C7] hover:before:h-56 relative hover:before:w-full">
          <span class=" font-semibold z-10 mr-1">Request Demo</span><Icon icon="fa6-solid:arrow-right" />
        </button>
      <Icon icon="fa6-solid:bars" className="md:hidden block w-6 h-6 text-[#5488C7]" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      {
        isMenuOpen && (
          <div className="md:hidden block fixed top-0 bottom-0 left-[30%] right-0 h-full bg-white" >
            <div className="md:hidden flex pt-[60px] flex-col gap-5 items-center" >
              {
                navLink.map((link) => (
                  <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to={link.link} key={link.id} className="md:hidden block p-[10px] text-[#5488C7]" >
                    {link.pageName}
                  </Link>
                ))
              }
            </div>
            <Icon icon="fa6-solid:x" className="md:hidden block absolute top-[30px] right-[20px] w-[24px] h-[24px]" onClick={() => setIsMenuOpen(!isMenuOpen)} />  
          </div>
        )
      }
    </div>
  )
}

export default NavBar
