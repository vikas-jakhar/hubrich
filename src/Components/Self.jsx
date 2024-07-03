import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Self = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className=' relative bg-self-img bg-no-repeat bg-cover bg-center py-2 md:py-0'>
      <div className="container px-3">
        <div className=" flex justify-center flex-wrap md:flex-nowrap lg:justify-end w-full lg:pr-[78px] gap-[29px] md:gap-0">
          <div className=" pt-10 w-full max-w-[250px] h-[162px] bg-[#003E9233] flex justify-center items-start duration-300 ease-linear hover:bg-[#003E92] backdrop-blur-sm" data-aos="zoom-in" data-aos-duration="1000">
            <p className=' font-poppins font-normal text-base text-white mt-0.5 max-w-[173px]'>
              Your self-esteem is in the basement.
            </p>
          </div>
          <div className=" pt-10 w-full max-w-[250px] h-[162px] bg-[#003E9233] flex justify-center items-start duration-300 ease-linear hover:bg-[#003E92] backdrop-blur-sm" data-aos="zoom-in" data-aos-duration="1000">
            <p className=' font-poppins font-normal text-base text-white mt-0.5 max-w-[197px]'>
              You keep asking yourself what you did wrong.
            </p>
          </div>
          <div className=" pt-10 w-full max-w-[250px] h-[162px] bg-[#003E9233] flex justify-center items-start duration-300 ease-linear hover:bg-[#003E92] backdrop-blur-sm" data-aos="zoom-in" data-aos-duration="1000">
            <p className=' font-poppins font-normal text-base text-white mt-0.5 max-w-[173px]'>
              The feeling of helplessness is your constant companion.
            </p>
          </div>
        </div>
        <div className=" flex justify-center flex-wrap md:flex-nowrap lg:justify-start w-full mt-7 pt-px lg:pl-7 gap-[29px] md:gap-0">
          <div className=" pt-11 w-full max-w-[250px] h-[169px] bg-[#003E9233] flex justify-center items-start duration-300 ease-linear hover:bg-[#003E92] backdrop-blur-sm" data-aos="zoom-in" data-aos-duration="1000">
            <p className=' font-poppins font-normal text-base text-white mt-px max-w-[173px]'>
              You spend the nights alone and lonely.
            </p>
          </div>
          <div className=" pt-11 w-full max-w-[250px] h-[169px] bg-[#003E9233] flex justify-center items-start duration-300 ease-linear hover:bg-[#003E92] backdrop-blur-sm" data-aos="zoom-in" data-aos-duration="1000">
            <p className=' font-poppins font-normal text-base text-white mt-px max-w-[197px]'>
              You have stopped going out and spend the time crying in your room.
            </p>
          </div>
          <div className=" pt-11 w-full max-w-[250px] h-[169px] bg-[#003E9233] flex justify-center items-start duration-300 ease-linear hover:bg-[#003E92] backdrop-blur-sm" data-aos="zoom-in" data-aos-duration="1000">
            <p className=' font-poppins font-normal text-base text-white mt-px max-w-[173px]'>
              An emotional chaos is raging inside you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Self
