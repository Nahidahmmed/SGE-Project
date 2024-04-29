import { useState } from "react";
import banner from "../../../public/banner.jpg";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Banner() {
  //   const [isHovered, setIsHovered] = useState(false);
  const [isSecondButtonHovered, setIsSecondButtonHovered] = useState(true);
  return (
    <div
      className="relative h-[650px] bg-cover bg-center rounded-3xl"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className=" max-w-screen-xl mx-auto roboto-bold pt-24">
        <h1 className="text-8xl font-bold text-[#00399F]">
          Start Your Path to <br /> Global Education
        </h1>
        <p className="text-2xl pt-5 text-[#081831]">
          We take pride in our ability to help students achieve their <br />{" "}
          academic goals and succeed in life.
        </p>
        {/*  */}
        <div className="w-[367px] bg-white bg-opacity-50 backdrop-blur-md py-2 px-4 border-white border-2 rounded-full overflow-hidden">
          <div className="flex text-2xl text-white">
            <button
              className={`flex-1 mr-2 py-3 rounded-full flex items-center justify-center transition-all duration-300 transform ${
                isSecondButtonHovered
                  ? "scale-110 "
                  : "scale-100 hover:scale-105"
              } ${isSecondButtonHovered ? "bg-[#004AC8] pr-8 pl-4" : ""}`}
            >
              Enquire{" "}
              {isSecondButtonHovered && (
                <MdOutlineArrowOutward
                  className={`transition-all duration-300 transform ml-1 ${
                    isSecondButtonHovered ? "scale-110" : "scale-0"
                  }`}
                />
              )}
            </button>
            <button
              className={`flex-1 ml-2 py-3 rounded-full flex items-center justify-center transition-all duration-300 transform ${
                isSecondButtonHovered
                  ? "scale-100"
                  : "scale-110 hover:scale-105"
              } ${isSecondButtonHovered ? "" : "bg-[#004AC8] pr-6"}`}
              onMouseEnter={() => setIsSecondButtonHovered(false)}
              onMouseLeave={() => setIsSecondButtonHovered(true)}
            >
              Apply{" "}
              {!isSecondButtonHovered && (
                <MdOutlineArrowOutward
                  className={`transition-all duration-300 transform ml-1 ${
                    isSecondButtonHovered ? "scale-0" : "scale-110"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
}
