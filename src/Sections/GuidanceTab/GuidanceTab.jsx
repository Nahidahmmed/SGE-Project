import { useState } from "react";
import student from "../../../public/student-tab.png";
import partners from "../../../public/Partners-tab.png";

export default function GuidanceTab() {
  const [activeTab, setActiveTab] = useState(1);

  // Data for the tabs
  const tabsData = [
    {
      id: 1,
      name: "For Students",
      title:
        "Get complete guidance in your study abroad journey- from start to finish",
      text: "Shabuj Global Education helps you with Course & University Selection, Interview and Test Preparation, Visa Application and Admission and more- so you can join your dream university with ease!",
      image: `${student}`,
      button: 'Start Now'
    },
    {
      id: 2,
      name: "For Partners",
      title:
      "Wow your students with Shabuj Global Education's trusted admission process",
      text: "No more lack of trust and transparency- we treat your business our own. With SGE's 1500+ strong university network, expericnced counsellors, and dedicated customer support, you can just focus on increasing your student reach- and leave the processing part to us!",
      image: `${partners}`,
      button: 'Explore More'
    },
  ];

  // Function to handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className="bg-[#EFF6FF] rounded-3xl lg:pt-40 md:pt-40 pt-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="mx-5">
          {/* Tab buttons */}
          <div className="lg:flex md:flex hidden justify-between mb-4 bg-[#EEEEEE] w-[65%] text-2xl font-bold mx-auto rounded-full ">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                className={`px-32 rounded-full py-2 ${
                  activeTab === tab.id
                    ? "bg-[#004AC8] text-white"
                    : "bg-white text-[#004AC8]"
                }`}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="lg:block md:block hidden">
            {tabsData.map((tab) => (
              <div
                key={tab.id}
                className={`${activeTab === tab.id ? "" : "hidden"}`}
              >
                <div className="flex items-center mt-20 pb-36">
                  <div className="space-y-6">
                    <p className="text-[#3560FF] text-3xl font-bold">
                      {tab.name}
                    </p>
                    <p className="text-5xl font-semibold w-[75%] leading-[55px]">
                      {tab.title}
                    </p>
                    <p className="text-[#1F1F1F] text-lg w-[60%]">{tab.text}</p>
                    <button className="bg-[#2563EB] text-2xl text-white font-light px-16 py-2 rounded-full hover:opacity-85">
                      {tab.button}
                    </button>
                  </div>
                  <img className="w-[450px]" src={tab.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* mobile */}
        <div className="lg:hidden md:hidden block">
          {tabsData.map((tab, index) => (
            <div
              key={tab.id}
              className={` ${index === 0 ? "bg-[#e5f0ff]" : "bg-[#FFFCFC]"}`}
            >
              <div className="pb-10">
                <div className="space-y-6">
                  <p className="text-[#3560FF] text-xl font-bold text-center py-8">
                    {tab.name}
                  </p>
                  <img className="w-[200px] mx-auto" src={tab.image} alt="" />
                  <p className="text-2xl font-bold leading-[35px] mx-5 pt-3">
                    {tab.title}
                  </p>
                  <p className="text-[#1F1F1F] text-[15px] mx-5 ">{tab.text}</p>
                  <div className="flex justify-center items-center">
                    <button className={` ${index === 0 ? "bg-[#2563EB] text-xl text-white font-light px-16 py-1 rounded-full hover:opacity-85" : "bg-[#2563EB] text-xl text-white font-light px-14 py-1 rounded-full hover:opacity-85"}`}>
                    {tab.button}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
