import React from 'react';

const Self = () => {
  const blue_box_row1 = [
    { id: 1, text: "Your self-esteem is in the basement." },
    { id: 2, text: "You keep asking yourself what you did wrong." },
    { id: 3, text: "The feeling of helplessness is your constant companion." },
  ];

  const blue_box_row2 = [
    { id: 4, text: "You spend the nights alone and lonely." },
    { id: 5, text: "You have stopped going out and spend the time crying in your room." },
    { id: 6, text: "An emotional chaos is raging inside you." },
  ];

  return (
    <section className='relative bg-self-img bg-no-repeat bg-cover bg-center py-2 md:py-0 max-w-[1920px] mx-auto'>
      <div className="container px-3">
        <div className="flex justify-center flex-wrap md:flex-nowrap lg:justify-end w-full lg:pr-[78px] gap-[29px] md:gap-0">
          {blue_box_row1.map(item => (
            <div key={item.id} className="pt-10 w-full max-w-[250px] h-[162px] bg-[#003E9233] flex justify-center items-start duration-300 ease-linear hover:bg-[#003E92] backdrop-blur-sm" data-aos="zoom-in" data-aos-duration="1000">
              <p className='font-poppins font-normal text-base text-white mt-0.5 max-w-[173px]'>
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center flex-wrap md:flex-nowrap lg:justify-start w-full mt-7 pt-px lg:pl-7 gap-[29px] md:gap-0">
          {blue_box_row2.map(item => (
            <div key={item.id} className="pt-11 w-full max-w-[250px] h-[169px] bg-[#003E9233] flex justify-center items-start duration-300 ease-linear hover:bg-[#003E92] backdrop-blur-sm" data-aos="zoom-in" data-aos-duration="1000">
              <p className='font-poppins font-normal text-base text-white mt-px max-w-[196px]'>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Self;
