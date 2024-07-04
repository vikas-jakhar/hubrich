import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Target = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className=' pt-12 bg-[#F2F8FF]'>
            <div className="container px-3 relative z-[1]">
                <div className="flex justify-center">
                    <h2 className=' uppercase text-[52px] font-neue font-normal text-nowrap mt-[7px]'>
                        <span className=' text-[#F77B0B]'>TARGET</span> group
                    </h2>
                    <div className=" border-l-2 border-[#9800B0] pl-3" data-aos="fade-left" data-aos-duration="1000">
                        <p className=' max-w-[419px] font-poppins font-normal text-sm md:text-base text-black pl-px -mt-[6px]'>
                            I will show you which steps are necessary for you to finally successfully let go of your EX. And I will support you to look confidently into your new future.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Target
