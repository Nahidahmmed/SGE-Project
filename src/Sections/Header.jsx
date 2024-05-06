import { useState, useRef } from "react";
import logo from "../../public/Group.png";
import text from "../../public/SGE.png";
import { IoMenu } from "react-icons/io5";
import { FaAngleDown, FaArrowRight } from "react-icons/fa";

export default function Header() {
  const dropDownMenuData = {
    Services: ["Food", "Transport", "Management"],
    StudyDestination: ["Country 1", "Country 2", "Country 3"],
    TestPrep: ["Test 1", "Test 2", "Test 3"],
    AboutUs: ["Team", "Story", "Values"],
  };

  const [activeMenu, setActiveMenu] = useState(null);
  const dropDownMenuRefs = {
    Services: useRef(),
    StudyDestination: useRef(),
    TestPrep: useRef(),
    AboutUs: useRef(),
  };

  const formatMenuKey = (menuKey) => {
    return menuKey.replace(/([a-z])([A-Z])/g, "$1 $2");
  };

  const handleMenuEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="bg-gradient-to-br from-[#e4f2fc] to-[#F0F8FF]" onMouseLeave={handleMenuLeave}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-5 px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-1 mr-auto">
          <img
            className="lg:w-12 md:w-12 w-8"
            src={logo}
            alt="Shabuj Global Education"
          />
          <div>
            <img className="pt-2 lg:w-56 md:w-56 w-36" src={text} alt="" />
            <p className="lg:text-xs md:text-xs text-[8px] text-center text-[#333333] font-medium">
              Worldwide University Admission
            </p>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="block md:hidden">
          <button
            className="text-3xl items-center"
            onClick={() => setActiveMenu(activeMenu ? null : "mobileMenu")}
          >
            <IoMenu />
          </button>
          {activeMenu === "mobileMenu" && (
            <ul className="mt-2 bg-white shadow-lg rounded-md absolute right-0">
              {Object.keys(dropDownMenuRefs).map((menuKey) => (
                <li
                  key={menuKey}
                  className="relative"
                  ref={dropDownMenuRefs[menuKey]}
                  onMouseEnter={() => handleMenuEnter(menuKey)}
                  onMouseLeave={handleMenuLeave}
                >
                  <button className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-100">
                    {formatMenuKey(menuKey)}
                    <FaAngleDown />
                  </button>
                  <ul
                    className={`absolute top-0 left-full w-full bg-white transition-opacity duration-300 ${
                      activeMenu === menuKey
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    {dropDownMenuData[menuKey].map((option, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 border-b border-gray-200"
                      >
                        <p>{option}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center justify-end dark:text-gray-100 lg:gap-8 md:gap-5 ">
            {Object.keys(dropDownMenuRefs).map((menuKey) => (
              <li
                key={menuKey}
                className="relative text-base roboto-bold font-semibold items-center"
                ref={dropDownMenuRefs[menuKey]}
                onMouseEnter={() => handleMenuEnter(menuKey)}
              >
                <button className="relative flex items-center gap-1 py-2">
                  {formatMenuKey(menuKey)}
                  <FaAngleDown className="text-sm items-center" />
                </button>
                <ul
                  className={`absolute top-full z-10 left-0 mt-2 space-y-2 rounded-lg p-2 bg-white transition-opacity duration-300 ${
                    activeMenu === menuKey
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                  onMouseEnter={() => handleMenuEnter(menuKey)}
                  onMouseLeave={() => handleMenuLeave(menuKey)}
                >
                  {dropDownMenuData[menuKey].map((option, index) => (
                    <li
                      key={index}
                      className="px-3 font-normal"
                    >
                      <p>{option}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li>
              <div className="group relative">
                <button className="bg-[#93C5FD] hover:bg-[#004AC8] px-4 hover:pr-4 hover:px-0 transform duration-300 py-2 rounded-lg text-base font-semibold text-white relative z-10 w-24">
                  Login
                  <span className="absolute right-9 top-0 bottom-0 flex items-center justify-center w-8 transition-all duration-300 transform translate-x-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
