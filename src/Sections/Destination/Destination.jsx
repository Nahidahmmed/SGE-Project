
import FlagCard from "../../Components/FlagCard";
export default function Destination() {
  return (
    <div
      className="w-full"
      style={{
        background: "rgb(50,137,252)",
        // eslint-disable-next-line no-dupe-keys
        background:
          "radial-gradient(circle, rgba(50,137,252,1) 0%, rgba(80,127,231,1) 0%, rgba(7,38,231,1) 66%)",
      }}
    >
      <div className="max-w-screen-xl mx-auto relative">
        <img
          className="absolute w-[240px] right-0 -top-20 lg:block md:block hidden"
          src="https://i.ibb.co/27Nwnrq/plane.png"
          alt=""
        />
        <img
          className="absolute lg:block md:block hidden right-9 top-[130px] w-full h-[1440px]"
          src="https://i.ibb.co/HGtGDcP/Fligh-Path.png"
          alt=""
        />
        <div className="text-center lg:py-36 md:py-36 py-16">
          <p className="bg-gradient-to-r from-[#88F3D0] to-[#88F3D0] bg-clip-text text-transparent lg:text-6xl md:text-6xl text-3xl font-bold lg:w-full md:w-full w-[80%] mx-auto">
            Choose Your Destination
          </p>
          <p className="text-white lg:text-[76px] md:text-[76px] text-5xl font-bold lg:pt-8 md:pt-8 pt-5">
            We’ll Plan the Rest
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-16 md:gap-16 lg:px-0 md:px-0 px-3">
          {countrys.map((country, index) => (
            <div key={index} className="mx-auto lg:mb-0 md:mb-0 mb-12">
              <FlagCard image={country.image} name={country.name} />
            </div>
          ))}
        </div>
        <div>
          <div className="col-span-3 flex justify-center my-24">
            <button className="text-center bg-white text-3xl px-20 py-1 rounded-full hover:bg-[#ffffff83] mb-20">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const countrys = [
  {
    image: "https://i.ibb.co/rG4FFM7/UK.png",
    name: "UK",
  },
  {
    image: "https://i.ibb.co/L1qXZy1/USA.png",
    name: "USA",
  },
  {
    image: "https://i.ibb.co/PxzH80z/canada.png",
    name: "Canada",
  },
  {
    image: "https://i.ibb.co/FW9JbQP/australia.png",
    name: "Australia",
  },
  {
    image: "https://i.ibb.co/8s4B9fr/Germany.png",
    name: "Germany",
  },
  {
    image: "https://i.ibb.co/WzwnCsW/New-Zealand.png",
    name: "New Zealand",
  },
];
