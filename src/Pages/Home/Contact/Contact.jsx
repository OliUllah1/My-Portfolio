import React from 'react';
import phone from '../../../assets/images/contacts/call.ico'
import email from '../../../assets/images/contacts/email.ico'
import location from '../../../assets/images/contacts//location.ico'

const Contact = () => {
    return (
        <div className='flex mt-28'>
            <div>
                <div>
                    <div className='bg-[#1d293a] rounded-tl-lg rounded-br-lg flex gap-5 p-7'>
                        <img className='w-10' src={phone} alt="" />
                        <div>
                            <h3 className='font-bold text-white text-xl'>Phone</h3>
                            <p className='text-gray-500'>+8801963496651</p>
                        </div>
                    </div>
                    <div className='bg-[#1d293a] my-5 rounded-tl-lg rounded-br-lg flex gap-5 p-7'>
                        <img className='w-10' src={email} alt="" />
                        <div>
                            <h3 className='font-bold text-white text-xl'>Email</h3>
                            <p className='text-gray-500'>oliullah915@gmail.com</p>
                        </div>
                    </div>
                    <div className='bg-[#1d293a] rounded-tl-lg rounded-br-lg flex gap-5 p-7'>
                        <img className='w-10' src={location} alt="" />
                        <div>
                            <h3 className='font-bold text-white text-xl'>Location</h3>
                            <p className='text-gray-500'>BancharamPur,BrahmanBaria,Bangladesh</p>
                        </div>
                    </div>
                </div>
                <dir>

                </dir>
            </div>
            <div>
            <p className='font-bold -m-2 my-6 p-0 rotate-90 lg:text-4xl text-[#00cf5d]'>______</p>
                <h4 className="[writing-mode:vertical-rl] bg-gray-600 p-1 rounded font-bold text-xl py-5 text-white uppercase">Contact me</h4>
                <p className='font-bold -m-2 my-6 p-0 rotate-90 lg:text-4xl text-[#00cf5d]'>______</p>
            </div>
        </div>
    );
};

export default Contact;