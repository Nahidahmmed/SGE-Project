import "./LatestNews.css";
import { PiStarFourFill } from "react-icons/pi";

export default function LatestNews() {
  return (
    <div className="bg-[#4BA1FF] py-[60px] rounded-ss-[30px] rounded-ee-[30px]">
      <div className="marquee-container overflow-hidden bg-white origin-bottom -rotate-2">
        <div className="marquee-content flex">
          {[...Array(5)].map((_, index) => (
            <div className="whitespace-nowrap animate-marquee py-3" key={index}>
              <p className="text-5xl flex items-center ">
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
