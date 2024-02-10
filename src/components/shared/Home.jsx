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
                <Card className="">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{_.des}</span>
                    <img src={_.url}/>
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
