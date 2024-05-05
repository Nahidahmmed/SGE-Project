import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import FormAnimetion from "../../Components/FormAnimetion";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    country: "",
    selector1: "",
    selector2: "",
    selector3: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="w-full bg-[#E7E7E7]">
      <div className="max-w-screen-xl mx-auto relative">
        <div className="pt-[10%] text-center lg:mx-0 md:mx-0 mx-2">
          <p className="font-bold text-4xl">
            It’s Time to Start Your Journey With Us
          </p>
          <p className="text-[#1F1F1F] text-xl lg:mt-20 md:mt-20 mt-10">
            Book Your <span className="bg-[#88F3D0] rounded-sm px-1 font-medium">FREE</span> Consultation with Certified Counsellors
          </p>
        </div>
        <div className="max-w-xl lg:mx-auto md:mx-auto mt-8 mx-5">
          <form className="space-y-6 pb-20">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border-none rounded-md px-3 py-2 placeholder-gray-400 focus:border border-gray-300 focus:outline-none focus:border-gray-400"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border-none rounded-md px-3 py-2 placeholder-gray-400 focus:border border-gray-300 focus:outline-none focus:border-gray-400"
              required
            />
            <div className="flex space-x-2">
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="+880"
                className="w-[15%] border-none rounded-md px-3 py-2 placeholder-gray-400 focus:border border-gray-300 focus:outline-none focus:border-gray-400 mr-auto"
                required
              />
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-[80%] border-none rounded-md px-3 py-2 placeholder-gray-400 focus:border border-gray-300 focus:outline-none focus:border-gray-400"
                required
              />
            </div>
            <div className="mt-14 relative">
              <select
                id="subCategory"
                name="course"
                className="w-full border-none rounded-md px-3 py-2 placeholder-gray-400 focus:border border-gray-300 focus:outline-none focus:border-gray-400 relative appearance-none cursor-pointer text-[#4B4B4B] "
                required
              >
                <option className="text-black" value="">Preferred Study Destination</option>
                <option className="text-black" value="Web Development">Web Development</option>
                <option className="text-black" value="Front-End Development">
                  Front-End Development
                </option>
                
              </select>
              <div className="absolute inset-y-0 right-0 top-1 flex items-center px-2 pointer-events-none">
                <IoIosArrowDown  className=" text-xl text-[#8E8E8E]" />
              </div>
            </div>

            <div className="mt-14 relative">
              <select
                id="subCategory"
                name="course"
                className="w-full border-none rounded-md px-3 py-2 placeholder-gray-400 focus:border border-gray-300 focus:outline-none focus:border-gray-400 relative appearance-none cursor-pointer text-[#4B4B4B]"
                required
              >
                <option className="text-black" value="">Preferred Study Year</option>
                <option className="text-black" value="Web Development">Web Development</option>
                <option className="text-black" value="Front-End Development">
                  Front-End Development
                </option>
                
              </select>
              <div className="absolute inset-y-0 right-0 top-1 flex items-center px-2 pointer-events-none">
                <IoIosArrowDown  className=" text-xl text-[#8E8E8E]" />
              </div>
            </div>
            <div className="mt-14 relative">
              <select
                id="subCategory"
                name="course"
                className="w-full border-none rounded-md px-3 py-2 placeholder-gray-400 focus:border border-gray-300 focus:outline-none focus:border-gray-400 relative appearance-none cursor-pointer text-[#4B4B4B]"
                required
              >
                <option className="text-black" value="">Preferred Study Intake</option>
                <option className="text-black" value="Web Development">Web Development</option>
                <option className="text-black" value="Front-End Development">
                  Front-End Development
                </option>
              </select>
              <div className="absolute inset-y-0 right-0 top-1 flex items-center px-2 pointer-events-none">
                <IoIosArrowDown  className=" text-xl text-[#8E8E8E]" />
              </div>
            </div>
            <div className="flex items-center space-x-3">
            <input type="checkbox" />
            <p className="text-[#4B4B4B] font-medium">By clicking you agree to our <span className="text-[#008AFF] cursor-pointer">Privacy Policy</span> and<span className="text-[#008AFF] cursor-pointer"> Terms & Conditions</span> *</p>
            </div>
            <div className="mx-auto flex justify-center">
              <button
                type="submit"
                className=" bg-blue-500 text-white rounded-full py-2 lg:px-36 md:px-36 px-20 hover:bg-blue-600 mt-16 lg:mb-32 md:mb-32 mb-0"
              >
                Book Free Counselling
              </button>
            </div>
          </form>
        </div>
      <div className="absolute top-[300px] right-10 lg:block md:block hidden">
      <FormAnimetion/>
      </div>
      </div>
    </div>
  );
}
