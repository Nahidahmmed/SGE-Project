import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export const Reviews = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliders.length - 1 : currentSlider - 1
    );

  return (
    <div className="bg-gradient-to-r from-[#031EE5] to-[#2081ff] overflow-hidden">
      <div className="lg:flex md:flex block lg:ml-[15%] md:ml-[15%] ml-[0%] relative">
        <div className="lg:w-[26%] md:w-[26%] w-full px-4 drop-shadow-lg ">
          <h1 className="text-7xl font-bold mb-3 bg-gradient-to-r from-[#88F3D0] to-[#88F3D0] bg-clip-text text-transparent w-[100%] transition-all duration-300 my-20 lg:text-left md:text-left text-center">
            Become a Part of Our Success Stories
          </h1>
          <div className="flex gap-3 px-5 pt-[60%]">
            <button
              onClick={prevSlider}
              className="flex justify-center items-center text-white border-white border-[2px] text-5xl hover:bg-white rounded-full p-3 hover:text-black transition-colors duration-300"
            >
              <GoArrowLeft />
            </button>
            <button
              onClick={nextSlider}
              className="flex justify-center items-center text-white border-white border-[2px] text-5xl hover:bg-white rounded-full p-3 hover:text-black transition-colors duration-300"
            >
              <GoArrowRight />
            </button>
          </div>
        </div>
        <div className="w-[1000px] h-[540px] md:h-[670px] flex items-center   lg:ml-auto md:ml-auto ml-0 my-10 overflow-hidden">
          {/* slider container */}
          <div
            className="lg:w-[80%] md:w-[80%] w-[100%] ease-linear flex gap-[2%] absolute lg:top-0 md:top-0 top-[200px] left-0 transition-transform duration-300"
            style={{ transform: `translateX(-${currentSlider * 52}%)` }}
          >
            {/* sliders */}
            {sliders.map((slide, inx) => (
              <div
                key={inx}
                className={`${
                  currentSlider === inx
                    ? "bg-gradient-to-b from-[#63dddd] via-[#88F3D0] to-[#ACFFE4] h-[400px] md:h-[530px] lg:h-[530px] transition-all duration-300"
                    : "h-[260px] md:h-[530px] lg:h-[530px] transition-all duration-300"
                } min-w-[50%]  relative duration-200 bg-white rounded-3xl lg:w-auto md:w-auto w-[200px]`}
              >
                <img
                  src={slide.img}
                  className="mx-auto mt-20 lg:w-auto md:w-auto w-24"
                  alt={slide.tags}
                />
                <div className="mx-5">
                  <p className="text-3xl my-5 font-semibold text-center">
                    {slide.name}
                  </p>
                  <p className="text-lg mx-5">{slide.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const sliders = [
  {
    img: "https://i.ibb.co/C8cyrbh/naima.png",
    name: "Naima Islam",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    img: "https://i.ibb.co/XzYcyBg/jakaria.png",
    name: "Jakaria Khan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    img: "https://i.ibb.co/C8cyrbh/naima.png",
    name: "Naima Islam",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    img: "https://i.ibb.co/XzYcyBg/jakaria.png",
    name: "Jakaria Khan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    img: "https://i.ibb.co/C8cyrbh/naima.png",
    name: "Naima Islam",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
];
