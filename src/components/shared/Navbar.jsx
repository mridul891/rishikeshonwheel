import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [check, setCheck] = useState(true);
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex justify-between px-5">
        <div className="flex items-center ">
          <img src={logo} alt="logo" width={70} />
          <h1 className="font-bold text-xl">RISHIKESH ON WHEELS</h1>
        </div>
        <button onClick={() => setCheck((prevCheck) => !prevCheck)}>
          {check ? (
            <IoMenu className="w-10 h-10" />
          ) : (
            <RxCross2 className="w-10 h-10" />
          )}
        </button>
      </div>
      <div className={check ? "hidden" : ""}>
        <ul className="flex flex-col items-center gap-3 text-lg">
          <li className="list-none">
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/our-fleet">OUR FLEET</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/conatct-us">CONTACT US</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
