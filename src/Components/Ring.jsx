import React, { useEffect, useRef } from 'react';

const Ring = () => {
    const white_box = [
        { id: 1, text: " You have separated and have the feeling that you can never be happy again and that you will be alone forever." },
        { id: 2, text: "  How are you supposed to be able to let go of someone who is so entangled with your life? It's impossible, isn't it?" },
    ]
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const firstChild = containerRef.current.firstChild;
            if (firstChild) {
                firstChild.style.marginTop = '0';
            }
        }
    }, []);
    return (
        <section className=' bg-ring bg-no-repeat bg-cover min-h-[623px] flex items-center py-8 lg:py-5 bg-center max-w-[1920px] mx-auto'>
            <div className="container px-3 relative z-[1] w-full flex flex-col items-center lg:items-start">
                <div className=" flex flex-col w-full sm:w-8/12 lg:w-auto" ref={containerRef}>
                    {white_box.map(item => (
                        <div key={item.id} className=" pt-10 mt-8 px-2 bg-[#FFFFFF1F] border-[#FFFFFF26] border-[1px] lg:max-w-[382px] min-h-[187px] w-full h-full backdrop-blur-sm flex justify-center" data-aos="fade-right" data-aos-duration="1000">
                            <p className=' font-poppins font-normal text-base text-white max-w-[312px]'>
                                {item.text}
                            </p>
                        </div>
                    ))}
                    <div className=" flex justify-center pt-16 lg:max-w-[338px] bg-[#003E92B2] h-[272px] w-full relative lg:absolute lg:right-12 lg:-bottom-[8.50rem] mt-8 lg:mt-0 backdrop-blur-sm" data-aos="fade-left" data-aos-duration="1000">
                        <p className='max-w-[270px] font-poppins font-normal text-base text-white mt-px'>
                            To understand how to let go of your partner, you need a detailed step-by-step action plan, which you will receive from me in a 1:1 coaching session.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ring
