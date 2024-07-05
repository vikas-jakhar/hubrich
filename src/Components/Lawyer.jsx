import React from 'react';
import redline from "../Assets/image/webp/red-line5.png";
import men from "../Assets/image/webp/men-img.png";
import layer from "../Assets/image/webp/line-layer.png";

const Lawyer = () => {
    return (
        <section className=' relative pt-3'>
            <div className="container px-3 relative z-[1]">
                <div className=" flex justify-start">
                    <div className=" relative flex items-start flex-col md:-right-1 lg:right-0" data-aos="fade-right" data-aos-duration="1000">
                        <div className=" flex items-end">
                            <img src={redline} alt="redline" className=' lg:w-auto md:w-3/12 sm:w-2/12 w-1/12' />
                            <div className=" flex items-end -mb-3">
                                <span className=' md:text-3xl lg:text-[40px] font-normal lg:mb-3 font-neue text-black -rotate-90'>
                                    05
                                </span>
                                <p className=' font-normal font-neue text-black md:text-xl lg:text-2xl uppercase lg:mb-1'>
                                    about
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:mt-[52px] mt-8 flex md:flex-row -mx-3 xl:mx-0 flex-col-reverse items-center md:items-start">
                    <div className=" xl:max-w-[547px] xl:max-h-[574px] xl:h-full md:w-1/2 xl:w-full px-3 xl:px-0 w-8/12 mt-3 md:mt-0">
                        <img src={men} alt="men" className=' w-full' />
                    </div>
                    <div className="px-3 xl:px-0 md:w-1/2 xl:w-auto w-full">
                        <div className="xl:ml-[50px] flex flex-col items-center md:items-start">
                            <p className=' max-w-[523px] text-center md:text-left font-neue font-normal text-3xl sm:text-4xl text-black lg:text-5xl xl:text-[52px] uppercase xl:leading-[66px]'>
                                LAWYER <span className=' text-[#F77B0B]'>&</span> DIVORCE COACH
                            </p>
                            <p className='font-neue text-center md:text-left font-normal xl:text-[37px] lg:text-3xl text-2xl xl:leading-[37px] text-black uppercase lg:mb-7 mb-3'>
                                <span className='text-[#F77B0B]'>M</span>arc <span className='text-[#F77B0B]'>J</span>oachim <span className='text-[#F77B0B]'>H</span>ubrich
                            </p>
                            <p className=' pt-0.5 text-center md:text-left font-neue font-bold text-xl text-black'>
                                About the mindset agency coach
                            </p>
                            <p className=' mt-3 text-center md:text-left font-poppins font-normal text-black text-base opacity-70 max-w-[484px] mb-0.5 pb-px'>
                                Marc J. Hubrich is the founder of the mindset agency specializing in consulting services.
                            </p>
                            <div className=" max-w-[350px] mt-8 rounded-[63px] w-full p-[1.7px] bg-[linear-gradient(107.9deg,_#0C5FD1_1.25%,_#8703C5_93.71%)] cursor-pointer">
                                <div className=" flex items-center justify-center max-w-[452px] rounded-[63px] w-full py-4 px-2 bg-white duration-300 ease-linear hover:shadow-[0_0_5px_#1E52CF_inset]">
                                    <div className="flex gap-3 items-center">
                                        <p className=' font-inter capitalize font-medium text-sm sm:text-base bg-clip-text bg-[linear-gradient(107.9deg,_#0C5FD1_1.25%,_#8703C5_93.71%)] text-transparent ms-1'>
                                            Learn more about the agency
                                        </p>
                                        <span>
                                            <svg width="41" height="14" viewBox="0 0 41 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M40.101 7.60104C40.433 7.2691 40.433 6.73091 40.101 6.39896L34.6917 0.989595C34.3597 0.65765 33.8215 0.65765 33.4896 0.989595C33.1576 1.32154 33.1576 1.85973 33.4896 2.19168L38.2979 7L33.4896 11.8083C33.1576 12.1403 33.1576 12.6785 33.4896 13.0104C33.8215 13.3424 34.3597 13.3424 34.6917 13.0104L40.101 7.60104ZM0.5 7.85L39.5 7.85L39.5 6.15L0.5 6.15L0.5 7.85Z" fill="url(#paint0_linear_2381_55)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_2381_55" x1="-3.7" y1="7.38462" x2="-3.4011" y2="11.1488" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#0C5FD1" />
                                                        <stop offset="1" stop-color="#8703C5" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={layer} alt="layer" className=' absolute right-0 bottom-0' />
        </section>
    )
}

export default Lawyer;