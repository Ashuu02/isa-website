import React from 'react'

const VisionMission = () => {
  return (
    <>
        <div className="flex lg:flex-row flex-col justify-center items-center mt-[30px]">
            <div className="flex md:flex-row flex-col justify-between items-center lg:items-stretch relative w-[90%] max-w-[1185px] rounded-[2rem] mt-[40px] ">

                {/* vision column */}
                <div className="text-white mt-[0] w-full md:w-auto">
                    <div className=" md:w-[506px] h-[335px] w-full  rounded-[2rem] md:m-10 mb-[50px]">
                        <h1 className='text-[64px]'>Vision</h1> 
                        <p className='mt-[25px] lg:w-[477px] text-[20px]'>
                            Transform images into its cartoon. Yes, the objective of this machine learning project is to CARTOONIFY the images. Transform images into its cartoon. Yes, the objective of this machine learning project is to CARTOONIFY the images.
                        </p>
                    </div>
                </div>

                {/* top blank column*/}
                <div className="col2 text-white w-full md:w-auto">
                    <div className=" md:w-[506px] h-[335px] w-full flex flex-col my-auto left-0 items-center bg-[#1E2028] rounded-[2rem] md:m-10">
                    </div>
                </div>
            </div>
        </div>

        {/* bottom two cols */}
        <div className="flex lg:flex-row flex-col justify-center items-center ">

            {/* Col */}
            <div className="flex md:flex-row flex-col justify-between items-center lg:items-stretch relative w-[90%] max-w-[1185px] rounded-[2rem] mt-[40px] ">
                
                {/* bottom blank column */}
                <div className="text-white mt-[0] w-full md:w-auto">
                    <div className=" md:w-[506px] h-[335px] w-full flex flex-col my-auto left-0 items-center bg-[#1E2028] rounded-[2rem] md:m-10">
                    </div>
                </div>

                {/* Mission Column*/}
                <div className="col2 text-white w-full md:w-auto">
                    <div className=" md:w-[506px] h-[335px] w-full  rounded-[2rem] md:m-10">
                        <h1 className='text-[64px]'>Mission</h1>
                        <p className='text-[20px] mt-[25px] lg:w-[477px]'>
                            Transform images into its cartoon. Yes, the objective of this machine learning project is to CARTOONIFY the images. Transform images into its cartoon. Yes, the objective of this machine learning project is to CARTOONIFY the images.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default VisionMission