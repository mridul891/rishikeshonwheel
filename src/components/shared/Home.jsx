import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Data from "@/assets/constant/data";

const Home = () => {
  return (
    <div className="bg-stone-100 m-3">
      <Carousel className="w-full">
        <CarouselContent className="animate-loop-scroll dealy-200">
          {Data.map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="border-none shadow-none">
                  <CardContent className="flex flex-col aspect-square items-start justify-start p-6">
                    <h1 className="text-4xl font-bold">{_.heading}</h1>
                    <span className="">{_.des}</span>
                    <img src={_.url} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Home;
