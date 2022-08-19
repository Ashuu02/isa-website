import react from 'react';

const Achievements = () => {
    return (
    <>
        <hr className="w-[80%] left-[10%] relative mt-[100px] color-[#FFFFFF] border-2 bg-white"></hr>

        <div className="flex lg:flex-row flex-col justify-center items-center mt-[30px]">

            <div className="flex md:flex-row flex-col justify-between items-center lg:items-stretch relative w-[90%] max-w-[1185px] rounded-[2rem] mt-[40px] ">
               {/* Column 1 */}
                <div className="text-white mt-[0] w-full md:w-auto">
                <h1 className="h-[75px] md:w-[526px] w-[75px] text-white md:text-[56px] text-3xl font-extrabold m-10 mb-[150px] md:mb-[180px] text-center md:text-left">
                    Achievements
                </h1>
                    <div className=" md:w-[494px] h-[330px] w-full flex flex-col my-auto left-0 items-center bg-[#1E2028] rounded-[2rem] md:m-10">
                        <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" className="h-[185px] w-[183px] rounded-full relative top-[-20%]"></img>
                        <h1 className="w-[297px] h-[28px] text-center font-extrabold text-[28px] relative top-[-15%]">
                            Srushtri Chavanke
                        </h1>
                        <h1 className="w-[191px] h-[29px] text-center font-extrabold text-[28px] text-[#FFAC00] relative top-[-15%] mt-[20px]">
                            1st Position
                        </h1>
                        <p className="md:w-[405px] w-auto h-[80px] text-center relative top-[-10%] mt-[16px]">
                            Transform images into its cartoon. Yes, the objective of this machine learning project is to CARTOONIFY the images.
                        </p>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="col2 text-white mt-[100px] w-full md:w-auto">
                    <div className=" md:w-[494px] h-[330px] w-full flex flex-col my-auto left-0 items-center bg-[#1E2028] rounded-[2rem] md:m-10">
                        <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" className="h-[185px] w-[183px] rounded-full relative top-[-20%]"></img>
                        <h1 className="w-[297px] h-[28px] text-center font-extrabold text-[28px] relative top-[-15%]">Sayam Palrecha</h1>
                        <h1 className="w-[191px] h-[29px] text-center font-extrabold text-[28px] text-[#C2C2C2] relative top-[-15%] mt-[20px]">
                            2nd Position
                        </h1>
                        <p className="md:w-[405px] w-auto h-[80px] text-center relative top-[-10%] mt-[16px]">
                            Transform images into its cartoon. Yes, the objective of this machine learning project is to CARTOONIFY the images.
                        </p>
                    </div>

                    <button className="w-[185px] h-[67px] bg-[#F13C3D] mt-[50px] font-bold rounded-[7px] m-10" >
                        View More
                    </button> 
                </div>
            </div>

        </div>
    </>
    )
}

export default Achievements;