import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import whatsap from "../../assets/images/whatsap.png";
const Footer = () => {
  return (
    <div className="p-4 font-mono lg:px-10 ">
      {/* contactinfo */}
      <div className=" bg-[#191e1f] text-white py-[4.5rem] mb-4 lg:flex lg:justify-around lg:py-[4rem]">
        {/* whatsapp */}
        <div className="flex flex-col items-center text-lg mb-3 hover:text-[#FFA500]">
          <span>
            <FaPhoneAlt />
          </span>
          <Link to="tel:+919999934003">Call : +91 9999 934 003</Link>
        </div>
        {/* email */}
        <div className="flex flex-col items-center text-lg mb-3 hover:text-[#FFA500]">
          <span>
            <IoIosMail />
          </span>
          <Link to="mailto:info@rishikeshonwheels.com">
            Email : info@rishikeshonwheels.com
          </Link>
        </div>
        {/* whatsapp */}
        <Link to="https://wa.me/919999934003">
          <div className="flex justify-center">
            <img
              src={whatsap}
              alt="whatsappp"
              width={200}
            />
          </div>
        </Link>
      </div>

      {/* copywrite */}
      <div className="lg:text-center">
        <p>
          &copy; 2024 All Rights Reserved By Rishikesh On Wheels Distribution
          @kamisama
        </p>
      </div>
    </div>
  );
};

export default Footer;
