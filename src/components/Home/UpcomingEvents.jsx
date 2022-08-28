import React from 'react'

const UpcomingEvents = () => {
  return (
    <>
      <div className="text-white text-center font-semibold lg:text-[56px] text-3xl mr-16 ml-16 pt-16 pb-16">
          Upcoming Events
      </div>

      <div className="flex lg:flex-row flex-col justify-center items-center">
        <div className="flex lg:flex-row flex-col justify-center items-center lg:items-stretch bg-[#1E2028] relative w-[90%] max-w-[1185px] rounded-[2rem] mt-[40px] ">
            {/* Date */}
            <div className="lg:w-[296px] text-white lg:ml-[50px] mt-[20px]">
              <p className="text-[96px] decoration-0">19<span className="text-[24px] ml-[0px] font-normal"> August </span> </p> 
              <p className="text-[20px] lg:w-[200px] text-center">11:00 AM - 1:00 PM</p>
              <button className="w-[185px] h-[67px] bg-[#F13C3D] mt-8 rounded-[7px]" >Register Now</button> 
            </div>
            {/* Event Description */}
            <div className="lg:w-[498px]  text-white mt-10 text-center lg:text-left lg:pr-[50px]"  >
              <span className="text-[40px] top-0 font-[500]">Python Workshop</span>
              <p className="mt-12 text-[16px] font-normal">
                Transform images into its cartoon. Yes, the objective of this machine learning project is to CARTOONIFY the images. Transform images into its cartoon. Yes, the objective of this machine learning project is to CARTOONIFY the images. 
              </p>
            </div>
            {/* Image */}
            <div className="bg-hero h-[274px] md:w-[324px] w-[90%] bg-no-repeat self-center m-10 rounded-[2rem]"></div>
        </div>
      </div>
    </>
  )
}

export default UpcomingEvents
