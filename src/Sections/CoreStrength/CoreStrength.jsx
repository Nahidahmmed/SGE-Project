import bg_image from "../../../public/background-image.png";
import cuate from "../../../public/cuate.png";
import CountdownTimer from "../../Components/CountdownTimer";

export default function CoreStrength() {
  return (
    <div className="w-full mx-auto relative flex justify-center items-center">
      <div className="absolute max-w-screen-xl w-[1150px] h-[500px] bg-gradient-to-r from-[#3187FC] to-[#0522E6] mt-10 flex justify-center items-center rounded-[70px]">
        <img className="absolute left-2 bottom-7" src={cuate} alt="" />
        <div
  className="w-full h-[500px] absolute rounded-[70px]"
  style={{
    backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 20%, transparent 80%)',
    '@media (max-width: 639px)': {
      backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 20%, transparent 80%)', // Set gradient to transparent on screens smaller than 640px
    },
  }}
>
          <div className="text-white">
            <CountdownTimer />
          </div>
        </div>
      </div>
      <img className="w-full mt-[30%]" src={bg_image} alt="" />
    </div>
  );
}
