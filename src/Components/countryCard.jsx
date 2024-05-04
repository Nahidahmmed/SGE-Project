import { MdArrowForwardIos } from "react-icons/md";
// eslint-disable-next-line react/prop-types
export default function CountryCard({image,name}) {
  return (
    <div className="group ">
      <div className=" rounded-2xl shadow-sm shadow-sky-500 w-[270px] h-[350px] group-hover:-rotate-[12deg] origin-bottom after:duration-500 before:duration-500  duration-500 group-hover:duration-500"  style={{ backgroundImage: `url(${image})` }}>
        <div className="w-[270px] h-[350px] overflow-hidden after:duration-500 before:duration-500  duration-500 group-hover:duration-500 absolute group-hover:rotate-[20deg] flex justify-center items-center origin-bottom  bg-[#081831] rounded-2xl group-hover:pt-16 group-hover:ml-5 group-hover:mt-16 group-hover:bg-orange-400">
          <div className="z-10 flex flex-col items-center gap-2 ">
            <span className="text-center bg-gradient-to-r from-[#88F3D0] to-[#88F3D0] bg-clip-text text-transparent text-6xl font-bold">{name} </span>
            <button className="bg-[#2563EB] p-3 text-2xl text-white rounded-full"><MdArrowForwardIos/></button>
          </div>
        </div>
      </div>
    </div>
  );
}
