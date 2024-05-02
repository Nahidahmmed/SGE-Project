import bg_image from "../../../public/background-image.png";
import cuate from "../../../public/cuate.png";

export default function CoreStrength() {
  return (
    <div className="w-full mx-auto relative flex justify-center items-center">
      <div className="absolute max-w-screen-xl w-[1150px] h-[500px] bg-gradient-to-r from-[#3187FC] to-[#0522E6] mt-10 flex justify-center items-center rounded-[50px]">
        <img className="absolute left-2 bottom-7" src={cuate} alt="" />
        <div className="text-center bg-gradient-to-t from-[#000000c5] to-transparent bg-opacity-10 h-[500px] absolute rounded-[50px]">
          <div className="text-white pt-[30%]">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              corporis expedita aliquam dolor? Sed, ipsam nesciunt. Commodi
              explicabo a repudiandae modi cupiditate sint temporibus porro
              ullam iure. Reiciendis, velit autem.
            </p>
          </div>
        </div>
      </div>
      <img className="w-full mt-[30%]" src={bg_image} alt="" />
    </div>
  );
}
