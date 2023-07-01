import React from 'react';

const Title = ({children}) => {
    return (
        <div className='lg:hidden block my-10'>
            <div className='flex items-center justify-center'>
                <p className='border-t-2 border-[#00cf5d] w-[80%]'></p>
                <h4 className="bg-gray-600 w-full rounded font-bold text-lg px-3 py-2 text-center text-white uppercase">{children}</h4>
                <p className='border-t-2 border-[#00cf5d] w-[80%]'></p>
            </div>
        </div>
    );
};

export default Title;