import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa6";
import { GrPhone } from "react-icons/gr";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const services = [
    "Dental Implants", "Root Canal", "Teeth Whitening", "Orthodontics", "Cosmetic Dentistry",
  ];

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "/about" },
    { 
      name: "Our Services", 
      href: "#", 
      subLinks: services.map(service => ({ name: service, href: "#" })) 
    },
    { name: "Blog", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="navbar flex-col">
        <div className="navTop hidden md:flex justify-around items-center py-5 bg-secondary text-primary w-full">
          <div className="location flex gap-1 items-center">
            <MdOutlineLocationOn className="text-xl " />
            <p className="text-[15px]"  > 
              Care Hospital, Near Cyberabad Police Commissionerate, Jayabheri
              Pine Valley, Hitech City, Hyderabad, 500032
            </p>
          </div>
          <div className="mail flex gap-1 items-center">
            <FaRegEnvelope />
            <p className="text-[15px]">gnathosdentalcare@gmail.com</p>
          </div>
          <div className="phone flex gap-1 items-center">
            <GrPhone />
            <p>+91 9955708885</p>
          </div>
          <div className="socials flex gap-2 items-center">
            <a href="#" aria-label="Facebook" className="hover:opacity-75 transition-opacity">
              <TiSocialFacebookCircular className="text-2xl" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-75 transition-opacity">
              <FaInstagram className="text-lg" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-75 transition-opacity">
              <FaXTwitter className="text-lg" />
            </a>
          </div>
        </div>
        <div className="navBottom flex justify-between md:justify-around items-center bg-primary text-white py-5 w-full px-4 md:px-0">
          <div className="logo w-[200px] ">
            <img src={logo} alt="Gnathos Dental Care Logo" />
          </div>
          <nav className="navLinks hidden md:block">
            <ul className="flex gap-10 cursor-pointer text-[15px] font-bold">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className={link.subLinks ? "relative" : ""}
                  onMouseEnter={() => link.subLinks && setIsServicesOpen(true)}
                  onMouseLeave={() => link.subLinks && setIsServicesOpen(false)}
                >
                  <a href={link.href} className="flex items-center gap-1">
                    {link.name} {link.subLinks && <IoIosArrowDown />}
                  </a>
                  {link.subLinks && isServicesOpen && (
                    <ul className="absolute top-full left-0 mt-2 w-56 bg-white text-black rounded-md shadow-lg py-2 z-10">
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.name} className="px-4 py-2 text-sm hover:bg-gray-100">
                          <a href={subLink.href}>{subLink.name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} aria-label="Open mobile menu">
              <RxHamburgerMenu className="text-3xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-primary z-50 flex flex-col items-center p-5 md:hidden">
          <div className="w-full flex justify-between items-center mb-10">
             <div className="logo w-[200px] ">
              <img src={logo} alt="Gnathos Dental Care Logo" />
            </div>
            <button onClick={toggleMobileMenu} aria-label="Close mobile menu">
              <RxCross1 className="text-3xl text-white" />
            </button>
          </div>
          <nav className="w-full">
            <ul className="flex flex-col items-center gap-8 text-white text-lg font-bold">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full text-center">
                  {link.subLinks ? (
                    <div>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="flex items-center justify-center w-full gap-1"
                      >
                        {link.name} <IoIosArrowDown className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isMobileServicesOpen && (
                        <ul className="mt-4 space-y-4">
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.name}><a href={subLink.href} onClick={toggleMobileMenu}>{subLink.name}</a></li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a href={link.href} onClick={toggleMobileMenu}>{link.name}</a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
