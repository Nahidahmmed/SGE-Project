import { useState, useRef } from "react";
import logo from "../../public/Group.png";
import text from "../../public/SGE.png";
import { FaAngleDown } from "react-icons/fa";

export default function Header() {
  const dropDownMenuData = {
    services: ["Food", "Transport", "Management"],
    studyDestination: ["Country 1", "Country 2", "Country 3"],
    testPrep: ["Test 1", "Test 2", "Test 3"],
    aboutUs: ["Team", "Story", "Values"]
  };

  const [activeMenu, setActiveMenu] = useState(null);
  const dropDownMenuRefs = {
    services: useRef(),
    studyDestination: useRef(),
    testPrep: useRef(),
    aboutUs: useRef()
  };

  const handleMenuEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="bg-gradient-to-br from-[#d7e6f1] to-[#F0F8FF]">
      <div className="max-w-screen-xl mx-auto flex items-center gap-6">
        <div className="flex items-center gap-2 py-5">
          <img src={logo} alt="Shabuj Global Education" />
          <div>
            <img className="pt-3" src={text} alt="" />
            <p className="text-xs text-center text-[#333333] font-medium">
              Worldwide University Admission
            </p>
          </div>
        </div>
        {/* menu */}
        <div>
          <ul className="flex items-center justify-between gap-4 text-slate-900 dark:text-gray-100 lg:gap-6">
            {Object.keys(dropDownMenuRefs).map((menuKey) => (
              <li
                key={menuKey}
                className="relative"
                ref={dropDownMenuRefs[menuKey]}
                onMouseEnter={() => handleMenuEnter(menuKey)}
                
              >
                <button className="relative flex items-center gap-1 py-2">
                  <span>{menuKey.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <FaAngleDown />
                </button>
                <ul
                onMouseLeave={handleMenuLeave}
                  className={`absolute top-full z-10 left-0 mt-2 space-y-2 rounded-lg p-2 bg-white transition-opacity duration-300 ${
                    activeMenu === menuKey ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  {dropDownMenuData[menuKey].map((option, index) => (
                    <li key={index} className="px-3">
                      <p>{option}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
