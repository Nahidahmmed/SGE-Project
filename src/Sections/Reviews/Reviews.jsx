import { useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
export const Reviews = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "https://i.ibb.co/C8cyrbh/naima.png",
      title: "Escape 1",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
    },
    {
      img: "https://i.ibb.co/XzYcyBg/jakaria.png",
      title: "Escape 2",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
    },
    {
      img: "https://i.ibb.co/C8cyrbh/naima.png",
      title: "Escape 3",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
    },
    {
      img: "https://i.ibb.co/XzYcyBg/jakaria.png",
      title: "Escape 4",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
    },
    {
      img: "https://i.ibb.co/C8cyrbh/naima.png",
      title: "Escape 5",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
    },
  ];
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliders.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );
  const isSmallScreen = window.innerWidth <= 768;
  return (
    <div className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute bg-gradient-to-r from-[#031EE5] to-[#3389FD] before:inset-0 transform duration-1000 ease-linear  overflow-hidden mt-10">
      <div className="w-1/2 px-4 drop-shadow-lg">
        <h1 className="text-6xl font-bold mb-3 bg-gradient-to-r from-[#88F3D0] to-[#88F3D0] bg-clip-text text-transparent w-[40%]">
          Become a Part of Our Success Stories
        </h1>
        <div className="flex gap-3 px-5">
        {/* arrow left */}
        <button
          onClick={prevSlider}
          className="flex justify-center items-center text-white border-white border-[2px] text-5xl hover:bg-white rounded-full p-2"
        >
          <GoArrowLeft />
        </button>
        {/* arrow right */}
        <button
          onClick={nextSlider}
          className="flex justify-center items-center text-white border-white border-[2px] text-5xl hover:bg-white rounded-full p-2"
        >
          <GoArrowRight />
        </button>
      </div>
      </div>
      {/* arrow */}
      
      {/* text container here */}

      {/* slider container */}
      <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
        <div
          className="ease-linear duration-300 flex gap-4 items-center"
          style={{
            transform: `translateX(-${
              currentSlider * (isSmallScreen ? 200 : 300)
            }px)`,
          }}
        >
          {/* sliders */}
          {sliders.map((slide, inx) => (
            <div key={inx} className="bg-white w-[500px]">
              <img
              src={slide.img}
              className={`h-[300px] w-[500px] ${
                currentSlider - 1 === inx ? "scale-0" : "scale-100 delay-500"
              }  duration-300 rounded-lg`}
              alt={slide.title}
            />
            <p>{slide.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
