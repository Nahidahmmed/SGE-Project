import "./LatestNews.css";
import { PiStarFourFill } from "react-icons/pi";

export default function LatestNews() {
  return (
    <div className="bg-[#4BA1FF] lg:py-[60px] md:py-[60px] py-[30px] lg:rounded-ss-[30px] md:rounded-ss-[30px] rounded-ss-[15px] lg:rounded-ee-[30px] md:rounded-ee-[30px] rounded-ee-[15px] my-5">
      <div className="marquee-container overflow-hidden bg-white -rotate-2">
        <div className="marquee-content flex">
          {[...Array(5)].map((_, index) => (
            <div className="whitespace-nowrap animate-marquee lg:py-3 md:py-3 " key={index}>
              <p className="lg:text-5xl md:text-5xl text-xl lg:font-normal md:font-normal font-semibold flex items-center ">
                Dashboard <PiStarFourFill className="mx-6 text-[#15C5CE]" />
                Wireframe <PiStarFourFill className="mx-6 text-[#15C5CE]" />
                User ReseArch <PiStarFourFill className="mx-6 text-[#15C5CE]" />
                UX Design <PiStarFourFill className="mx-6 text-[#15C5CE]" />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
