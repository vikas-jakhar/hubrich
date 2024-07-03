import React, { useState } from 'react';
import msg from "../Assets/image/svg/msg-icon.svg";
import phone from "../Assets/image/svg/phone-call.svg";

const Header = () => {
    const [open, setopen] = useState(false);
    function togglemenu() {
        setopen(!open);
    }
    // if (open === true) {
    //     // document.body.classList.add("overflow-hidden");
    // }
    // else {
    //     // document.body.classList.remove("overflow-hidden");
    // }
    return (
        <section className=' bg-white min-h-screen py-2 bg-hero-img bg-no-repeat bg-cover' id='hero'>
            <div className="container px-3 relative z-[1]">
                <nav className=' flex lg:justify-end w-full mt-4 pt-px mb-20 justify-center'>
                    <div className=" flex items-center gap-10 justify-between w-full sm:w-auto">
                        <div className={`${open ? "left-1/2 -translate-x-1/2" : ""} flex absolute  top-24 -left-full sm:relative sm:top-0 sm:left-0 items-center gap-10 duration-300 ease-linear`}>
                            <a href="#hero" onClick={togglemenu} className=' font-normal text-base font-neue text-black xl:text-white duration-300 ease-linear hover:text-[#1E52CF]'>
                                Benifits
                            </a>
                            <a href="#hero" onClick={togglemenu} className=' font-normal text-base font-neue text-black xl:text-white duration-300 ease-linear hover:text-[#1E52CF]'>
                                Testimonials
                            </a>
                        </div>
                        <button className=' py-4 text-nowrap px-7 bg-[linear-gradient(107.9deg,_#0C5FD1_1.25%,_#8703C5_93.71%)] text-white text-base font-medium font-inter duration-300 ease-linear hover:bg-transparent hover:bg-none border-0 hover:shadow-[0_0_5px_#1E52CF_inset] hover:text-[#1E52CF]'>
                            Book consultation now
                        </button>
                        <div className="relative w-7 h-5 sm:hidden" onClick={togglemenu}>
                            <span className={`${open ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"} flex w-full h-1 bg-[#1E52CF] absolute duration-300 ease-linear`}></span>
                            <span className={`${open ? " opacity-0" : ""} flex w-full h-1 bg-[#1E52CF] absolute top-1/2 -translate-y-1/2 duration-300 ease-linear`}></span>
                            <span className={`${open ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"} flex w-full h-1 bg-[#1E52CF] absolute duration-300 ease-linear`}></span>
                        </div>
                    </div>
                </nav>
                <div className=" xl:pt-20 lg:pt-10 max-w-[517px] w-full">
                    <h2 className=' font-normal text-lg font-neue text-[#F77B0B]'>
                        Marc joachim hubrich
                    </h2>
                    <p className=' text-4xl sm:text-5xl my-2 lg:my-0 lg:text-6xl text-black font-neue font-normal uppercase lg:leading-[77.28px]'>
                        Now I let you
                        go!
                    </p>
                    <div className='mt-1.5 pt-px opacity-70 text-base text-black font-normal font-poppins mb-0.5'>
                        For women who do not want to be completely dragged down by a SEPARATION.
                        <p>
                            How to let go of your EX so you can leave him behind
                            without having to run to a therapist right away.
                        </p>
                    </div>
                    <div className=" flex justify-between items-center mt-8">
                        <div className=" max-w-[452px] rounded-[63px] w-full p-[1.7px] bg-[linear-gradient(107.9deg,_#0C5FD1_1.25%,_#8703C5_93.71%)] cursor-pointer">
                            <div className=" flex items-center max-w-[452px] rounded-[63px] w-full py-[5.83px] px-2 bg-white duration-300 ease-linear hover:shadow-[0_0_5px_#1E52CF_inset]">
                                <img src={msg} alt="msg-icon" />
                                <div className="flex">
                                    <p className=' font-inter capitalize font-medium text-sm sm:text-base bg-clip-text bg-[linear-gradient(107.9deg,_#0C5FD1_1.25%,_#8703C5_93.71%)] text-transparent ms-1'>
                                        Book a non-binding initial consultation now
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img src={phone} alt="phone-call" className=' cursor-pointer duration-300 ease-linear hover:drop-shadow-[0_5px_2px_#1E52CF]' />
                    </div>
                </div>
                <div className=" pt-16 -mt-px flex w-full justify-start lg:justify-end xl:pr-14">
                    <div className=" max-w-[365.68px] w-full border-[#9800B0] border-s-2 pl-3 xl:mr-14">
                        <div className=" ml-px flex w-full items-start justify-between gap-1 -mt-[5px]">
                            <p className=' font-neue font-normal uppercase text-xs sm:text-base max-w-[146px] lg:text-white text-black'>
                                Die wichtigsten Aspekte einer Trennung:
                            </p>
                            <div className=" flex flex-col">
                                <div className=" flex items-center gap-2">
                                    <span className=' flex rounded-full w-1 h-1 lg:bg-white bg-black'></span>
                                    <p className=' text-nowrap capitalize font-poppins font-medium text-sm sm:text-base lg:text-white text-black'>
                                        physische Trennung
                                    </p>
                                </div>
                                <div className=" flex items-center gap-2 mt-0.5">
                                    <span className=' flex rounded-full w-1 h-1 lg:bg-white bg-black'></span>
                                    <p className=' text-nowrap capitalize font-poppins font-medium text-sm sm:text-base lg:text-white text-black'>
                                        mentale Trennung
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;
