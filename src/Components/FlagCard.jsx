import { MdArrowForwardIos } from "react-icons/md";

export default function FlagCard({image,name}) {
    const marginTop = name === "New Zealand" ? "mt-10" : "mt-14";
    const ButtonMargin = name === "New Zealand" ? "mt-12" : "mt-20";
  return (
    <div className="group w-full">
    <div className=" rounded-2xl shadow-sm w-[270px] h-[350px] group-hover:-rotate-[11deg] origin-bottom after:duration-300 before:duration-300  duration-300 group-hover:duration-300"  style={{ backgroundImage: `url(${image})` }}>
      <div className="w-[270px] h-[350px] overflow-hidden after:duration-300 before:duration-300  duration-300 group-hover:duration-300 absolute group-hover:rotate-[17deg] flex justify-center items-center origin-bottom  bg-[#081831] rounded-[32px] group-hover:-ml-2 group-hover:mt-20 ">
        <div className=" flex flex-col items-center ">
          <span className={`text-center bg-gradient-to-r from-[#88F3D0] to-[#88F3D0] bg-clip-text text-transparent text-[45px] font-bold leading-[3.3rem] ${marginTop}`}>{name} </span>
          <button className={`bg-[#2563EB] p-3 text-2xl text-white rounded-full ${ButtonMargin} `}><MdArrowForwardIos/></button>
        </div>
      </div>
    </div>
  </div>
  )
}
