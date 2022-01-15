import React from "react";
import Logo from "../images/Touravel.png";
import { Link } from "react-router-dom";
import InstagramIcon from "../images/instagram-icon.svg";
import FacebookIcon from "../images/facebook-icon.svg";
import TwitterIcon from "../images/twitter-icon.svg";

const Footer = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse py-20 gap-16 lg:flex lg:flex-row">
      <div className="flex flex-col gap-8 items-center lg:items-start lg:w-1/5">
        <img src={Logo} className="w-1/3 lg:w-1/2 " />
        <p>
          The best service to customers is <br /> our top priority in building a
          business
        </p>
        <div className="flex flex-row gap-8 justify-center lg:justify-start">
          <Link to="#">
            <img src={InstagramIcon} className="w-8" />
          </Link>
          <Link to="#">
            <img src={FacebookIcon} className="w-8" />
          </Link>
          <Link to="#">
            <img src={TwitterIcon} className="w-8" />
          </Link>
        </div>
        <p>&copy; Copyright {new Date().getFullYear()} All right reserved</p>
      </div>
      <div className="flex flex-col items-center gap-5 lg:w-1/5">
        <h3 className="font-semibold text-2xl capitalize">About</h3>
        <nav className="text-center flex flex-col gap-5">
          <Link to="#">About us</Link>
          <Link to="#">Features</Link>
          <Link to="#">News</Link>
          <Link to="#">Menu</Link>
        </nav>
      </div>
      <div className="flex flex-col items-center gap-5 lg:w-1/5">
        <h3 className="font-semibold text-2xl capitalize">Company</h3>
        <nav className="text-center flex flex-col gap-5">
          <Link to="#">Why Touravel?</Link>
          <Link to="#">Partners with us</Link>
          <Link to="#">FAQ</Link>
          <Link to="#">Blogs</Link>
        </nav>
      </div>
      <div className="flex flex-col items-center gap-5 lg:w-1/5">
        <h3 className="font-semibold text-2xl capitalize">Support</h3>
        <nav className="text-center flex flex-col gap-5">
          <Link to="#">Account</Link>
          <Link to="#">Support Center</Link>
          <Link to="#">Feedback</Link>
          <Link to="#">Contact us</Link>
          <Link to="#">Accessbility</Link>
        </nav>
      </div>
      <div className="flex flex-col gap-5 lg:w-1/5 items-center lg:items-start">
        <h3 className="font-semibold text-2xl capitalize">Get in touch</h3>
        <p className="capitalize">Questions or feedback</p>
        <div className="flex items-center bg-white rounded-md p-3 w-fit shadow-lg">
          <input
            type="text"
            className="appearance-none placeholder-gray-400 tracking-widest"
            placeholder="Type your email"
          />
          <button className="rounded-full bg-yellowtravel text-white font-semibold px-8 py-3">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
