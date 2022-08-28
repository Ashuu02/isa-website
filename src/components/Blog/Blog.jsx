import React from 'react'
import './blog.css'
const Blog = () => {
  return (
    <>
    <div className="text-white font-semibold lg:text-[3rem] text-3xl mr-16 ml-16 pt-16 pb-16">News and Insight</div>
    <div className="flex lg:flex-row flex-col justify-center items-center ">
      <div className="lg:w-[350px] lg:h-[354px] bg-[#1E2028] rounded-[2rem] m-8">
        <div className='bg-[#FF3F3F] pt-1 w-[135px] h-[35px] items-center justify-center text-center rounded-xl text-white relative m-8 mr-0'>
          <a href="https://aids-blog.vercel.app">view article</a>
        </div>
        <div className="text-white font-bold text-lg p-8 pt-2">
        Cartoonify Image with Machine Learning
        </div>
         <div className="text-white  p-8 pt-2">
         Transform images into its cartoon. Yes, the objective of this machine learning project is to CARTOONIFY the images.
        </div>
      </div>
      <div className="lg:w-[350px] lg:h-[354px] bg-hero bg-cover rounded-[2rem] m-8">
        <div className="text-white font-bold text-lg p-8 ">
        Image Segmentation
        </div>
        <div className="text-white  p-8 pt-2 opacity-0">
         The iris flowers have different species and you can distinguish them based on the length of petals and sepals.
        </div>
        <div className='bg-[#FF3F3F] pt-1 w-[135px] h-[35px] items-center justify-center text-center rounded-xl text-white relative m-8 mr-0'>
          <a href="https://aids-blog.vercel.app">view article</a>
        </div>
      </div>
      <div className="lg:w-[350px] lg:h-[354px] bg-[#1E2028] rounded-[2rem] m-8">
        <div className='bg-[#FF3F3F] pt-1 w-[135px] h-[35px] items-center justify-center text-center rounded-xl text-white relative m-8 mr-0'>
          <a href="https://aids-blog.vercel.app">view article</a>
        </div>
        <div className="text-white font-bold text-lg p-8 pt-2">
        Iris Flowers Classification Project
        </div>
         <div className="text-white  p-8 pt-2">
         The iris flowers have different species and you can distinguish them based on the length of petals and sepals.
        </div>
      </div>
    </div>
    </>
    )
}

export default Blog