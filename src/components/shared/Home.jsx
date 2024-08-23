import one from "../../assets/images/one.png";
import second from "../../assets/images/second.png";
import third from "../../assets/images/third.png";
import logo from "../../assets/images/logo.png";

import "../shared/Home.css";

import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const data = [one, second, third];
  return (
    <>
      {/* carousel */}
      <div className="sliderAx  flex lg:mx-[20vw] h-[90vh]">
        <div className="sliderAx h-auto">
          <div id="slider-1" className="container mx-auto">
            <div className="bg-cover bg-center  h-auto text-black py-24  object-fill">
              <div className="flex flex-col lg:justify-between lg:flex-row">
                <div className="flex flex-col justify-center">
                  <p className="text-3xl font-bold">
                    ONE STOP SOLUTION FOR ALL YOUR RENTAL NEEDS
                  </p>
                  <p className="font-bold text-sm uppercase mb-10">
                    Beyond rental-Where every mile matters
                  </p>
                  <a
                    href="#"
                    className="bg-purple-800 py-4 px-8 w-[40vw] lg:w-[10vw] text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
                  >
                    Contact us
                  </a>
                </div>
                <div>
                  <img src={data[0]} alt="" />
                </div>
                {/* <p className="text-2xl mb-10 leading-none">Carousel with TailwindCSS and jQuery</p> */}
              </div>
            </div>
            <br></br>
          </div>

          <div id="slider-2" className="container mx-auto">
            <div className="bg-cover bg-top  h-auto text-black py-24  object-fill">
              <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col justify-center mr-[10vw]">
                  <p className="text-3xl font-bold">YOUR RIDE YOUR CHOICE</p>
                  <p className="font-bold text-sm uppercase mb-10">
                    Choose your ride according to your need
                  </p>
                  <a
                    href="#"
                    className="bg-purple-800 py-4 px-8 w-[40vw] lg:w-[10vw] text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
                  >
                    Contact us
                  </a>
                </div>
                <div className="ml-4">
                  <img src={data[1]} alt="" />
                </div>
                {/* <p className="text-2xl mb-10 leading-none">Carousel with TailwindCSS and jQuery</p> */}
              </div>
            </div>
            <br></br>
          </div>
          <div id="slider-3" className="container mx-auto">
            <div className="bg-cover bg-top  h-auto text-black py-24  object-fill">
              <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col justify-center">
                  <p className="text-3xl font-bold">BOOK TAXI</p>
                  <p className="font-bold text-sm uppercase mb-10">
                    You can also book your taxi at ease of one phone call
                  </p>
                  <a
                    href="#"
                    className="bg-purple-800 py-4 px-8 w-[40vw] lg:w-[10vw] text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
                  >
                    Contact us
                  </a>
                </div>
                <div>
                  <img src={data[2]} alt="" />
                </div>
                {/* <p className="text-2xl mb-10 leading-none">Carousel with TailwindCSS and jQuery</p> */}
              </div>
            </div>
            <br></br>
          </div>
        </div>
      </div>

      {/* fleetinfo */}
      <div className="my-16 p-3 lg:w-[70vw] lg:mx-auto">
        <h1 className="text-4xl font-bold text-[#007bff] text-center mb-4">
          <Link to="/fleet">OUR FLEET</Link>
        </h1>
        <p className="font-medium  text-[18px]">
          Shift gears, embrace variety, and let the open road become your canvas
          for unforgettable moments. Your adventure begins with a choice, and
          with us, the choices are as boundless as the roads you&apos;re about
          to conquer.
        </p>
      </div>

      {/* Our services */}
      <div className="bg-stone-100 m-3 gap-4 p-10 w-[90w] flex-col relative lg:flex  lg:justify-between lg:items-center lg:w-[95vw] lg:mx-auto ">
        <div>
          <h1 className="text-3xl mt-[10px] font-bold text-black text-left mb-4 lg:text-4xl">
            OTHER SERVICES WE OFFER
          </h1>
        </div>
        <div className=" relative mt-10  lg:h-[40vh] lg:w-[30vw] lg:mx-auto lg:my-10 ">
          <div className="swatch ">
            <div className="relative ">
              <h1 className="font-bold rotate-90 m-10 text-xl lg:text-2xl lg:m-9 text-white">
                <span>Taxi</span>Booking
              </h1>
            </div>
            <div className="relative  ">
              <h1 className="font-bold rotate-90 m-10 text-xl lg:text-2xl lg:m-9 text-white">
                <span>Chardham</span>Yatra
              </h1>
            </div>
            <div className="relative  ">
              <h1 className="font-bold rotate-90 m-10 text-xl lg:text-2xl lg:m-9 text-white">
                <span>Bungee</span>Jumping
              </h1>
            </div>
            <div className="relative  ">
              <h1 className="font-bold rotate-90 m-10 text-xl  lg:text-2xl lg:m-9 text-white">
                <span>River</span>Rafting
              </h1>
            </div>
            <div className="relative  ">
              <h1 className="font-bold rotate-90 m-10 text-xl lg:text-2xl lg:m-9 text-white">
                <span>Adventurous</span>Sports
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* aboutus */}
      <div className="bg-stone-100 m-3 gap-4 p-10 w-[90w] relative lg:flex lg:justify-between lg:items-center lg:w-[95vw] lg:mx-auto lg:p-[10rem]">
        <img src={logo} alt="logo" className="lg:w-[500px]" />
        <div className="flex flex-col w-[80vw] lg:w-[40vw]">
          <h1 className="text-4xl font-bold text-black text-left mb-4">
            ABOUT US
          </h1>
          <p className="font-medium  text-[18px] text-black-300 mb-4 lg:text-2xl ">
            Welcome to <b>Rishikesh On Wheels</b>, where we&apos;re not just in
            the business of renting bikes; we&apos;re in the business of
            crafting unforgettable adventures. Established with a passion for
            exploration and a commitment to providing exceptional experiences,
            our bike rental service is your gateway to freedom on two wheels.
          </p>
          <Button className="bg-blue-400 mt-4 w-[40vw] rounded-xl px-11 py-6 text-xl lg:w-[10vw] ">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
