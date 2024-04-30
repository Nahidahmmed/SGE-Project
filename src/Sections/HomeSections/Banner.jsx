import { useState } from "react";
import banner from "../../../public/banner.jpg";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Banner() {
  //   const [isHovered, setIsHovered] = useState(false);
  const [isHovered, setIsHovered] = useState(true);
  return (
    <div
      className="lg:h-[650px] md:h-[650px] h-[520px] bg-cover bg-right rounded-3xl"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="w-full h-full lg:bg-transparent md:bg-transparent bg-white bg-opacity-25">
        <div className=" max-w-screen-xl mx-auto roboto-bold lg:pt-24 md:pt-24 pt-14 ">
          <h1 className="xl:text-8xl lg:text-8xl md:text-8xl text-5xl xl:font-bold lg:font-bold md:font-bold font-extrabold text-[#00399F] lg:leading-[7rem] md:leading-[7rem] leading-[3.5rem] lg:text-left md:text-left text-center">
            Start Your Path to Global Education
          </h1>
          <p className="xl:text-2xl lg:text-2xl md:text-2xl text-lg pt-5 text-[#081831] xl:px-0 lg:px-0 md:px-0 px-[5%]">
            We take pride in our ability to help students achieve their academic
            goals and succeed in life.
          </p>
          {/*  */}
          <div className="lg:w-[367px]  md:w-[367px] w-[60%] lg:mx-0 md:mx-0 mx-auto bg-white bg-opacity-50 backdrop-blur-[3px] lg:py-2 md:py-2 py-[5px] lg:px-4 md:px-4 px-[10px] border-white lg:border-2 md:border-2 border-[1px] rounded-full overflow-hidden mt-20 items-center">
            <div className="flex lg:text-2xl md:text-2xl text-base text-white">
              <button
                className={`flex-1 mr-2 rounded-full flex items-center justify-center transition-all duration-300 transform ${
                  isHovered ? "scale-110 " : "scale-100 hover:scale-105"
                } ${isHovered ? "bg-[#004AC8] pr-8 pl-4" : ""}`}
              >
                Enquire
                {isHovered && (
                  <MdOutlineArrowOutward
                    className={`transition-all duration-300 transform ml-1 text-2xl mt-2 ${
                      isHovered ? "scale-110" : "scale-0"
                    }`}
                  />
                )}
              </button>
              <button
                className={`flex-1 ml-2 lg:py-3 md:py-3 py-1 rounded-full flex items-center justify-center transition-all duration-300 transform ${
                  isHovered ? "scale-100" : "scale-110 hover:scale-105"
                } ${isHovered ? "" : "bg-[#004AC8] lg:pl-0 md:pl-0 pl-3 pr-6"}`}
                onMouseEnter={() => setIsHovered(false)}
                onMouseLeave={() => setIsHovered(true)}
              >
                Apply{" "}
                {!isHovered && (
                  <MdOutlineArrowOutward
                    className={`transition-all duration-300 transform ml-1 text-2xl mt-2 ${
                      isHovered ? "scale-0" : "scale-110"
                    }`}
                  />
                )}
              </button>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}
