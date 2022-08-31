import React from 'react'
import "./RegisterNow.css"

const RegisterNow = () => {
  return (
    <>
        <div className="flex relative lg:left-[100px] items-center mt-[100px] mb-[100px]">
          <div className='box lg:w-[587px] left-0 w-[94%] left-[3%]'>
            <h1 className='heading'>Artificial Intellegence In Gaming</h1>

            <div className='Btn lg:left-[100px] lg:w-[337px] relative w-[80%] left-[3%]'>
              <span className="ttl">
                Description:
              </span> 
              <small className='smtxt'>
                An Introductory Session
              </small>
            </div>

            <div className='Btn lg:left-[100px] lg:w-[337px] relative w-[80%] left-[3%]'>
              <span className="ttl">
                Speaker:
              </span>  
              <small className='smtxt'>
                Ansh Mehra
              </small>
            </div>

            <div className='Btn lg:left-[100px] lg:w-[337px] relative w-[80%] left-[3%]'>
              <span className="ttl">
                Date:</span>  
              <small className='smtxt'>
                1/08/2022
              </small>
            </div>

            <div className="regnow text-center">
              <button className='regT text-[30px] lg:text-[37px]'>
                Register Now -&gt; 
              </button>
            </div>
          </div>
        </div>
    </>
  )
}

export default RegisterNow