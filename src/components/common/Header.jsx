import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa6";
import { GrPhone } from "react-icons/gr";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const services = [
    "Dental Implants", "Root Canal", "Teeth Whitening", "Orthodontics", "Cosmetic Dentistry",
  ];

  return (
    <>
      <div className="navbar flex-col">
        <div className="navTop flex justify-around items-center py-5 bg-secondary text-primary">
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
        <div className="navBottom flex justify-around items-center  bg-primary text-white py-5">
          <div className="logo w-[200px] ">
            <img src={logo} alt="Gnathos Dental Care Logo" />
          </div>
          <nav className="navLinks ">
            <ul className="flex gap-10 cursor-pointer text-[15px] font-bold">
              <li>Home</li>
              <li>About Us</li>
              <li
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center gap-1">
                  Our Services <IoIosArrowDown />
                </button>
                {isServicesOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-56 bg-white text-black rounded-md shadow-lg py-2 z-10">
                    {services.map((service) => (
                      <li key={service} className="px-4 py-2 text-sm hover:bg-gray-100">{service}</li>
                    ))}
                  </ul>
                )}
              </li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
