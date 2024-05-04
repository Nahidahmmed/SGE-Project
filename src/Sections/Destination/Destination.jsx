import CountryCard from "../../Components/CountryCard";
export default function Destination() {
  return (
    <div
      className="w-full h-[1440px]"
      style={{
        background: "rgb(50,137,252)",
        // eslint-disable-next-line no-dupe-keys
        background:
          "radial-gradient(circle, rgba(50,137,252,1) 0%, rgba(80,127,231,1) 0%, rgba(7,38,231,1) 66%)",
      }}
    >
      <div className="max-w-screen-xl mx-auto relative">
        <img
          className="absolute w-[240px] right-0 -top-20"
          src="https://i.ibb.co/27Nwnrq/plane.png"
          alt=""
        />
        <img
          className="absolute lg:block md:block hidden right-9 top-[130px] w-full h-[1440px]"
          src="https://i.ibb.co/HGtGDcP/Fligh-Path.png"
          alt=""
        />
        <div className="text-center py-36">
          <p className="bg-gradient-to-r from-[#88F3D0] to-[#88F3D0] bg-clip-text text-transparent text-6xl font-bold">
            Choose Your Destination
          </p>
          <p className="text-white text-[76px] font-bold pt-8">
            We’ll Plan the Rest
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-16">
          {countrys.map((country, index) => (
            <div key={index} className="mx-auto">
              <CountryCard image={country.image} name={country.name} />
            </div>
          ))}
        </div>
        <div>
          <div className="col-span-3 flex justify-center my-24">
            <button className="text-center bg-white text-3xl px-20 py-1 rounded-full hover:bg-[#ffffff83]">
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
