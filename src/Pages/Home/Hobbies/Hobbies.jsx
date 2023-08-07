import React from 'react';
// import { FaCode,FaGlobeEurope,FaHiking,FaPalette,FaSwimmer,FaHandsHelping } from "react-icons/fa";
import coding from '../../../assets/images/hobbies/coding.png'
import drawing from '../../../assets/images/hobbies/drawing.png'
import swimming from '../../../assets/images/hobbies/swimming.png'
import traveling from '../../../assets/images/hobbies/traveling.png'
import Title from '../Title/Title';
import LazyLoad from 'react-lazy-load';

const Hobbies = () => {
    return (
        <div className='lg:flex gap-28 my-40'>
            <Title>LOVE TO DO</Title>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 h-[75%]'>
                <div className='bg-[#1d293a] flex items-center justify-center lg:justify-start lg:py-10 lg:pl-5 lg:pr-32  py-7 rounded-lg'>
                    <div>
                        <LazyLoad>
                        <img className='w-28 mb-3' src={coding} alt="" />
                        </LazyLoad>
                    
                    <p className='text-white text-center lg:text-left font-bold text-2xl'>Coding</p>
                    </div>
                </div>
                <div className='bg-[#1d293a] flex items-center  justify-center lg:justify-start lg:py-10 lg:pl-5 lg:pr-32  py-7 rounded-lg'>
                    <div>
                        <LazyLoad>
                        <img className='w-28 mb-3' src={drawing} alt="" />
                        </LazyLoad>
                    
                    <p className='text-white text-center lg:text-left  font-bold text-2xl'>Drawing</p>
                    </div>
                </div>
                <div className='bg-[#1d293a] flex items-center  justify-center lg:justify-start lg:py-10 lg:pl-5 lg:pr-32  py-7 rounded-lg'>
                    <div>
                        <LazyLoad>
                        <img className='w-28 mb-3' src={swimming} alt="" />
                        </LazyLoad>
                    <p className='text-white text-center lg:text-left  font-bold text-2xl '>Swimming</p>
                    </div>
                </div>
                <div className='bg-[#1d293a] flex items-center  justify-center lg:justify-start lg:py-10 lg:pl-5 lg:pr-32  py-7 rounded-lg'>
                    <div>
                        <LazyLoad>
                        <img className='w-28 mb-3' src={traveling} alt="" />
                        </LazyLoad>
                   
                    <p className='text-white text-center lg:text-left  font-bold text-2xl '>Traveling</p>
                    </div>
                </div>
            </div>

            <div className='hidden lg:block'>
            <p className='font-bold  my-2 ml-1 p-0 rotate-90 lg:text-4xl text-[#00cf5d]'>____</p>
                <h4 className="[writing-mode:vertical-rl] bg-gray-600 p-1 rounded font-bold text-xl py-5 text-white uppercase">LOVE TO DO</h4>
                <p className='font-bold mt-3 ml-1 p-0 rotate-90 lg:text-4xl text-[#00cf5d]'>____</p>
            </div>

            
        </div>
    );
};

export default Hobbies;