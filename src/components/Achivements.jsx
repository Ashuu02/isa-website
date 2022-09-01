import React from "react";
import pic from "../Assets/pic.png";
import { FaLinkedinIn } from "react-icons/fa";

const Achievements = () => {
  return (
    <>
      <div
        id="about"
        className="max-w-[full] bg-[#12141D] h-full flex items-center "
      >
        <div className="flex lg:flex-row justify-center items-center mt-[30px]">
          <div className="justify-between items-center lg:items-stretch relative w-[90%] mb-20 mt-[40px] ">
            <div className="mt-0 text-center items-center flex m-auto w-full h-full justify-center text-white max-w-[90%]">
              <h1 className=" uppercase w-full text-white text-3xl font-extrabold m-5 text-center ">
                Our Achievements
                {/* <img src={Gold} className="h-[50px] items-center justify-center w-[50px]" /> */}
              </h1>
            </div>
            <div className="mt-0 text-center items-center flex m-auto w-full h-full mb-20 justify-center text-white max-w-[90%]">
              {" "}
              <p className="text-center justify-center flex items-center py-4 max-w-[70%] m-auto">
                Transform images into its cartoon. Yes, the objective of this
                machine learning project is to CARTOONIFY the images. Transform
                images into its cartoon. Yes, the objective of this machine
                learning project is to CARTOONIFY the images.
              </p>
            </div>
            {/* Column 1 */}
            <div className="text-white mt-[0] w-full md:w-auto">
              <div className="p-6 shadow-xl bg-[#1E2028] rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 justify-center items-left">
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="font-bold w-full p-4 text-3xl">
                      Sayam Palrecha
                    </h3>
                    <div className="flex p-3 w-full rounded-md bg-[#D9D9D9] m-3 max-w-[90%] md:height-[27px]" />
                    <div className="flex p-3 w-full rounded-md bg-[#D9D9D9] m-3 max-w-[90%] md:height-[27px]" />
                    <div className="flex p-3 w-full rounded-md bg-[#D9D9D9] m-3 max-w-[90%] md:height-[27px]" />
                  </div>

                  <div className=" rounded-xl  items-center w-full md:w-[80%] justify-between mt-0 text-center flex m-auto  h-full  text-white">
                    <img
                      src={pic}
                      className="rounded-xl w-full h-[85%] sm:h-[full]"
                      alt="/"
                    />
                  </div>
                  <div className="flex items-center justify-between flex-col-3 m-auto text-center text-white h-full max-w-[full] ">
                    <div className="rounded-md flex-col p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#12141D]">
                      <FaLinkedinIn />
                    </div>
                    <div className="rounded-md p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#12141D]">
                      <FaLinkedinIn />
                    </div>
                    <div className="rounded-md p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#12141D]">
                      <FaLinkedinIn />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="text-white mt-10 w-full md:w-auto">
              <div className="p-6 shadow-xl bg-[#1E2028] rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 justify-center items-left">
                  <div className=" rounded-xl  items-center w-full md:w-[80%] justify-between mt-0 text-center flex m-auto  h-full  text-white">
                    <img
                      src={pic}
                      className="rounded-xl w-full h-[80%] sm:h-[full]"
                      alt="/"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="font-bold w-full sm sm:text-justify p-4 text-3xl">
                      Sayam Palrecha
                    </h3>
                    <div className="flex p-3 w-full rounded-md bg-[#D9D9D9] m-3 max-w-[90%] md:height-[27px]" />
                    <div className="flex p-3 w-full rounded-md bg-[#D9D9D9] m-3 max-w-[90%] md:height-[27px]" />
                    <div className="flex p-3 w-full rounded-md bg-[#D9D9D9] m-3 max-w-[90%] md:height-[27px]" />
                  </div>
                  <div></div>
                  <div className="flex  items-right justify-between flex-col-3 m-auto text-center text-white h-full max-w-[full] ">
                    <div className="rounded-md flex-col p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#12141D]">
                      <FaLinkedinIn />
                    </div>
                    <div className="rounded-md p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#12141D]">
                      <FaLinkedinIn />
                    </div>
                    <div className="rounded-md p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#12141D]">
                      <FaLinkedinIn />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-0 text-center items-center flex m-auto w-full h-full justify-center text-white max-w-[90%]">
              <button className="w-[185px] h-[67px] bg-[#F13C3D] mt-[50px] cursor-pointer hover:scale-110 ease-in duration-300 items-center justify-center font-bold rounded-[7px] m-10">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
