import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [check, setCheck] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:px-10 lg:items-center">
      <div className="flex justify-between px-5 lg:px-4 ">
        <div className="flex items-center gap-1">
          <img src={logo} alt="logo" className="w-[70px] lg:w-[180px]"/>
          <h1 className="font-bold text-xl lg:text-3xl">RISHIKESH ON WHEELS</h1>
        </div>
        <button onClick={() => setCheck((prevCheck) => !prevCheck)}>
          {check ? (
            <IoMenu className="w-10 h-10 lg:hidden" />
          ) : (
            <RxCross2 className="w-10 h-10 lg:hidden" />
          )}
        </button>
      </div>
      <div className={check ? "hidden" : ""}>
        <ul className="flex flex-col items-center gap-3 text-lg font-medium lg:flex-row lg:m-10 lg:p-10 lg:gap-10 lg:text-xl lg:font-medium">
          <li className="list-none">
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/fleet">OUR FLEET</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
