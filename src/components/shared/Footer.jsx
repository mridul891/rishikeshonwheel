import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="">
      {/* contactinfo */}
      <div className="py-10 flex flex-col items-center bg-[#010000] text-white gap-3 m-5">
        {/* whatsapp */}
        <div className="flex flex-col items-center text-xl">
          <span>
            <FaPhoneAlt />
          </span>
          <Link to="tel:+919999934003">Call : +91 9999 934 003</Link>
        </div>
        {/* email */}
        <div className="flex flex-col items-center text-xl">
          <span>
            <IoIosMail />
          </span>
          <Link to="mailto:info@rishikeshonwheels.com">
            Email : info@rishikeshonwheels.com
          </Link>
        </div>
      </div>

      {/* copywrite */}
      <div>
        <p>
          &copy; 2024 All Rights Reserved By Rishikesh On Wheels Distribution
          @kamisama
        </p>
      </div>
    </div>
  );
};

export default Footer;
