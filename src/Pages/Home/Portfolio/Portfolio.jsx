import React from 'react';


const Portfolio = () => {
    return (
        <div id='portfolio' className='flex gap-20'>
            <div>
            <p className='font-bold -m-2 my-6 p-0 rotate-90 lg:text-4xl text-[#00cf5d]'>______</p>
                <h4 className="[writing-mode:vertical-rl] rotate-180 bg-gray-600 p-1 rounded font-bold text-xl py-5 text-white uppercase">Portfolio</h4>
                <p className='font-bold -m-2 my-6 p-0 rotate-90 lg:text-4xl text-[#00cf5d]'>______</p>
            </div>

            <div>
            <button className='secondary-btn mb-5'>Projects</button>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className="card w-full bg-[#1d293a] shadow-xl">
                <div className='portfolio-projects project-1 rounded-t-lg'>

                </div>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-[#1d293a] shadow-xl">
                <div className='portfolio-projects project-2 rounded-t-lg'>

                </div>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-[#1d293a] shadow-xl">
                <div className='portfolio-projects project-3 rounded-t-lg'>

                </div>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Portfolio;