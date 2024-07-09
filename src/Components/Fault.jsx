import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import top_end from "../assets/image/webp/sec-2-top-end.webp";
import redline from "../assets/image/webp/red-line.webp";

const Fault01 = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, [])
    return (
        <section className=' relative pb-7 pt-16'>
            <div className="container px-3 mt-20 relative z-[1]">
                <div className=" flex flex-col sm:flex-row justify-center items-start pt-2 gap-[61.66px] pl-12">
                    <div className=" flex flex-col">
                        <h2 className=' text-black font-neue font-normal lg:leading-[77.28px] text-3xl md:text-5xl lg:text-6xl' data-aos="fade-right" data-aos-duration="1000" >
                            IT'S NOT
                        </h2>
                        <h2 className=' text-black font-neue font-normal ml-[73px] lg:leading-[77.28px] text-3xl md:text-5xl lg:text-6xl' data-aos="fade-right" data-aos-duration="1000">
                            <span className='text-[#F77B0B]'>YOUR</span> FAULT!
                        </h2>
                    </div>
                    <div className=" border-l-2 border-[#9800B0] pl-2 mt-[6px]" data-aos="fade-left" data-aos-duration="1000">
                        <p className=' max-w-[288px] font-poppins font-normal text-base text-black ml-0.5 pl-px -mt-[6px]'>
                            It's not your fault for not knowing how to let go of the partner who no longer made you feel special.
                        </p>
                    </div>
                </div>
                <h2 className=' mt-14 text-center font-neue font-normal text-xl text-black' data-aos="fade-up" data-aos-duration="1000">
                    How would you know when you are busy with completely different things at the moment:
                </h2>
                <div className=" absolute -top-36 sm:-top-40 md:-top-48 lg:-top-[106%] xl:-top-[115%] left-3 flex items-start flex-col" data-aos="fade-right" data-aos-duration="1000">
                    <p className=' uppercase font-poppins text-black font-light md:text-base lg:text-xl tracking-wider -rotate-90 -ml-5 mb-[20px]'>
                        MJH
                    </p>
                    <div className=" flex items-end">
                        <img src={redline} alt="redline" className=' lg:w-auto w-1/12' />
                        <div className=" flex items-end -mb-3">
                            <span className=' md:text-3xl lg:text-[40px] font-normal lg:mb-3 font-neue text-black -rotate-90'>
                                01
                            </span>
                            <p className=' font-normal font-neue text-black md:text-xl lg:text-2xl uppercase lg:mb-1'>
                                fault
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={top_end} alt="top_end" className=' absolute end-0 top-16' />
        </section>
    )
}

export default Fault01;