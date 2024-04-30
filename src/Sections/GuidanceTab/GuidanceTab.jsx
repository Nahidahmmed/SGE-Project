import { useState } from "react";
import student from '../../../public/student-tab.png';


export default function GuidanceTab() {
    const [activeTab, setActiveTab] = useState(1);

    // Data for the tabs
    const tabsData = [
      {
        id: 1,
        name: "For Students",
        title: "Get complete guidance in your study abroad journey- from start to finish",
        text: "Shabuj Global Education helps you with Course & University Selection, Interview and Test Preparation, Visa Application and Admission and more- so you can join your dream university with ease!",
        image: `${student}`,
        content: "Content for Tab 1",
      },
      {
        id: 2,
        name: "For Partners",
        image: `${student}`,
        title: "Wow your students with Shabuj Global Education's trusted admission process",
        content: "Content for Tab 2",
      },
    ];
  
    // Function to handle tab change
    const handleTabChange = (tabId) => {
      setActiveTab(tabId);
    };
  return (
    <div className="bg-[#EFF6FF] rounded-3xl pt-32">
        <div className="max-w-screen-xl mx-auto ">
        <div>
      {/* Tab buttons */}
      <div className="flex justify-between mb-4 bg-[#EEEEEE] w-[55%] text-3xl font-bold mx-auto rounded-full ">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            className={`px-20 rounded-full py-2 ${
              activeTab === tab.id ? "bg-[#004AC8] text-white" : "bg-white text-[#004AC8]"
            }`}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div>
        {tabsData.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? "" : "hidden"}`}
          >
            {tab.content}
            <img src={tab.image} alt="" />
          </div>
        ))}
      </div>
    </div>

        </div>
    </div>
  )
}
