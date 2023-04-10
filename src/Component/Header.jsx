import React from "react";
import Lottie from "lottie-react";
import Animation from "../assets/Lottie/75702-job-proposal-review-animation.json";
import { Button } from "flowbite-react";

const Header = () => {
  return (
    <div className="container mx-auto my-5 shadow-md rounded-xl text-center md:text-justify bg-slate-100 py-10 ">
      <div className="flex flex-col-reverse mx-10 md:flex-row  justify-around items-center md:mx-10 gap-5">
        <div className=" space-y-5 ">
          <h1 className=" text-3xl md:text-4xl lg:text-5xl  md:text-center lg:text-justify  font-bold pt-10 pb-5">
          <span className=" md:mx-5 lg:mx-0">  One Step </span><br /> <span>Closer To Your</span> <br /> <span className="bg-clip-text text-transparent  bg-gradient-to-r from-purple-600 to-purple-500">Dream Job</span>
          </h1>
          <p className="text-sm lg:text-xl tracking-wider text-justify leading-5 text-gray-800 font-semibold ">
            Explore thousands of job opportunities with all the <br />
            information you need. Its your future. Come find it. Manage all{" "}
            <br /> your job application from start to finish.
          </p>
          <Button className="bg-btn mx-auto md:mx-0 shadow-lg  hover:shadow-violet-700/40 my-5"> Get Started</Button>
        </div>
        <div className=" w-full lg:w-1/3 ">
          <Lottie animationData={Animation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Header;
