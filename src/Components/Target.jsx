import React, { useEffect } from 'react';

const Target = () => {
    return (
        <section className=' pt-12 bg-[#F2F8FF] pb-1 max-w-[1920px] mx-auto'>
            <div className="container px-3 relative z-[1]">
                <div className="flex  lg:justify-end items-center flex-col md:flex-row gap-5 lg:gap-[129px] mb-[50px]">
                    <h2 className=' uppercase lg:text-[52px] text-4xl font-neue font-normal text-nowrap mt-[7px]' data-aos="fade-right" data-aos-duration="1000">
                        <span className=' text-[#F77B0B]'>TARGET</span> group
                    </h2>
                    <div className=" border-l-2 border-[#9800B0] pl-3 mt-[6px]" data-aos="fade-left" data-aos-duration="1000">
                        <p className=' max-w-[350px] font-poppins font-normal text-sm md:text-base text-black pl-px -mt-[6px]'>
                            The coaching is aimed at married women who have already separated or are thinking of separating.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Target
