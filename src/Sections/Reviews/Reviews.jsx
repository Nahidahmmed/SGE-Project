import { useState } from "react";

export const Reviews = () => {
  
  const [currentSlider, setCurrentSlider] = useState(0);
  // const sliders = [{img: "https://source.unsplash.com/600x600/?bedroom", tags: "Room",}, {img: "https://source.unsplash.com/600x600/?room", tags: "Room",}, {img: "https://source.unsplash.com/600x600/?livingrooms", tags: "Room",}, {img: "https://source.unsplash.com/600x600/?livingroom", tags: "Room",}, {img: "https://source.unsplash.com/600x600/?bedrooms", tags: "Room",},];
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 2 ? 0 : currentSlider + 1
    );
  return (
    <div className="bg-gradient-to-br from-[#3389FD] to-[#031EE5]">
      <div className=" w-[850px] h-[540px] md:h-[670px] flex items-center relative overflow-hidden ml-auto">
        {/* arrow */}
        <button
          onClick={nextSlider}
          className="absolute flex justify-center items-center top-1/2 bg-white rounded-full z-50 w-6 h-6 md:w-8 md:h-8 bgWhite right-0"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="rotate(180)"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
        {/* slider container */}
        <div
          className="ease-linear duration-300 flex gap-[2%]"
          style={{ transform: `translateX(-${currentSlider * 52}%)` }}
        >
          {/* sliders */}
          {sliders.map((slide, inx) => (
  <div
    key={inx}
    className={`${
      currentSlider === inx
        ? "bg-gradient-to-b from-[#88D6F3] via-[#88F3D0] to-[#ACFFE4] h-[260px] md:h-[530px] lg:h-[530px]"
        : "h-[260px] md:h-[530px] lg:h-[530px]"
    } min-w-[50%]  relative duration-200 bg-white rounded-3xl`}
  >
    <img src={slide.img} className="mx-auto mt-20" alt={slide.tags} />
  </div>
))}

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