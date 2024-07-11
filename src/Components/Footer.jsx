import React from 'react';
import layer from "../assets/image/webp/footer-layer.webp";
import { Email, Facebook, Insta, Twitter } from '../icon';

const Footer = () => {
    const currentyear = new Date().getFullYear();
    return (
        <footer className='bg-[#003E92] xl:min-h-[343px] relative py-8 xl:pt-24 pb-10 xl:pb-4 max-w-[1920px] mx-auto'>
            <div className="container px-3 relative z-[1] h-full mt-5">
                <div className=" sm:absolute top-1/2 -translate-y-1/2 right-3 flex justify-center sm:flex-col gap-3">
                    <a target='_blank' href="https://www.facebook.com/login/" className=' duration-300 ease-linear hover:scale-105 hover:drop-shadow-[0_0_15px_#FFFFFF]'>
                        <Facebook />
                    </a>
                    <a target='_blank' href="https://x.com/i/flow/login" className=' duration-300 ease-linear hover:scale-105 hover:drop-shadow-[0_0_15px_#FFFFFF]'>
                        <Twitter />
                    </a>
                    <a target='_blank' href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=AdF4I744RMl8xBI-O-5FM7UgfkDOkNGHGynU7YotcyB2duta16_5N3DwbznGLXHO0gt_F2lc4r0npQ&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className=' duration-300 ease-linear hover:scale-105 hover:drop-shadow-[0_0_15px_#FFFFFF]'>
                        <Email />
                    </a>
                    <a target='_blank' href="https://www.instagram.com/accounts/login/?hl=en" className=' duration-300 ease-linear hover:scale-105 hover:drop-shadow-[0_0_15px_#FFFFFF]'>
                        <Insta />
                    </a>
                </div>
                <div className=" flex justify-center h-full items-end pt-4">
                    <h2 className=' sm:mt-16 text-center font-poppins text-white font-normal text-base max-w-[264px]'>
                        (c){currentyear} MARC JOACHIM HUBRICH
                        All Rights Reserved
                    </h2>
                </div>
            </div>
            <img src={layer} alt="layer" className=' absolute w-full left-1/2 -translate-x-1/2 bottom-0 xl:h-full max-w-[1920px]' />
        </footer>
    )
}

export default Footer
