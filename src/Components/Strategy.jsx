import React from 'react';
import msg from "../assets/image/svg/msg-icon.svg";

const Strategy = () => {
    const blue_box_row1 = [
        { id: 1, text: "How do I let go of my EX so I can finally leave him behind?" },
        { id: 2, text: " How does the divorce process work?" },
        { id: 3, text: "Do I need a lawyer?" },
    ]

    const blue_box_row2 = [
        { id: 1, text: "How much will the divorce cost?" },
        { id: 2, text: "What will happen to my children?" },
        { id: 3, text: "What does my future as a single person look like now?" },
        { id: 4, text: "How do I rebuild my self-esteem?" },
    ]
    return (
        <section className=' py-28 bg-sec_bg bg-no-repeat bg-cover bg-center'>
            <div className="container px-3 -mt-px xl:mb-[70px]">
                <div className="flex justify-center flex-col sm:flex-row sm:flex-wrap md:flex-nowrap md:gap-0 gap-[34px] items-center">
                    {blue_box_row1.map(item => (
                        <div key={item.id} className=" max-w-[250px] min-h-[200px] bg-[#FFFFFF26] w-full pt-14 flex justify-center duration-300 ease-linear hover:bg-[#003E92]" data-aos="zoom-in" data-aos-duration="1000">
                            <p className=' mt-1 pt-px max-w-[173px] font-poppins font-normal text-base text-white'>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8 pt-0.5 flex-col sm:flex-row sm:flex-wrap md:flex-nowrap md:gap-0 gap-[34px] items-center">
                    {blue_box_row2.map(item => (
                        <div key={item.id} className=" max-w-[250px] min-h-[200px] bg-[#FFFFFF26] w-full pt-14 flex justify-center duration-300 ease-linear hover:bg-[#003E92]" data-aos="zoom-in" data-aos-duration="1000">
                            <p className=' mt-1 pt-px max-w-[173px] font-poppins font-normal text-base text-white'>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center pt-[51px]" data-aos="fade-up" data-aos-duration="1000">
                    <div className=" max-w-[452px] mt-0.5 rounded-[63px] w-full p-[1.7px] bg-[linear-gradient(107.9deg,_#0C5FD1_1.25%,_#8703C5_93.71%)] cursor-pointer duration-300 ease-linear hover:shadow-[0_0_10px_#FFFFFF]">
                        <div className=" flex items-center max-w-[452px] rounded-[63px] w-full py-[5.83px] px-2 bg-white duration-300 ease-linear hover:shadow-[0_0_8px_#1E52CF_inset]">
                            <img src={msg} alt="msg-icon" />
                            <div className="flex">
                                <p className=' font-inter capitalize font-medium text-sm sm:text-base bg-clip-text bg-[linear-gradient(107.9deg,_#0C5FD1_1.25%,_#8703C5_93.71%)] text-transparent ms-1'>
                                    Book a non-binding initial consultation now
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Strategy
