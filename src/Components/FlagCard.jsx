import { MdArrowForwardIos } from "react-icons/md";

export default function FlagCard({image,name}) {
    const marginTop = name === "New Zealand" ? "mt-10" : "mt-14";
    const ButtonMargin = name === "New Zealand" ? "lg:mt-12 md:mt-12 mt-7" : "g:mt-20 md:mt-20 mt-10";
  return (
    <div className="group w-full">
    <div className="lg:rounded-2xl md:rounded-2xl rounded-xl shadow-sm lg:w-[270px] md:w-[270px] w-[164px] lg:h-[350px] md:h-[350px] h-[190px] group-hover:-rotate-[11deg] origin-bottom after:duration-300 before:duration-300 duration-300 group-hover:duration-300 bg-cover" style={{ backgroundImage: `url(${image})` }}>

      <div className="lg:w-[270px] md:w-[270px] w-[165px] lg:h-[350px] md:h-[350px] h-[200px] overflow-hidden after:duration-300 before:duration-300  duration-300 group-hover:duration-300 absolute group-hover:rotate-[17deg] flex justify-center items-center origin-bottom  bg-[#081831] hover:bg-[#17335e] lg:rounded-[32px] md:rounded-[32px] rounded-[12px] group-hover:-ml-2 group-hover:mt-20 ">
        <div className=" flex flex-col items-center ">
          <span className={`text-center bg-gradient-to-r from-[#88F3D0] to-[#88F3D0] bg-clip-text text-transparent lg:text-[45px] md:text-[45px] text-[25px] font-bold lg:leading-[3.3rem] md:leading-[3.3rem] leading-[2.0rem] ${marginTop}`}>{name} </span>
          <button className={`bg-[#2563EB] lg:p-3 md:p-3 p-2  lg:text-2xl md:text-2xl text-xs text-white rounded-full ${ButtonMargin} `}><MdArrowForwardIos/></button>
        </div>
      </div>
    </div>
  </div>
  )
}
