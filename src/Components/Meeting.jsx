import React from 'react'

const Meeting = () => {
    return (
        <section className=' relative pt-[71px] pb-[60px] bg-[#F2F8FF]'>
            <div className="container px-3">
                <div className="flex items-center flex-col md:flex-row md:justify-between gap-3">
                    <div className=" flex flex-col items-center md:items-start">
                        <p className=' uppercase font-neue font-normal text-3xl lg:text-4xl xl:text-[52px] xl:leading-[66px] text-black'>
                            Request your
                        </p>
                        <p className=' uppercase font-neue font-normal text-center md:text-left text-3xl lg:text-4xl xl:text-[52px] xl:leading-[66px] text-black'>
                            <span className='text-[#F77B0B]'>non-binding</span> strategy
                        </p>
                        <p className=' uppercase font-neue font-normal text-3xl lg:text-4xl xl:text-[52px] xl:leading-[66px] text-black'>
                            meeting now!
                        </p>
                    </div>
                    <div className="max-w-[412px] border-l-2 border-[#9800B0] pl-3 mt-[6px]">
                        <p className='ml-0.5 font-normal font-poppins text-base text-black -mt-[6px]'>
                            Click on the button below, choose an appointment and answer the questions truthfully. One of our strategy consultants will then contact you and conduct your free consultation. We can advise you on the following topics:
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Meeting;