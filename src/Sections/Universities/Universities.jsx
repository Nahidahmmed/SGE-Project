
import Marquee from "react-fast-marquee";
export default function Universities() {
  return (
    <div>
      <div className="text-center font-bold py-20 mx-5">
        <p className="text-[#004AC8] lg:text-5xl md:text-5xl text-4xl">Universities Across The Globe</p>
        <p className="lg:text-6xl md:text-6xl text-5xl mt-2">The Choice is Endless</p>
        <img
          className="mx-auto lg:w-[290px] md:w-[290px] w-[190px] py-10"
          src="https://i.ibb.co/wMCkStV/University-Section-Animation.gif"
          alt=""
        />
      </div>
      <Marquee
        direction="left"
        speed={100}
        pauseOnHover={true}
      >
        <div className=" flex items-center overflow-hidden">
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/vmm1BCn/1.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/Ph3vJw3/2.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/PMQMJkL/3.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/W3XNx9C/5.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/KLSPmQT/6.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/XSxBwLB/8.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/CsmVzWp/25.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/xhBdwDw/26.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/VH97mVD/27.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/4jy4449/28.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/XSxBwLB/8.png" alt="" />
        </div>
      </Marquee>
      <Marquee
         // Adjust height as needed
        direction="right"
        speed={100}
        pauseOnHover={true}
      >
        <div className=" flex items-center overflow-hidden lg:h-auto md:h-auto h-28">
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/vmm1BCn/1.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/Ph3vJw3/2.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/PMQMJkL/3.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/W3XNx9C/5.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/KLSPmQT/6.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/XSxBwLB/8.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/CsmVzWp/25.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/xhBdwDw/26.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/VH97mVD/27.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/4jy4449/28.png" alt="" />
          <img className="w-20 md:w-20 lg:w-auto lg:mx-10 md:mx-10 mx-3" src="https://i.ibb.co/XSxBwLB/8.png" alt="" />
        </div>
      </Marquee>

      {/* <div className="lg:py-[60px] md:py-[60px] py-[30px] ">
        <div className="marquee-container ">
          <div className="marquee-content flex">
            {[...Array(5)].map((_, index) => (
              <div
                className="whitespace-nowrap animate-marquee lg:py-3 md:py-3"
                key={index}
              >
                <div className="space-x-36 flex items-center overflow-hidden">
                  <img className=""  src="https://i.ibb.co/vmm1BCn/1.png" alt="" />
                  <img className=""  src="https://i.ibb.co/Ph3vJw3/2.png" alt="" />
                  <img className=""  src="https://i.ibb.co/PMQMJkL/3.png" alt="" />
                  <img className=""  src="https://i.ibb.co/W3XNx9C/5.png" alt="" />
                  <img className=""  src="https://i.ibb.co/KLSPmQT/6.png" alt="" />
                  <img className=""  src="https://i.ibb.co/XSxBwLB/8.png" alt="" />
                  <img className=""  src="https://i.ibb.co/CsmVzWp/25.png" alt="" />
                  <img className=""  src="https://i.ibb.co/xhBdwDw/26.png" alt="" />
                  <img className=""  src="https://i.ibb.co/VH97mVD/27.png" alt="" />
                  <img className=""  src="https://i.ibb.co/4jy4449/28.png" alt="" />
                  <img className=""  src="https://i.ibb.co/XSxBwLB/8.png" alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}

const universites = [
  {
    image: "https://i.ibb.co/vmm1BCn/1.png",
  },
  {
    image: "https://i.ibb.co/Ph3vJw3/2.png",
  },
  {
    image: "https://i.ibb.co/PMQMJkL/3.png",
  },
  {
    image: "https://i.ibb.co/W3XNx9C/5.png",
  },
  {
    image: "https://i.ibb.co/KLSPmQT/6.png",
  },
  {
    image: "https://i.ibb.co/XSxBwLB/8.png",
  },
  {
    image: "https://i.ibb.co/CsmVzWp/25.png",
  },
  {
    image: "https://i.ibb.co/xhBdwDw/26.png",
  },
  {
    image: "https://i.ibb.co/VH97mVD/27.png",
  },
  {
    image: "https://i.ibb.co/4jy4449/28.png",
  },
  {
    image: "https://i.ibb.co/XSxBwLB/8.png",
  },
];
