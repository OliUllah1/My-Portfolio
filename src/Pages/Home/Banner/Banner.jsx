import React from 'react';
import { FaGithub,FaLinkedinIn,FaTwitter,FaFacebookF,FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import bannerLogo from '../../../assets/images/responsive.png'
const Banner = () => {
    return (
        <div id='home' className='flex gap-20 items-center h-[450px]'>
            <div>
                <div className='mb-10 text-xl ml-3 text-white'>
                    <Link to='https://github.com/OliUllah1'><FaGithub className='my-2'></FaGithub></Link>
                    <Link to='https://www.linkedin.com/in/oli-ullah-89b464269/'><FaLinkedinIn></FaLinkedinIn></Link>
                    <Link to='https://www.facebook.com/md.oli.1671'><FaFacebookF className='my-2'></FaFacebookF></Link>
                    <Link to='https://twitter.com/oliullah915'><FaTwitter></FaTwitter></Link>
                    <Link to='https://www.instagram.com/md.oliullah_9/'><FaInstagram className='my-2'></FaInstagram></Link>
                </div>
                <p className='font-bold -m-2 my-6 p-0 rotate-90 lg:text-4xl text-[#00cf5d]'>______</p>
                <h4 className="[writing-mode:vertical-rl] rotate-180 bg-gray-600 p-1 rounded font-bold text-xl py-5 text-white uppercase">follow Me</h4>
            </div>
            <div>
            <p className='text-[#00cf5d] text-2xl'>Hello! I am</p>
            <h1 className='text-8xl text-white font-semibold'>Oli Ullah</h1>
            <h3 className='mt-4 font-bold text-2xl text-[#00cf5d]'>Font-end Web Developer</h3>
            <div className='mt-5 flex gap-5'>
            <button className='secondary-btn'>Get Resume</button>
            <button className='primary-btn'>About Me</button>
            </div>
            </div>
            <img src={bannerLogo} alt="" />
        </div>
    );
};

export default Banner;