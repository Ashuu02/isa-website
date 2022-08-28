import React from 'react'

const Team = () => {
  return (
    <>
        <div className="text-white text-center font-semibold lg:text-[56px] text-3xl mr-16 ml-16 pt-16 lg:pb-16">
            Meet Our Team
        </div>

        <div className="flex lg:flex-row flex-col justify-center items-center ">
            <div className="flex md:flex-row flex-col justify-center items-center lg:items-stretch relative w-[90%] max-w-[1185px] rounded-[2rem] lg:mt-[0px] mb-[200px]">
                
                {/* Column 1 */}
                <div className="text-white mt-[0] w-full md:w-auto relative lg:top-[150px] top-[50px] lg:top-[150px]">
                    <div className=" lg:w-[300px] h-[300px]  flex flex-col my-auto left-0 items-center bg-[#1E2028] rounded-[8px] md:m-10">
                        <div class="flex items-center justify-center h-[260px] md:w-[250px] w-[90%] bg-[#D9D9D9] relative top-[20px] rounded-[8px]">
                            {/* Picture Probabily */}
                        </div>
                    </div>
                    <h1 className='text-center text-[24px] font-bold'>
                        Vinayak Kottawar
                    </h1>
                    <h2 className='text-center text-[24px] font-normal'>
                        HOD - AI & DS Branch
                    </h2>
                </div>

                {/* Column 2 */}
                <div className="text-white mt-[0] w-full md:w-auto relative top-[100px] lg:top-0">
                
                    <div className=" md:w-[300px] h-[300px] w-full flex flex-col my-auto left-0 items-center bg-[#1E2028] rounded-[8px] md:m-10">
                        <div class="flex items-center justify-center h-[260px] md:w-[250px] w-[90%] bg-[#D9D9D9] relative top-[20px] rounded-[8px]">
                            {/* Picture Probabily */}
                        </div>
                    </div>
                    <h1 className='text-center text-[24px] font-bold'>
                        Vinayak Kottawar
                    </h1>
                    <h2 className='text-center text-[24px] font-normal'>
                        HOD - AI & DS Branch
                    </h2>
                </div>

                {/* Column 3 */}
                <div className="text-white mt-[0] w-full md:w-auto relative top-[150px]">
                
                    <div className=" md:w-[300px] h-[300px] w-full flex flex-col my-auto left-0 items-center bg-[#1E2028] rounded-[8px] md:m-10">
                        <div class="flex items-center justify-center h-[260px] md:w-[250px] w-[90%] bg-[#D9D9D9] relative top-[20px] rounded-[8px]">
                            {/* Picture Probabily */}
                        </div>
                    </div>
                    <h1 className='text-center text-[24px] font-bold'>
                        Vinayak Kottawar
                    </h1>
                    <h2 className='text-center text-[24px] font-normal'>
                        HOD - AI & DS Branch
                    </h2>
                </div>
            </div>
        </div>


        {/* Bottom 4 blank columns */}
        <div className="flex lg:flex-row flex-col justify-center items-center ">
            <div className="flex md:flex-row flex-col justify-center items-center lg:items-stretch relative w-[90%] max-w-[1185px] rounded-[2rem] mt-[40px] mb-[150px]">
                <div className='h-[246px] w-full lg:w-[268px] bg-[#D9D9D9] lg:ml-8 rounded-[16px] lg:mg-0 mb-8'></div>
                <div className='h-[246px] w-full lg:w-[268px] bg-[#D9D9D9] lg:ml-8 rounded-[16px] lg:mg-0 mb-8'></div>
                <div className='h-[246px] w-full lg:w-[268px] bg-[#D9D9D9] lg:ml-8 rounded-[16px] lg:mg-0 mb-8'></div>
                <div className='h-[246px] w-full lg:w-[268px] bg-[#D9D9D9] lg:ml-8 rounded-[16px] lg:mg-0 mb-8'></div>
            </div>
        </div>

        {/* Below 3 columns */}
        <div className="flex lg:flex-row flex-col justify-center items-center ">
            <div className="flex md:flex-row flex-col justify-center items-center lg:items-stretch relative w-[90%] max-w-[1185px] rounded-[2rem]  lg:mb-[200px]">              
                <div className='h-[246px] w-full lg:w-[268px] bg-[#D9D9D9] lg:ml-8 rounded-[16px] lg:mg-0 mb-8'></div>
                <div className='h-[246px] w-full lg:w-[268px] bg-[#D9D9D9] lg:ml-8 rounded-[16px] lg:mg-0 mb-8'></div>
                <div className='h-[246px] w-full lg:w-[268px] bg-[#D9D9D9] lg:ml-8 rounded-[16px] lg:mg-0 mb-8'></div>
            </div>
        </div>
    </>
  )
}

export default Team