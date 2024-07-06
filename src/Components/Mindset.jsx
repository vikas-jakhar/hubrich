import React from 'react';
import redline from "../Assets/image/webp/red-line4.png";
import ellipse from "../Assets/image/webp/ellipse-top.png";
import msg from "../Assets/image/svg/msg-icon.svg";
import Slider from "react-slick";
import layer from "../Assets/image/webp/slider-layer.png";

const Mindset = () => {
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className='next absolute bottom-[23px] left-4 sm:left-[22px] cursor-pointer z-[1]' onClick={onClick}>
                <svg className=' w-3 sm:w-[21px] sm:h-[36px]' viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.25098L19 18.251L1 35.251" stroke="white" stroke-width="1.5" />
                </svg>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className='prev absolute bottom-[23px] cursor-pointer -left-7 sm:-left-11 z-[1]' onClick={onClick}>
                <svg className=' w-3 sm:w-[21px] sm:h-[36px]' viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 1.25098L2 18.251L20 35.251" stroke="#9800B0" stroke-width="1.5" />
                </svg>
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section className=' relative pt-2 pb-24 overflow-hidden'>
            <div className="container px-3 mt-2 xl:pb-0 lg:mb-[88px] relative z-[1]">
                <div className=" flex justify-end lg:pb-6">
                    <div className=" relative flex items-start flex-col md:-right-1 lg:right-0" data-aos="fade-left" data-aos-duration="1000">
                        <p className=' uppercase font-poppins text-black font-light md:text-base lg:text-xl tracking-wider -rotate-90 lg:ml-[164px] md:ml-[136px] sm:ml-[95px] ml-[85px] mb-[20px]'>
                            MJH
                        </p>
                        <div className=" flex items-end">
                            <div className=" flex items-end -mb-3">
                                <p className=' font-normal font-neue text-black md:text-xl lg:text-2xl uppercase lg:mb-1'>
                                    analysis
                                </p>
                                <span className=' md:text-3xl lg:text-[40px] font-normal lg:mb-3 font-neue text-black rotate-90'>
                                    04
                                </span>
                            </div>
                            <img src={redline} alt="redline" className=' lg:w-auto md:w-3/12 sm:w-2/12 w-1/12' />
                        </div>
                    </div>
                </div>
                <div className=" mt-3 flex flex-row flex-wrap pb-1 -mx-3 mb-px">
                    <div className=" flex flex-col items-center lg:items-start lg:w-1/2 w-full px-3 pt-9" data-aos="fade-right" data-aos-duration="1000">
                        <p className=' font-neue font-normal text-2xl sm:text-[29px] leading-[37px] text-black uppercase'>
                            THE FOUR PHASES OF
                        </p>
                        <p className=' uppercase text-center lg:text-left text-4xl md:text-[52px] font-neue font-normal text-black max-w-[327px] md:leading-[62px]'>
                            SEPARATION <span className='text-[#F77B0B]'>MINDSET</span>
                        </p>
                        <p className=' mt-[19px] mb-px text-center md:text-left opacity-70 max-w-[484px] font-poppins font-normal text-black text-base'>
                            There are 4 typical separation phases. The 4 phases are not always clearly separated from each other and can overlap.
                        </p>
                        <div className=" max-w-[452px] mt-9 rounded-[63px] w-full p-[1.7px] bg-[linear-gradient(107.9deg,_#0C5FD1_1.25%,_#8703C5_93.71%)] cursor-pointer">
                            <div className=" flex items-center max-w-[452px] rounded-[63px] w-full py-[5.83px] px-2 bg-white duration-300 ease-linear hover:shadow-[0_0_5px_#1E52CF_inset]">
                                <img src={msg} alt="msg-icon" />
                                <div className="flex">
                                    <p className=' font-inter capitalize font-medium text-sm sm:text-base bg-clip-text bg-[linear-gradient(107.9deg,_#0C5FD1_1.25%,_#8703C5_93.71%)] text-transparent ms-1'>
                                        Book a non-binding initial consultation now
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" lg:w-1/2 w-full px-3 relative mt-6 lg:mt-0 pl-7 sm:pl-14" data-aos="fade-left" data-aos-duration="1000">
                        <Slider {...settings}>
                            <div className="bg-[#003E92] relative min-h-[350px] sm:min-h-[448px]">
                                <div className=" grid place-items-center w-full h-full pt-8 sm:pt-16">
                                    <div className="max-w-[364px] w-full relative z[1] mt-[69px]">
                                        <p className=' font-poppins font-medium text-base sm:text-xl text-white text-center capitalize'>
                                            1st phase
                                        </p>
                                        <p className=' font-poppins font-medium text-base sm:text-xl text-white text-center capitalize'>
                                            "The not-wanting-to-be-true"
                                        </p>
                                        <p className=' mt-4 font-poppins text-white font-normal text-sm sm:text-base text-center'>
                                            This phase is characterized by denial and ignoring the final separation.
                                        </p>
                                    </div>
                                </div>
                                <img src={layer} alt="layer" className=' absolute right-0 bottom-0' />
                            </div>
                            <div className="bg-[#003E92] relative min-h-[350px] sm:min-h-[448px]">
                                <div className=" grid place-items-center w-full h-full pt-8 sm:pt-16">
                                    <div className="max-w-[364px] w-full relative z[1] mt-[69px]">
                                        <p className=' font-poppins font-medium text-base sm:text-xl text-white text-center capitalize'>
                                            1st phase
                                        </p>
                                        <p className=' font-poppins font-medium text-base sm:text-xl text-white text-center capitalize'>
                                            "The not-wanting-to-be-true"
                                        </p>
                                        <p className=' mt-4 font-poppins text-white font-normal text-sm sm:text-base text-center'>
                                            This phase is characterized by denial and ignoring the final separation.
                                        </p>
                                    </div>
                                </div>
                                <img src={layer} alt="layer" className=' absolute right-0 bottom-0' />
                            </div>
                            <div className="bg-[#003E92] relative min-h-[350px] sm:min-h-[448px]">
                                <div className=" grid place-items-center w-full h-full pt-8 sm:pt-16">
                                    <div className="max-w-[364px] w-full relative z[1] mt-[69px]">
                                        <p className=' font-poppins font-medium text-base sm:text-xl text-white text-center capitalize'>
                                            1st phase
                                        </p>
                                        <p className=' font-poppins font-medium text-base sm:text-xl text-white text-center capitalize'>
                                            "The not-wanting-to-be-true"
                                        </p>
                                        <p className=' mt-4 font-poppins text-white font-normal text-sm sm:text-base text-center'>
                                            This phase is characterized by denial and ignoring the final separation.
                                        </p>
                                    </div>
                                </div>
                                <img src={layer} alt="layer" className=' absolute right-0 bottom-0' />
                            </div>
                            <div className="bg-[#003E92] relative min-h-[350px] sm:min-h-[448px]">
                                <div className=" grid place-items-center w-full h-full pt-8 sm:pt-16">
                                    <div className="max-w-[364px] w-full relative z[1] mt-[69px]">
                                        <p className=' font-poppins font-medium text-base sm:text-xl text-white text-center capitalize'>
                                            1st phase
                                        </p>
                                        <p className=' font-poppins font-medium text-base sm:text-xl text-white text-center capitalize'>
                                            "The not-wanting-to-be-true"
                                        </p>
                                        <p className=' mt-4 font-poppins text-white font-normal text-sm sm:text-base text-center'>
                                            This phase is characterized by denial and ignoring the final separation.
                                        </p>
                                    </div>
                                </div>
                                <img src={layer} alt="layer" className=' absolute right-0 bottom-0' />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <img src={ellipse} alt="ellipse" className=' absolute lg:-top-[52%] md:-top-[40%] sm:-top-1/3 -top-1/4 left-0' />
        </section>
    )
}

export default Mindset;
