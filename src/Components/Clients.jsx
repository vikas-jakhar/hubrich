import React from 'react';
import Slider from "react-slick";
import women from "../assets/image/svg/women-img.svg";
import redline from "../assets/image/webp/red-line6.webp";
import redline2 from "../assets/image/webp/red-line7.webp";
import comma from "../assets/image/webp/comma.webp";

const Clients = () => {


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 8000,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    }
  };
  return (
    <section className='sm:pt-24 pt-5 pb-[74px] relative max-w-[1920px] mx-auto'>
      <div className="container px-3 mt-24 mb-20 pt-2 pb-[34px] relative">
        <div className=" absolute z-[2] sm:-top-[176px] -top-24 right-0 flex items-start flex-col" data-aos="fade-up" data-aos-duration="1000">
          <p className=' uppercase font-poppins text-black font-light md:text-base lg:text-xl tracking-wider -rotate-90 md:ml-[32px] ml-2 lg:ml-[47px] sm:ml-[13px] mb-[20px]'>
            MJH
          </p>
          <div className=" flex items-end">
            <div className=" flex items-end -mb-3">
              <span className=' md:text-3xl lg:text-[40px] font-normal lg:mb-3 font-neue text-black rotate-90'>
                06
              </span>
            </div>
            <img src={redline} alt="redline" className=' lg:w-auto sm:w-4/12 w-2/12' />
          </div>
        </div>
        <h2 className='md:mt-5 p-px bg-white relative z-[1] text-center uppercase font-neue font-normal text-black text-3xl sm:text-4xl md:text-[52px] md:leading-[67px]' data-aos="fade-left" data-aos-duration="1000">
          What our <span className='text-[#F77B0B]'>clients</span> say
        </h2>
        <div className="slider-content w-full relative lg:-mt-[34px]" data-aos="zoom-in" data-aos-duration="1000">
          <img src={comma} alt="comma" className=' absolute top-16 lg:top-[81px] right-[32px] hidden sm:flex' />
          <div className="slider-container w-full">
            <Slider {...settings}>
              <div className="slide-item flex justify-center">
                <div className="flex flex-col items-center justify-center w-full px-2 md:px-8 xl:px-0">
                  <div className=" shadow md:shadow-[0px_2px_48px_0px_#00000014] px-2 relative max-w-[820px] flex flex-col items-center w-full pt-14 pb-8">
                    <img src={women} alt="women" className='absolute left-1/2 -translate-x-1/2 sm:-top-1/2 -translate-y-[110px] sm:translate-y-[81%]' />
                    <p className='max-w-[721px] text-center mt-0.5 font-poppins font-normal text-base text-black opacity-70'>
                      Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum.
                    </p>
                    <p className='mt-[26px] font-poppins text-black font-medium text-base'>
                      Marrie James-CEO
                    </p>
                    <p className='font-poppins font-normal text-base text-black opacity-70 mt-0.5'>
                      Limana Enterprises, CA
                    </p>
                  </div>
                  <div className="mt-[20px] flex flex-col sm:flex-row items-center gap-5 relative max-w-[820px] w-full">
                    <div className="sm:max-w-[400px] w-full pt-6 pb-[31px]  shadow md:shadow-[0px_2px_48px_0px_#00000014] px-2 flex flex-col items-center">
                      <p className='mt-px max-w-[320px] text-center font-poppins font-normal text-base text-black opacity-70'>
                        Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.
                      </p>
                      <p className='mt-[19px] font-poppins text-black font-medium text-base'>
                        Ralph Edwards-CEO
                      </p>
                      <p className='font-poppins font-normal text-base text-black opacity-70 mt-0.5'>
                        Limana Enterprises, CA
                      </p>
                    </div>
                    <div className="sm:max-w-[400px] w-full pt-6 pb-[31px]  shadow md:shadow-[0px_2px_48px_0px_#00000014] px-2 flex flex-col items-center">
                      <p className='mt-px max-w-[320px] text-center font-poppins font-normal text-base text-black opacity-70'>
                        Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.
                      </p>
                      <p className='mt-[19px] font-poppins text-black font-medium text-base'>
                        Darrell Steward-Head
                      </p>
                      <p className='font-poppins font-normal text-base text-black opacity-70 mt-0.5'>
                        Limana Enterprises, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item flex justify-center">
                <div className="flex flex-col items-center justify-center w-full px-2 md:px-8 xl:px-0">
                  <div className=" shadow md:shadow-[0px_2px_48px_0px_#00000014] px-2 relative max-w-[820px] flex flex-col items-center w-full pt-14 pb-8">
                    <img src={women} alt="women" className='absolute left-1/2 -translate-x-1/2 sm:-top-1/2 -translate-y-[110px] sm:translate-y-[81%]' />
                    <p className='max-w-[721px] text-center mt-0.5 font-poppins font-normal text-base text-black opacity-70'>
                      Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum.
                    </p>
                    <p className='mt-[26px] font-poppins text-black font-medium text-base'>
                      Marrie James-CEO
                    </p>
                    <p className='font-poppins font-normal text-base text-black opacity-70 mt-0.5'>
                      Limana Enterprises, CA
                    </p>
                  </div>
                  <div className="mt-[20px] flex flex-col sm:flex-row items-center gap-5 relative max-w-[820px] w-full">
                    <div className="sm:max-w-[400px] w-full pt-6 pb-[31px]  shadow md:shadow-[0px_2px_48px_0px_#00000014] px-2 flex flex-col items-center">
                      <p className='mt-px max-w-[320px] text-center font-poppins font-normal text-base text-black opacity-70'>
                        Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.
                      </p>
                      <p className='mt-[19px] font-poppins text-black font-medium text-base'>
                        Ralph Edwards-CEO
                      </p>
                      <p className='font-poppins font-normal text-base text-black opacity-70 mt-0.5'>
                        Limana Enterprises, CA
                      </p>
                    </div>
                    <div className="sm:max-w-[400px] w-full pt-6 pb-[31px]  shadow md:shadow-[0px_2px_48px_0px_#00000014] px-2 flex flex-col items-center">
                      <p className='mt-px max-w-[320px] text-center font-poppins font-normal text-base text-black opacity-70'>
                        Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.
                      </p>
                      <p className='mt-[19px] font-poppins text-black font-medium text-base'>
                        Darrell Steward-Head
                      </p>
                      <p className='font-poppins font-normal text-base text-black opacity-70 mt-0.5'>
                        Limana Enterprises, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item flex justify-center">
                <div className="flex flex-col items-center justify-center w-full px-2 md:px-8 xl:px-0">
                  <div className=" shadow md:shadow-[0px_2px_48px_0px_#00000014] px-2 relative max-w-[820px] flex flex-col items-center w-full pt-14 pb-8">
                    <img src={women} alt="women" className='absolute left-1/2 -translate-x-1/2 sm:-top-1/2 -translate-y-[110px] sm:translate-y-[81%]' />
                    <p className='max-w-[721px] text-center mt-0.5 font-poppins font-normal text-base text-black opacity-70'>
                      Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum.
                    </p>
                    <p className='mt-[26px] font-poppins text-black font-medium text-base'>
                      Marrie James-CEO
                    </p>
                    <p className='font-poppins font-normal text-base text-black opacity-70 mt-0.5'>
                      Limana Enterprises, CA
                    </p>
                  </div>
                  <div className="mt-[20px] flex flex-col sm:flex-row items-center gap-5 relative max-w-[820px] w-full">
                    <div className="sm:max-w-[400px] w-full pt-6 pb-[31px]  shadow md:shadow-[0px_2px_48px_0px_#00000014] px-2 flex flex-col items-center">
                      <p className='mt-px max-w-[320px] text-center font-poppins font-normal text-base text-black opacity-70'>
                        Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.
                      </p>
                      <p className='mt-[19px] font-poppins text-black font-medium text-base'>
                        Ralph Edwards-CEO
                      </p>
                      <p className='font-poppins font-normal text-base text-black opacity-70 mt-0.5'>
                        Limana Enterprises, CA
                      </p>
                    </div>
                    <div className="sm:max-w-[400px] w-full pt-6 pb-[31px]  shadow md:shadow-[0px_2px_48px_0px_#00000014] px-2 flex flex-col items-center">
                      <p className='mt-px max-w-[320px] text-center font-poppins font-normal text-base text-black opacity-70'>
                        Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.
                      </p>
                      <p className='mt-[19px] font-poppins text-black font-medium text-base'>
                        Darrell Steward-Head
                      </p>
                      <p className='font-poppins font-normal text-base text-black opacity-70 mt-0.5'>
                        Limana Enterprises, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className=" absolute -bottom-[122px] left-3 flex items-start flex-col" data-aos="fade-right" data-aos-duration="1000">
          <p className=' uppercase font-poppins text-black font-light md:text-base lg:text-xl tracking-wider -rotate-90 -ml-5 mb-[20px]'>
            MJH
          </p>
          <div className=" flex items-end">
            <img src={redline2} alt="redline" className=' lg:w-auto w-1/12' />
            <div className=" flex items-end -mb-3">
              <span className=' md:text-3xl lg:text-[40px] font-normal lg:mb-3 font-neue text-black -rotate-90'>
                07
              </span>
              <p className=' font-normal font-neue text-black md:text-xl lg:text-2xl uppercase lg:mb-1'>
                take step
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients;
