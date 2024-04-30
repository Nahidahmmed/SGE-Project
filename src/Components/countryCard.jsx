export default function CountryCard() {
  return (
    <div>
      <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 w-56 h-80 ">
        <div className="w-56 h-80 group overflow-hidden after:duration-500 before:duration-500  duration-500 hover:duration-500 absolute  hover:rotate-[20deg] flex justify-center items-center origin-bottom  bg-neutral-900 rounded-2xl hover:pt-10 hover:ml-5 hover:mt-16 hover:bg-orange-400">
          <div className="z-10 flex flex-col items-center gap-2 ">
            <span className="text-slate-400 text-6xl font-bold">JR </span>
            <p className="text-gray-50">Frontend developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
