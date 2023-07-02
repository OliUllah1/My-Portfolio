import React from 'react';
import Title from '../Title/Title';
import { FaGithub, FaLink } from "react-icons/fa";

const Portfolio = () => {
    return (
        <div id='portfolio' className='lg:flex gap-20'>
            <Title>Portfolio</Title>
            <div className='hidden lg:block'>
            <p className='font-bold -m-2 my-6 p-0 rotate-90 lg:text-4xl text-[#00cf5d]'>______</p>
                <h4 className="[writing-mode:vertical-rl] rotate-180 bg-gray-600 p-1 rounded font-bold text-xl py-5 text-white uppercase">Portfolio</h4>
                <p className='font-bold -m-2 my-6 p-0 rotate-90 lg:text-4xl text-[#00cf5d]'>______</p>
            </div>

            <div>
            <button className='secondary-btn flex mx-auto lg:mx-0 mb-5'>Projects</button>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className="card w-full bg-[#1d293a] shadow-xl">
                <div className='portfolio-projects project-1 rounded-t-lg'>

                </div>
                <div className="p-5 space-y-3">
                    <h2 className=" font-bold text-2xl text-white">Articio</h2>
                    <p className='text-white'>Articio is a Educational single page web application.On this website dashboard and user different types roles are provided.Stripe payment method is used to enroll the class.</p>
                    <div className='text-gray-300 pt-2 flex gap-2'>
                        <p>React</p>
                        <p>Axios</p>
                        <p>Stripe</p>
                        <p>JWT</p>
                        <p>Firebase</p>
                        <p>MongoDB</p>
                    </div>
                    <div className='text-white gap-2 my-3 flex pt-1 justify-between'>
                        <a className='sm-btn flex gap-2 items-center' href="https://github.com/OliUllah1/summer-camp-school">Client <FaGithub></FaGithub> </a>
                        <a className='sm-btn flex gap-2 items-center' href="https://github.com/OliUllah1/summer-camp-school-server">server <FaGithub></FaGithub></a>
                        <a className='sm-btn flex gap-2 items-center' href="https://summer-camp-school-b4eed.web.app/">live link <FaLink></FaLink> </a>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-[#1d293a] shadow-xl">
                <div className='portfolio-projects project-2 rounded-t-lg'>

                </div>
                <div className="p-5 space-y-2">
                    <h2 className="font-bold text-2xl text-white">Toys House</h2>
                    <p className='text-white'>Toys House is a dynamic full-stack E-commerce website.The website offers a user-friendly interface for customers to create account, browse, upload, search, see toy details etc.</p>
                    <div className='text-gray-300 flex gap-2'>
                        <p>React</p>
                        <p>Tailwind</p>
                        <p>Express</p>
                        <p>Firebase</p>
                        <p>MongoDB</p>
                    </div>


                    <div className='text-white gap-2 my-3 flex justify-between'>
                        <a className='sm-btn flex gap-2 items-center' href="https://github.com/OliUllah1/toy-marketplace">Client <FaGithub></FaGithub> </a>
                        <a className='sm-btn flex gap-2 items-center' href="https://github.com/OliUllah1/toy-marketplace-server">server <FaGithub></FaGithub></a>
                        <a className='sm-btn flex gap-2 items-center' href="https://toy-market-5e8cb.web.app/">live link <FaLink></FaLink> </a>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-[#1d293a] shadow-xl">
                <div className='portfolio-projects project-3 rounded-t-lg'>

                </div>
                <div className="p-5 space-y-3">
                <h2 className=" font-bold text-2xl text-white">FootHub</h2>
                    <p className='text-white'>FoodHub is a Restaurant website.User can find qualified chef's and see their recipes. User can save the recipe they like and order food through this website.</p>
                    <div className='text-gray-300 pt-1 flex gap-3'>
                        <p>React js</p>
                        <p>Tailwind CSS</p>
                        <p>Firebase</p>
                        <p>MongoDB</p>
                    </div>
                    <div className='text-white gap-2 pt-2 my-3 flex justify-between'>
                        <a className='sm-btn flex gap-2 items-center' href="https://github.com/OliUllah1/chef-recipe-hunter">Client <FaGithub></FaGithub> </a>
                        <a className='sm-btn flex gap-2 items-center' href="https://github.com/OliUllah1/chef-recipe-hunter-server">server <FaGithub></FaGithub></a>
                        <a className='sm-btn flex gap-2 items-center' href="https://silver-mooncake-9b2713.netlify.app/">live link <FaLink></FaLink> </a>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Portfolio;