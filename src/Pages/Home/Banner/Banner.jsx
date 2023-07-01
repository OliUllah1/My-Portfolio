import React from 'react';
import { FaGithub,FaLinkedinIn,FaTwitter,FaFacebookF,FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import bannerLogo from '../../../assets/images/responsive.png'
const Banner = () => {
    return (
        <div id='home' className='lg:flex gap-20 items-center lg:h-[450px]'>
            <div className='hidden lg:block'>
                <div className='mb-24 text-xl ml-2 text-white'>
                    <Link to='https://github.com/OliUllah1'><FaGithub className='my-3'></FaGithub></Link>
                    <Link to='https://www.linkedin.com/in/oli-ullah-89b464269/'><FaLinkedinIn></FaLinkedinIn></Link>
                    <Link to='https://www.facebook.com/md.oli.1671'><FaFacebookF className='my-3'></FaFacebookF></Link>
                    <Link to='https://twitter.com/oliullah915'><FaTwitter></FaTwitter></Link>
                    <Link to='https://www.instagram.com/md.oliullah_9/'><FaInstagram className='my-3'></FaInstagram></Link>
                </div>
                <div className='follow relative'>
                <h4 className="lg:[writing-mode:vertical-rl] lg:rotate-180 bg-gray-600 p-1 rounded font-bold text-xl py-5 text-white uppercase">follow Me</h4>
                </div>
            </div>
            <div className='text-center mt-32 lg:mt-0 lg:text-left'>
            <p className='text-[#00cf5d] text-xl lg:text-2xl'>Hello! I am</p>
            <h1 className='text-5xl lg:text-8xl text-white font-semibold'>Oli Ullah</h1>
            <h3 className='mt-4 font-bold text-2xl text-[#00cf5d]'>Font-end Web Developer</h3>
            <div className='mt-5 flex justify-center lg:justify-start gap-5'>
            <button className='secondary-btn-sm lg:secondary-btn'>Get Resume</button>
            <button className='primary-btn'>About Me</button>
            </div>
            </div>
            <img className='hidden lg:block' src={bannerLogo} alt="" />


            <div className='lg:hidden block mt-10'>
                <div className='flex items-center justify-center'>
                <p className='border-t-2 border-[#00cf5d] w-[80%]'></p>
                <h4 className="bg-gray-600 w-full rounded font-semibold text-lg px-3 py-2 text-white text-center uppercase">follow Me</h4>
                <p className='border-t-2 border-[#00cf5d] w-[80%]'></p>
                </div>

                <div className='flex justify-center gap-5 mt-3 items-center  text-xl text-white'>
                    <Link to='https://github.com/OliUllah1'><FaGithub className='my-3'></FaGithub></Link>
                    <Link to='https://www.linkedin.com/in/oli-ullah-89b464269/'><FaLinkedinIn></FaLinkedinIn></Link>
                    <Link to='https://www.facebook.com/md.oli.1671'><FaFacebookF className='my-3'></FaFacebookF></Link>
                    <Link to='https://twitter.com/oliullah915'><FaTwitter></FaTwitter></Link>
                    <Link to='https://www.instagram.com/md.oliullah_9/'><FaInstagram className='my-3'></FaInstagram></Link>
                </div>
               
            </div>




        </div>
    );
};

export default Banner;