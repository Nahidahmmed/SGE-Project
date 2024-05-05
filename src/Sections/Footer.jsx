import Footer_Head from "../../public/footer-head.png";
import city from "../../public/background-image.png";
import logo from "../../public/white-logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative">
      <img className="w-full absolute lg:-top-[61px] md:-top-[30px] -top-[0.5%]" src={Footer_Head} alt="" />
      <div className="bg-[#081831] relative  flex justify-center lg:h-auto md:h-auto h-[2200px]">
        <div className="absolute text-white flex flex-col lg:-top-5 md:-top-5 -top-0  max-w-screen-xl mx-auto w-full">
          <p className="lg:text-3xl md:text-3xl text-xl lg:font-bold md:font-bold font-light text-center">
            Our Students are Our Reference
          </p>
          <img
            className="lg:w-48 md:w-48 w-40 lg:mt-10 md:mt-10 mt-4 mx-auto"
            src={logo}
            alt=""
          />
          <hr className="w-full my-10" />
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 space-y-9 lg:font-normal md:font-normal font-light">
            <ul className="text-lg cursor-pointer lg:mx-0 md:mx-0 mx-5">
              <li className="text-2xl text-[#CACACA] pb-5">
                About Shabuj Global Education
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Amet commodo bibendum ac
                sem molestie. Nisi imperdiet orci nulla in. Convallis eu ligula
                neque id varius sit lacus et. Pellentesque porta interdum morbi
                enim ultrices egestas aliquet amet. Aliquet elit amet porttitor
                posuere.
              </li>
            </ul>
            <ul className="lg:mx-auto md:mx-auto mx-5 text-lg cursor-pointer">
              <li className="text-2xl text-[#CACACA] pb-5">
                Study Destinations
              </li>
              <li>UK</li>
              <li>USA</li>
              <li>Canada</li>
              <li>Australia</li>
              <li>Germany</li>
              <li>New Zealand</li>
            </ul>
            <ul className="lg:mx-auto md:mx-auto mx-5 text-lg cursor-pointer">
              <li className="text-2xl text-[#CACACA] pb-5">
                Services for students
              </li>
              <li>Counselling</li>
              <li>Test Preparation</li>
              <li>Course, Country & University Selection</li>
              <li>Scholarship</li>
              <li>File Assessment</li>
              <li className="text-2xl text-[#CACACA]">
                Services for institutions
              </li>
              <li className="text-2xl text-[#CACACA]">Services for partners</li>
            </ul>
            <ul className="lg:ml-auto md:ml-auto mx-5 text-lg cursor-pointer">
              <li className="text-2xl text-[#CACACA] pb-5">Company</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li className="text-2xl text-[#CACACA]">search universities</li>
              <li className="text-2xl text-[#CACACA]">upcoming events</li>
              <li className="text-2xl text-[#CACACA]">
                book online counselling
              </li>
            </ul>
          </div>
          <hr className="my-10" />
          <div>
            <p className="text-center text-2xl">OUR OFFICES</p>
            <p className="text-[#5093FB] font-semibold text-xl lg:hidden md:hidden block text-center pt-5">
              Head Office (London)
            </p>
            <div className="text-lg grid lg:flex md:flex grid-cols-2 mt-10  lg:mx-32 md:mx-32 mx-10 space-x-10 lg:gap-0 md:gap-0 gap-10">
              <ul className="lg:block md:block hidden">
                <li className="text-[#5093FB] font-semibold text-xl">
                  Head Office (London)
                </li>
              </ul>
              <ul className="lg:w-[20%] md:w-[20%] w-[100%]">
                <li className="text-[#5093FB] font-semibold text-xl ">
                  South Asian Regional Head Office (Dhaka)
                </li>
                <li>Chattogram Office</li>
                <li>Sylhet Office</li>
              </ul>
              <ul className="">
                <li className="text-[#5093FB] font-semibold text-xl">
                  India Office{" "}
                </li>
                <li>Kannur</li>
                <li>Kochi</li>
              </ul>
              <ul className="">
                <li className="text-[#5093FB] font-semibold text-xl">
                  Nigeria Office{" "}
                </li>
                <li>Lagos</li>
                <li>Abuja</li>
              </ul>
              <ul>
                <li className="text-[#5093FB] font-semibold text-xl">
                  Middle East Office
                </li>
                <li>Dubai</li>
              </ul>
            </div>
            <hr className="mt-10 mb-5 lg:mx-0 md:mx-0 mx-5" />
            <div className="lg:flex md:flex block lg:mx-0 md:mx-0 mx-5">
              <div className="flex text-3xl gap-8 lg:mx-0 md:mx-0 mx-14 mb-5">
                <FaFacebookF /> <FaInstagram /> <FaLinkedinIn />
                <FaYoutubeSquare />
              </div>
              <hr />
              <div className="lg:flex md:flex block text-center space-y-3 gap-10 text-[#CACACA] ml-auto lg:mt-0 md:mt-0 mt-5">
              <p>Copyright © 2024, All Right Reserved <span className="underline cursor-pointer">Shabuj Global Education</span></p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-full lg:block md:block hidden lg:pt-[35%] md:pt-[90%] pt-0"
          src={city}
          alt=""
        />
      </div>
    </div>
  );
}
