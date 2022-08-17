import React, {useState} from "react";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import club_logo from "../Assets/isaLogo.svg";


// import "./Footer.module.css";

const ErrorMessage = ()=>{
  return (
    <p className=" m-1 text-sm p-2 bg-red-100 border rounded-md border-success text-failure ">
      Please enter a valid email.
    </p>
  );
}

const SuccessMessage = () => {
  return (
    <p className=" m-1 text-sm p-2 bg-green-100 border rounded-md border-success text-success ">
      Success. Check your inbox and confirm your email.
    </p>
  );
};

const Footer = () => {
  
  const [subscribe, setSubscribe] = useState()

  return (
    <div className="flex flex-col md:justify-center justify-between items-center bg-[#12141D] gradient-bg-footer p-4 w-full">
      <div className="sm:w-[90%] flex flex-col sm:flex-row my-4 justify-between items-center m-10">
        <div className="flex justify-center items-center">
          <img src={club_logo} alt="club_logo" className="" />
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex justify-end items-center flex-col w-full">
            <h1 className="text-white text-2xl text-center ">
              IntellexAi Student Association
            </h1>
          </div>
          <br />
          <div className="sm:w-[70%] flex flex-col justify-start items-center">
            <p className="text-white text-sm text-center ">
              We’re a diverse and passionate team that takes ownership of your
              design and empower you to execute the roadmap. We stay light on
              our feet and truly enjoy delivering great work.
            </p>
          </div>
          <br />
          <div className="sm:w-[45%] flex flex-col justify-start items-center">
            {/* <SuccessMessage /> */}
            <form className="max-w-sm">
              <div className="relative flex rounded-full items-center bg-white border border-gray-300 p-1 focus-within:border-blue-500 focus-within:ring-blue-200 focus-within:ring-4">
                <input
                  className="appearance-none bg-white border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Enter your email"
                />
                <button className="flex-shrink-0 bg-[#F13D3D] hover:bg-red-700 border-[#F13D3D] hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded-full ">
                  Subscribe
                </button>
              </div>
            </form>
            {/* <ErrorMessage/> */}
          </div>
        </div>

        <div className="footer_social object-contain flex flex-row sm:flex-col m-3 justify-between items-center">
          <a
            className="footer_social_links"
            href="https://www.linkedin.com/company/isa-dypcoe/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="flex justify-between items-start m-4 ">
              <div className="w-10 h-10 rounded-full border-2 border-white hover:bg-[#43609f] hover:animate-bounce flex justify-center items-center">
                <FaLinkedin fontSize={17} color="white" />
              </div>
            </div>
          </a>

          <a
            className="footer_social_links "
            href="https://www.instagram.com/isa_dypcoe"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex justify-between items-start m-4  ">
              <div className="w-10 h-10 rounded-full border-2 hover:bg-[#d83daa] hover:animate-bounce border-white flex justify-center items-center">
                <FaInstagram fontSize={17} color="white" />
              </div>
            </div>
          </a>

          <a
            href="https://discord.gg/wBSF97Jbn3"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex justify-between items-start m-4 ">
              <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center hover:motion-safe:animate-bounce hover:bg-[#820ca6]">
                <FaDiscord fontSize={17} color="white" />
              </div>
            </div>
          </a>
        </div>
      </div>{" "}
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 sm:w-[70%]">
        <p className="text-white text-center text-md text-base mx-2 cursor-pointer">
          <a className="hover:text-[#da9e9e]" href="/">
            {" "}
            Home{" "}
          </a>
        </p>
        <p className="text-white text-center text-md text-base mx-2 cursor-pointer">
          <a className="hover:text-[#da9e9e]" href="/activity">
            {" "}
            Activity{" "}
          </a>
        </p>
        <p className="text-white text-center text-md text-base mx-2 cursor-pointer">
          <a className=" hover:text-[#da9e9e]" href="/achievements">
            {" "}
            Achievements{" "}
          </a>
        </p>
        <p className="text-white text-center text-md text-base mx-2 cursor-pointer">
          <a className="hover:text-[#da9e9e]" href="/team">
            {" "}
            Team{" "}
          </a>
        </p>
        <p className="text-white text-center text-md text-base mx-2 cursor-pointer">
          <a className="hover:text-[#da9e9e]" href="/blog">
            {" "}
            Blog{" "}
          </a>
        </p>
        <p className="text-white text-center text-md text-base mx-2 cursor-pointer">
          <a className="hover:text-[#da9e9e]" href="/about">
            {" "}
            About{" "}
          </a>
        </p>
      </div>
      <div className="sm:w-[70%] w-full h-[0.25px] bg-gray-400 mt-5" />
      <div className="flex items-center mt-3">
        <p className="text-white text-center">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
