import React, { useState } from 'react';
import html from '../../../assets/images/icon/html-5.ico'
import css from '../../../assets/images/icon/css3.ico'
import tailwind from '../../../assets/images/icon/tailwind-css.ico'
import bootstrap from '../../../assets/images/icon/bootstrap.ico'
import javascript from '../../../assets/images/icon/javascript.ico'
import restAPI from '../../../assets/images/icon/cloud-api.ico'
import firebase from '../../../assets/images/icon/firebase.ico'
import node from '../../../assets/images/icon/nodejs.ico'
import express from '../../../assets/images/icon/express.ico'
import react from '../../../assets/images/icon/react.ico';
import mongodb from '../../../assets/images/icon/mongodb.ico'
import next from '../../../assets/images/icon/nextjs.png' 
import vscode from '../../../assets/images/icon/visual-studio-code.ico'
import figma from '../../../assets/images/icon/figma.ico'
import chrome from '../../../assets/images/icon/chrome.ico'
import git from '../../../assets/images/icon/git.ico'
import postman from '../../../assets/images/icon/postman.ico'
import netlify from '../../../assets/images/icon/netlify.ico'
import vercel from '../../../assets/images/icon/vercel.png'
import chatGPT from '../../../assets/images/icon/chatgpt-icon.png'
const Skills = () => {
    const [active,setActive]=useState(true)
    console.log(active)
    return (
        <>
        <div className='flex gap-5 pl-32 text-white'>
            <button className={active ? 'secondary-btn' : 'primary-btn'} onClick={()=>{setActive(true)}}>Web</button>
            <button className={active ?  'primary-btn' : 'secondary-btn'} onClick={()=>{setActive(!true)}}>Tools</button>
        </div>
        <div className='flex  gap-12 pb-10'>
            <div>
            <p className='font-bold -m-2 my-6 p-0 rotate-90 lg:text-4xl text-[#00cf5d]'>______</p>
                <h4 className="[writing-mode:vertical-rl] rotate-180 bg-gray-600 p-1 rounded font-bold text-xl py-5 text-white uppercase">My Skills</h4>
                <p className='font-bold -m-2 my-6 p-0 rotate-90 lg:text-4xl text-[#00cf5d]'>______</p>
            </div>



            {/* web section start */}
            <div className={active ? '':'hidden'}>
            <div className='mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={html} alt="" />
                            <p>HTML 5</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>90%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[90%]"></div>
                    </div>
                </div>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={css} alt="" />
                            <p>CSS 3</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>90%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[90%]"></div>
                    </div>
                </div>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={bootstrap} alt="" />
                            <p>Bootstrap 5</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>80%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[80%]"></div>
                    </div>
                </div>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={tailwind} alt="" />
                            <p>Tailwind CSS</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>90%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[90%]"></div>
                    </div>
                </div>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={javascript} alt="" />
                            <p>Javascript</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>80%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[80%]"></div>
                    </div>
                </div>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={restAPI} alt="" />
                            <p>Rest API</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>90%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[90%]"></div>
                    </div>
                </div>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={node} alt="" />
                            <p>Node JS</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>20%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[20%]"></div>
                    </div>
                </div>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={express} alt="" />
                            <p>Express JS</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>70%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[70%]"></div>
                    </div>
                </div>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={react} alt="" />
                            <p>React JS</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>70%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[70%]"></div>
                    </div>
                </div>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={firebase} alt="" />
                            <p>Firebase</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>70%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[70%]"></div>
                    </div>
                </div>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={mongodb} alt="" />
                            <p>MongoDB</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>50%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[50%]"></div>
                    </div>
                </div>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={next} alt="" />
                            <p>Next JS</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>20%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[20%]"></div>
                    </div>
                </div>
            </div>
            </div>


            {/* Tools section start */}
            <div className={active ? 'hidden':''}>
            <div className='mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={vscode} alt="" />
                            <p>VS Code</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>90%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[90%]"></div>
                    </div>
                </div>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={figma} alt="" />
                            <p>Figma</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>70%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[70%]"></div>
                    </div>
                </div>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={git} alt="" />
                            <p>Git</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>60%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[60%]"></div>
                    </div>
                </div>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={postman} alt="" />
                            <p>Post Man</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>70%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[70%]"></div>
                    </div>
                </div>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={chrome} alt="" />
                            <p>Chrome Dev Tools</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>70%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[70%]"></div>
                    </div>
                </div>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={netlify} alt="" />
                            <p>Netlify</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>90%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[90%]"></div>
                    </div>
                </div>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={vercel} alt="" />
                            <p>Vercel</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>70%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[70%]"></div>
                    </div>
                </div>
                <div className=' bg-[#1d293a] relative rounded-lg w-[530px] h-20 text-white font-bold'>
                    <div className='flex justify-between p-5'>
                        <div className='flex gap-3'>
                            <img className='w-8 h-8' src={chatGPT} alt="" />
                            <p>Chat GPT</p>
                        </div>
                        <div className=' bg-green-500 px-2 py-1 rounded-md'>
                            <p>70%</p>
                        </div>
                    </div>
                   
                    <div className="w-full absolute bottom-0  bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-[#00cf5d] h-2 rounded-full w-[70%]"></div>
                    </div>
                </div>
            </div>
            </div>





        </div>
        </>
    );
};

export default Skills;