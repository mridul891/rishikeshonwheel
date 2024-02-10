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

const Home = () => {
  const data = [one, second, third];
  return (
    <>
      <div className="bg-stone-100 m-3">
        {/* carousel */}
        <Carousel className="w-full">
          <CarouselContent className="animate-accordion-up">
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      {/* fleetinfo */}
      <div className="my-16 p-3">
        <h1 className="text-4xl font-bold text-[#007bff] text-center mb-4">
          OUR FLEET
        </h1>
        <p className="text-[18px] font-medium">
          Shift gears, embrace variety, and let the open road become your canvas
          for unforgettable moments. Your adventure begins with a choice, and
          with us, the choices are as boundless as the roads you&apos;re about
          to conquer.
        </p>
      </div>

      {/* aboutus */}
      <div className="bg-stone-100 m-3 gap-4 p-10">
        <img src={logo} alt="logo" />
        <h1 className="text-4xl font-bold text-black text-left mb-4">
          ABOUT US
        </h1>
        <p className="text-lg font-semibold">
          Welcome to <b>Rishikesh On Wheels</b>, where we&apos;re not just in
          the business of renting bikes; we&apos;re in the business of crafting
          unforgettable adventures. Established with a passion for exploration
          and a commitment to providing exceptional experiences, our bike rental
          service is your gateway to freedom on two wheels.
        </p>
      </div>
    </>
  );
};

export default Home;
