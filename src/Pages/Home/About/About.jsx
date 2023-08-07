import React from 'react';
import myPic from '../../../assets/images/oli.png'
import Title from '../Title/Title';
import LazyLoad from 'react-lazy-load';

const About = () => {
    return (
        <div className='my-40'>
        <Title>about me</Title>
        <div id='about' className=' lg:flex-row flex-col-reverse flex gap-10 lg:gap-28'>
            <div className=''>
                <p className='text-white text-lg'>I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do. I am dedicated to perfecting my craft by learning from more seasoned developers, remaining humble, and continuously making strides to learn all that I can about development.</p>
                <div className='mt-9 flex justify-center lg:justify-start  gap-5'>
            <a href="./oliullah resume.pdf" download className='secondary-btn-sm lg:secondary-btn'>Get Resume</a>
            <a href='#skills' className='primary-btn'>My Skills</a>
            </div>
            </div>
            <div className=''>
                <LazyLoad>
                    <img className='rounded-bl-full w-full lg:w-[2200px] bg-green-500 rounded-br-full' src={myPic} alt="" />
                </LazyLoad>
                
            </div>
            <div className='hidden lg:block'>
            <p className='font-bold -m-2 my-6 p-0 rotate-90 lg:text-4xl text-[#00cf5d]'>______</p>
                <h4 className="[writing-mode:vertical-rl] bg-gray-600 p-1 rounded font-bold text-xl py-5 text-white uppercase">About me</h4>
                <p className='font-bold -m-2 my-6 p-0 rotate-90 lg:text-4xl text-[#00cf5d]'>______</p>
            </div>
        </div>
        </div>
    );
};

export default About;