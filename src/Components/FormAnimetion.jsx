

export default function FormAnimetion() {
    const circleSize = 60; 
    const text = "dream big studdy abroad .";
  
    
  
    const textStyle = {
      color: "black",
      
      transformOrigin: "center",
    };
  
  return (
    <div className=" lg:flex md:flex hidden inset-0 mt-[435px]  items-center justify-center w-[200px] h-[200px] rounded-full mx-auto">
      {/* Icon in the center */}
      

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
              className="absolute uppercase font-semibold h-4 w-2 ml-1 text-xl"
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
  )
}
