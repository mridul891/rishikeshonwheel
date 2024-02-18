import { Card, CardContent } from "@/components/ui/card";
import one from "../../assets/images/one.png";
import second from "../../assets/images/second.png";
import third from "../../assets/images/third.png";
import logo from "../../assets/images/logo.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Data from "@/assets/constant/data";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const data = [one, second, third];
  return (
    <>
      <div className="bg-stone-100 lg:w-[95vw] lg:mx-auto lg:p-[10rem]">
        {/* carousel */}
        <Carousel className="w-full">
          <CarouselContent id="parallax">
            {Data.map((_, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-none">
                  <CardContent className="flex flex-col  items-start justify-between p-6">
                    <h1 className="text-4xl font-bold mb-4 font-Poppins">
                      {_.heading}
                    </h1>
                    <span className="mb-4 font-mono">{_.des}</span>
                    <img src={data[index]} width={index == 0 ? 300 : 500} />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden" />
          <CarouselNext className="hidden" />
        </Carousel>
      </div>
      {/* fleetinfo */}
      <div className="my-16 p-3 lg:w-[70vw] lg:mx-auto">
        <h1 className="text-4xl font-bold text-[#007bff] text-center mb-4">
          <Link to='/fleet'>
            OUR FLEET
          </Link>
        </h1>
        <p className="font-medium  text-[18px]">
          Shift gears, embrace variety, and let the open road become your canvas
          for unforgettable moments. Your adventure begins with a choice, and
          with us, the choices are as boundless as the roads you&apos;re about
          to conquer.
        </p>
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
            the business of renting bikes; we&apos;re in the business of crafting
            unforgettable adventures. Established with a passion for exploration
            and a commitment to providing exceptional experiences, our bike rental
            service is your gateway to freedom on two wheels.
          </p>
          <Button className="bg-blue-400 mt-4 w-[40vw] rounded-xl px-11 py-6 text-xl lg:w-[10vw] ">Contact Us</Button>
        </div>
      </div>
    </>
  );
};

export default Home;
