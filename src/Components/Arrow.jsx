import { HiOutlineArrowDown } from "react-icons/hi";

const Arrow = () => {
  const circleSize = 42; // Size of the larger circle
  const text = "dream big studdy abroad ."; // Text to wrap around the circle

  const iconStyle = {
    fontSize: "4rem", // Adjust the size of the icon as needed
    top: "50%",
    left: "49.3%",
    transform: "translate(-55%, -50%)",
  };

  const textStyle = {
    color: "black",
    
    transformOrigin: "center",
  };

  return (
    <div className="bg-white absolute lg:flex md:flex hidden inset-0 mt-[635px]  items-center justify-center w-[200px] h-[200px] rounded-full mx-auto">
      {/* Icon in the center */}
      <div className="absolute">
        <HiOutlineArrowDown style={iconStyle} className="text-center ml-1 mt-10  animate-bounce mx-auto mb-6" />
      </div>

      {text.split("").map((char, index) => {
        const angle = (index / text.length) * 360;
        const radians = (angle * Math.PI) / 180;
        const x = Math.sin(radians) * (circleSize / 0.5);
        const y = Math.cos(radians) * (circleSize / 0.5);
        return (
          <div
            key={index}
            className="animate-spin rounded-full"
            style={{
              animationDuration: "10s",
            }}
          >
            <span
              className="absolute uppercase font-semibold h-4 w-2 ml-1"
              style={{
                ...textStyle,
                top: `calc(50% - 0.5em - ${y}px)`,
                left: `calc(50% - 0.5em + ${x}px)`,
                transform: `rotate(${angle}deg)`,
                
              }}
            >
              {char}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Arrow;
