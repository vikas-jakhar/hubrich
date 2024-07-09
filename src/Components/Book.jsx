import React from 'react';
import msg from "../assets/image/svg/msg-icon.svg";
import flower from "../assets/image/webp/flower.webp";
import centerflower from "../assets/image/webp/center-flower.webp";
import bottomflower from "../assets/image/webp/bottom-left-flower.webp";
import redline from "../assets/image/webp/red-line2.webp";
import redline3 from "../assets/image/webp/red-line3.webp";

const Book02 = () => {
    const blue_box = [
        { id: 1, text: " Why does your EX have to disappear from your life forever?" },
        { id: 2, text: " What should your everyday life as a single person look like now and how can you cope with the new challenges?" },
        { id: 3, text: " How can you handle the divorce quickly and without complications, without worrying about finances or the well-being of the children?" },
        { id: 4, text: " Who are you without your EX?" },
        { id: 5, text: " What new dreams and hopes do you want to live?" },
    ]
    return (
        <section className=' pt-11 pb-6 relative'>
            <div className="container px-3 relative z-[1] my-0.5 pt-px pb-5">
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
                        <div className=" border-l-2 border-[#9800B0] pl-3 mt-[6px]" data-aos="fade-left" data-aos-duration="1000">
                            <p className=' max-w-[419px] font-poppins font-normal text-sm md:text-base text-black pl-px -mt-[6px]'>
                                I will show you which steps are necessary for you to finally successfully let go of your EX. And I will support you to look confidently into your new future.
                            </p>
                        </div>
                    </div>
                </div>
                <h2 className='text-center mt-12 font-neue font-normal text-xl text-black' data-aos="fade-up" data-aos-duration="1000">
                    In a 1:1 live coaching session, we will clarify the following questions in particular:
                </h2>
                <div className=" mt-7 w-full flex flex-row flex-wrap mb-5 lg:mb-[77px]">
                    {blue_box.map(item => (
                        <div key={item.id} className=" pt-16 duration-300 ease-linear flex justify-center w-full sm:w-6/12 lg:w-4/12 hover:bg-[#F5FAFF] group min-h-[230px] h-full" data-aos="zoom-in" data-aos-duration="1000">
                            <p className=' max-w-[283px] font-poppins font-normal text-base text-black -mt-px duration-300 ease-linear group-hover:text-[#003E92]'>
                                {item.text}
                            </p>
                        </div>
                    ))}
                    <div className=" pt-16 duration-300 ease-linear flex justify-center w-full sm:w-6/12 lg:w-4/12 items-start hover:bg-[#F5FAFF] group min-h-[230px] h-full" data-aos="zoom-in" data-aos-duration="1000">
                        <div className=" max-w-[292px] rounded-lg w-full p-[1.7px] bg-[linear-gradient(107.9deg,_#0C5FD1_1.25%,_#8703C5_93.71%)] cursor-pointer">
                            <div className=" flex items-center  max-w-[292px] rounded-lg w-full py-[18px] px-2 bg-white duration-300 ease-linear hover:shadow-[0_0_5px_#1E52CF_inset]">
                                <img src={msg} alt="msg-icon" />
                                <div className="flex">
                                    <p className=' font-inter font-medium text-sm capitalize sm:text-base bg-clip-text bg-[linear-gradient(107.9deg,_#0C5FD1_1.25%,_#8703C5_93.71%)] text-transparent ms-1'>
                                        Book a non-binding initial consultation now
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" absolute right-0 lg:top-0 md:top-10 sm:top-16 top-44 flex items-start flex-col" data-aos="fade-left" data-aos-duration="1000">
                    <p className=' uppercase font-poppins text-black font-light md:text-base lg:text-xl tracking-wider lg:ml-12 md:ml-7 sm:ml-1 -rotate-90 mb-[20px]'>
                        MJH
                    </p>
                    <div className=" flex items-end">
                        <div className=" flex items-end lg:mb-0 -mb-1">
                            <span className=' md:text-3xl lg:text-[40px] font-normal font-neue text-black rotate-90'>
                                02
                            </span>
                        </div>
                        <img src={redline} alt="redline" className=' xl:w-auto lg:w-4/12 md:w-3/12 sm:w-2/12 w-[12%]' />
                    </div>
                </div>
                <div className=" absolute bottom-3 left-3 flex items-start flex-col" data-aos="fade-right" data-aos-duration="1000">
                    <div className=" flex items-end">
                        <img src={redline3} alt="redline3" className=' w-auto' />
                        <div className=" flex items-end -mb-3">
                            <span className=' md:text-3xl lg:text-[40px] lg:mb-3 font-normal font-neue text-black -rotate-90'>
                                03
                            </span>
                            <p className=' font-normal font-neue text-black md:text-xl lg:text-2xl uppercase lg:mb-1'>
                                Goal
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={centerflower} alt="centerflower" className=' absolute top-[48%] right-0 -translate-y-1/2' />
            <img src={bottomflower} alt="bottomflower" className=' absolute left-0 bottom-0' data-aos="fade-right" data-aos-duration="1000" />
        </section>
    )
}

export default Book02;
