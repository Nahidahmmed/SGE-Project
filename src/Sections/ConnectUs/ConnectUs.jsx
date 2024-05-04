export default function ConnectUs() {
  return (
    <div className="w-full py-[10%]">
      <div
        className="lg:w-[1150px] md:w-[1150px] rounded-[40px] mx-auto h-[300px] bg-no-repeat relative"
        style={{
          backgroundImage: `url(https://i.ibb.co/m8GTzjY/Rectangle.png)`,
        }}
      >
        <img
          className=" w-[350px] h-[350px] lg:block md:block hidden absolute -top-[145px] -left-[80px]"
          src="https://i.ibb.co/ZS43HFb/Leap-Icon.png"
          alt=""
        />
        <div className="text-center text-white lg:pt-16 md:pt-16 pt-7">
          <p className="font-bold text-5xl">Ready to take the leap?</p>
          <p className="lg:text-2xl md:text-2xl text-xl font-[300] lg:w-[45%] md:w-[45%] w-full mx-auto mb-7 mt-3">
            Connect With Our Finest Counsellors And Biggest Study Abroad
            Community
          </p>
          <button className="lg:text-xl md:text-xl text-lg bg-white rounded-full border-transparent border-[1px] text-black lg:px-20 md:px-20 px-3 lg:py-3 md:py-3 py-1 hover:text-blue-500 hover:border-blue-500 hover:border-[1px] ">
            Talk to a Counsellor
          </button>
        </div>
      </div>
    </div>
  );
}
