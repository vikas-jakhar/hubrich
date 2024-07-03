import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import msg from "../Assets/image/svg/msg-icon.svg";
import flower from "../Assets/image/webp/flower.png";

const Book02 = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className=' py-11 relative'>
            <div className="container px-3 relative z-[1] my-0.5 py-px">
                <h2 className=' font-poppins font-normal text-base text-black mb-5 text-center' data-aos="fade-up" data-aos-duration="1000">
                    You are not alone! Numerous women before you stood exactly at this point, where you are now.
                </h2>
                <div className=" flex justify-center pb-14" data-aos="fade-up" data-aos-duration="1000">
                    <div className=" max-w-[452px] rounded-[63px] w-full p-[1.7px] bg-[linear-gradient(107.9deg,_#0C5FD1_1.25%,_#8703C5_93.71%)] cursor-pointer">
                        <div className=" flex items-center max-w-[452px] rounded-[63px] w-full py-[5.83px] px-2 bg-white duration-300 ease-linear hover:shadow-[0_0_5px_#1E52CF_inset]">
                            <img src={msg} alt="msg-icon" />
                            <div className="flex">
                                <p className=' font-inter font-medium text-sm capitalize sm:text-base bg-clip-text bg-[linear-gradient(107.9deg,_#0C5FD1_1.25%,_#8703C5_93.71%)] text-transparent ms-1'>
                                    Book a non-binding initial consultation now
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-14 pt-2">
                    <div className=" flex items-center mt-0.5 flex-wrap justify-center lg:justify-start sm:flex-nowrap gap-3">
                        <div className=' lg:max-w-[280px]' data-aos="fade-right" data-aos-duration="1000">
                            <p className=' uppercase font-neue font-normal text-nowrap text-center sm:text-left text-4xl md:text-4xl lg:text-[52px] lg:leading-[66px] text-black'>
                                what you
                            </p>
                            <h2 className=' uppercase font-neue font-normal text-nowrap text-center sm:text-left text-4xl md:text-5xl lg:text-6xl text-black'>
                                will <span className=' text-[#F77B0B]'>get</span>
                            </h2>
                        </div>
                        <div className="flex" data-aos="fade-up" data-aos-duration="1000">
                            <img src={flower} alt="flower" className='w-full' />
                        </div>
                        <div className=" border-l-2 border-[#9800B0] pl-3" data-aos="fade-left" data-aos-duration="1000">
                            <p className=' max-w-[419px] font-poppins font-normal text-sm md:text-base text-black pl-px -mt-[6px]'>
                                I will show you which steps are necessary for you to finally successfully let go of your EX. And I will support you to look confidently into your new future.
                            </p>
                        </div>
                    </div>
                </div>
                <h2 className='text-center mt-12 font-neue font-normal text-xl text-black'>
                    In a 1:1 live coaching session, we will clarify the following questions in particular:
                </h2>
                <div className=" mt-7">
                    <div className="">
                        <p>
                            
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Book02;
