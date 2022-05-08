import React from 'react'

const index : React.FC = () => {
  return (
    <div  className="mt-48 bg-white items-center justify-center text-center relative">
      <img src="./Images/rectangle2.svg" alt="" className="w-full h-auto"/>
      <div data-aos="zoom-in" className="absolute w-full h-full items-center justify-center text-center top-0 flex flex-col">
        <p className="text-white text-4xl font-semibold text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px]">Not getting refund response or <span className="block sm:pt-2 lg:pt-5">replacement?</span></p>
        <div className="pt-[10px] sm:pt-[40px] lg:pt-[72px]">
          <button className="items-center justify-center text-center bg-blue-600 rounded-[10px] py-4 px-[20px] lg:px-[45px]"><p className="mx-auto items-center justify-center text-center text-white font-semibold text-[12px] md:text-[13px] lg:text-[15px] xl:text-[18px]">Post a complaint</p></button>
        </div>
      </div>  
    </div>
  )
}

export default index