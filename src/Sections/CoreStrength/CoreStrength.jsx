import bg_image from "../../../public/background-image.png";
import cuate from "../../../public/cuate.png";
import CountdownTimer from "../../Components/CountdownTimer";

export default function CoreStrength() {
  return (
    <div className="w-full mx-auto flex justify-center ">
      <div className="absolute max-w-screen-xl lg:w-[1150px] md:w-[1150px] w-full lg:h-[500px] md:h-[500px] h-[160%] bg-gradient-to-r from-[#3187FC] to-[#0522E6] mt-10 flex justify-center items-center rounded-[70px]">
        <img className="relative lg:left-2 md:left-2 lg:bottom-7 md:bottom-7 -top-64 lg:w-auto md:w-auto w-full" src={cuate} alt="" />
        <div className="lg:bg-gradient-to-t md:bg-gradient-to-t from-[#061b3f] to-transparent bg-transparent w-full h-[500px] absolute rounded-[70px]">
          <div className="text-white">
            <CountdownTimer />
          </div>
        </div>
      </div>
      <img className="w-full mt-[30%]" src={bg_image} alt="" />
    </div>
  );
}
