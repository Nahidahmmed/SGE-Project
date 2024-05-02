import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import world from '../../public/world.png';
import computer from '../../public/computer.png';
import book_mark from '../../public/book_mark.png';
import user from '../../public/user.png';
import university from '../../public/university.png';
import plane from '../../public/plane.png';
export default function CountdownTimer() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div>
        <p className="lg:text-7xl md:text-7xl text-5xl font-bold lg:text-right md:text-right text-center lg:mr-20 md:mr-20 mr-0 lg:pt-28 md:pt-28 -top-96 relative  mb-48 bg-gradient-to-r from-[#88F3D0] to-[#88F3D0] bg-clip-text text-transparent">
          Our Core Strength
        </p>
        <h1>
          {counterOn && (
            <div className="grid lg:grid-cols-6 md:grid-cols-6 grid-cols-2 gap-8 w-[95%] mx-auto">
              <div className="text-center space-y-3">
                <img className="mx-auto w-16 pb-2" src={world} alt="" />
                <CountUp className="text-5xl font-bold" start={0} end={16} duration={2} delay={0} />
                <p className="text-lg font-light">Global Offices</p>
              </div>
              <div className="text-center space-y-3">
                <img className="mx-auto w-16 pb-2" src={computer} alt="" />
                <CountUp className="text-5xl font-bold" start={0} end={100} duration={2} delay={0} /><span className="text-5xl">+</span>
                <p className="text-lg font-light">UK Education Fair</p>
              </div>
              <div className="text-center space-y-3">
                <img className="mx-auto w-16 pb-2" src={book_mark} alt="" />
                <CountUp className="text-5xl font-bold" start={0} end={50000} duration={2} delay={0} /><span className="text-5xl">+</span>
                <p className="text-lg font-light">Courses Offered</p>
              </div>
              <div className="text-center space-y-3">
                <img className="mx-auto w-16 pb-2" src={user} alt="" />
                <CountUp className="text-5xl font-bold" start={0} end={350} duration={2} delay={0} /><span className="text-5xl">+</span>
                <p className="text-lg font-light">Global Counsellors</p>
              </div>
              <div className="text-center space-y-3">
                <img className="mx-auto w-16 pb-2" src={university} alt="" />
                <CountUp className="text-5xl font-bold" start={0} end={150} duration={2} delay={0} /><span className="text-5xl">+</span>
                <p className="text-lg font-light">Recruiting University</p>
              </div>
              <div className="text-center space-y-3">
                <img className="mx-auto w-16 pb-2" src={plane} alt="" />
                <CountUp className="text-5xl font-bold" start={0} end={5000} duration={2} delay={0} /><span className="text-5xl">+</span>
                <p className="text-lg font-light">Student Served</p>
              </div>
            </div>
          )}
        </h1>
      </div>
    </ScrollTrigger>
  );
}
